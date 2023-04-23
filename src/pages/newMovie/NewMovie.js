import { useContext, useState } from "react";
import "./newMovie.css";
import storage from "../../firebase";
import { ref, getDownloadURL,uploadBytesResumable } from "firebase/storage";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { createMovie } from "../../context/movieContext/apiCalls";
import { useNavigate } from "react-router-dom";

const NewMovie = () => {
  const [newMovie, setNewMovie] = useState({
    title : "",
    desc : "",
    genre : "",
    year : "",
    limit : "",
    trailer : "",
    video : ""
  });
  const [imgTitle, setImgTitle] = useState({});
  const [img, setImg] = useState();
  const [uploaded, setUploaded] = useState(0);
  const navigate = useNavigate();

  const{dispatch} = useContext(MovieContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const imgChange = (e) => {
    const files = e.target.files[0];
    setImg(files);
  };
  const titleImgChange = (e) => {
    const files = e.target.files[0];
    setImgTitle(files);
  };

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const storageRef = ref(storage, `/items/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef,item.file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is" + progress + " % done");
        },
        (err) => {
          console.log(err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setNewMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: img, label: "img" },
      { file: imgTitle, label: "imgTitle" },
    ]);
  };

  const handleCreate = (e) => {
      e.preventDefault();
      createMovie(newMovie,dispatch);
      setNewMovie({
        title : "",
        desc : "",
        genre : "",
        year : "",
        limit : "",
        trailer : "",
        video : ""
      })
      navigate("/portal/movies")
  }


  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Title Image</label>
          <input
            type="file"
            id="titleImage"
            name="imgTitle"
            onChange={titleImgChange}
          />
        </div>
        <div className="addProductItem">
          <label>Poster</label>
          <input type="file" id="poster" name="img" onChange={imgChange} />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newMovie.title}
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            name="desc"
            placeholder="Description"
            value={newMovie.desc}
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input
            type="number"
            name="year"
            placeholder="Year"
            value={newMovie.year}
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input
            type="number"
            name="limit"
            placeholder="Limit"
            value={newMovie.limit}
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input
            type="text"
            name="genre"
            placeholder="Genre"
            value={newMovie.genre}
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Is Series ?</label>
          <select name="isSeries" id="series" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input
            type="text"
            placeholder="Trailer URL"
            name="trailer"
            value={newMovie.trailer}
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input
            type="text"
            placeholder="Video URL"
            name="video"
            value={newMovie.video}
            onChange={handleChange}
          />
        </div>
        {uploaded === 2 ? (
          <button className="addProductButton" onClick={handleCreate}>Create</button>
        ) : (
          <button className="addProductButton" onClick={handleUpload}>
            Upload
          </button>
        )}
      </form>
    </div>
  );
};

export default NewMovie;
