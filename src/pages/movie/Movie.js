import { Link, useLocation, useNavigate } from "react-router-dom";
import "./movie.css";
import { Publish } from "@mui/icons-material";
import { useContext, useState } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { updateMovie } from "../../context/movieContext/apiCalls";

const Movie = () => {
  const location = useLocation();
  const movie = location.state.movie;
  const navigate = useNavigate();
  const [movieState, setMovieState] = useState({
    _id : movie._id,
    title: movie.title,
    desc: movie.desc,
    img: movie.img,
    genre: movie.genre,
    year: movie.year,
    limit: movie.limit,
    trailer: movie.trailer,
    video: movie.video,
  });

  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieState((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateMovie(movieState,dispatch);
    navigate("/portal/movies")
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/portal/new-movie">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={movie.img} className="productInfoImg" alt="" />
            <span className="productName">{movie.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{movie._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">limit:</span>
              <span className="productInfoValue">{movie.limit}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Year:</span>
              <span className="productInfoValue">{movie.year}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{movie.genre}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Title</label>
            <input
              type="text"
              name="title"
              value={movieState.title}
              placeholder={movieState.title}
              onChange={handleChange}
            />
            <label>Description</label>
            <input
              type="text"
              name="desc"
              value={movieState.desc}
              placeholder={movieState.desc}
              onChange={handleChange}
            />
            <label>Genre</label>
            <input
              type="text"
              name="genre"
              value={movieState.genre}
              placeholder={movieState.genre}
              onChange={handleChange}
            />
            <label>Year</label>
            <input
              type="number"
              name="year"
              value={movieState.year}
              placeholder={movieState.year}
              onChange={handleChange}
            />
            <label>Limit</label>
            <input
              type="number"
              name="limit"
              value={movieState.limit}
              placeholder={movieState.limit}
              onChange={handleChange}
            />
            <label>Trailer</label>
            <input
              type="text"
              name="trailer"
              value={movieState.trailer}
              placeholder={movieState.trailer}
              onChange={handleChange}
            />
            <label>Video</label>
            <input
              type="text"
              name="video"
              value={movieState.video}
              placeholder={movieState.video}
              onChange={handleChange}
            />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={movieState.img} alt="" className="productUploadImg" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Movie;
