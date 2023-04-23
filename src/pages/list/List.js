import { Link, useLocation, useNavigate } from "react-router-dom";
import "./list.css";
import { useContext, useEffect, useState } from "react";
import { ListContext } from "../../context/listContext/ListContext";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { getMovies } from "../../context/movieContext/apiCalls";

const List = () => {
  const location = useLocation();
  const list = location.state.list;
  const navigate = useNavigate();
  const [updatedList,setUpdateList] = useState({
    title : list.title,
    type : list.type,
    genre : list.genre
  })

  const { dispatch } = useContext(ListContext);
  const {movies,dispatch : dispatchMovie} = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatchMovie);
  },[dispatchMovie]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateList((prev) => {
      return {...prev,[name] : value}
    })
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setUpdateList((prev) => {
      return { ...prev, [e.target.name]: value };
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updatedList(updatedList,dispatch)
    navigate("/portal/lists")
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/portal/new-list">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">{list.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{list._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Genre:</span>
              <span className="productInfoValue">{list.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Type:</span>
              <span className="productInfoValue">{list.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>List Title</label>
            <input
              type="text"
              name="title"
              value={updatedList.title}
              placeholder={updatedList.title}
              onChange={handleChange}
            />
            <label>Type</label>
            <select name="type" onChange={handleChange}>
              <option>--select type--</option>
              <option value="movie">Movie</option>
              <option value="series">series</option>
            </select>
            <label>Genre</label>
            <input
              type="text"
              name="genre"
              value={updatedList.genre}
              placeholder={updatedList.genre}
              onChange={handleChange}
            />
            <label>Movie List</label>
            <select multiple onChange={handleSelect}>
              <option>--select movies--</option>
              {
                movies.map((movie) => {
                  return (
                    <option key={movie._id} value={movie._id}>{movie.title}</option>
                  )
                })
              }
            </select>
          </div>
          <div className="productFormRight">
            <button className="productButton" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default List;
