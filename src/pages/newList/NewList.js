import { useContext, useEffect, useState } from "react";
import "./newList.css";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { ListContext } from "../../context/listContext/ListContext";
import { useNavigate } from "react-router-dom";
import { getMovies } from "../../context/movieContext/apiCalls";
import { createList } from "../../context/listContext/apiCalls";

const NewList = () => {
  const [list, setList] = useState({
    title: "",
    type: "",
    genre: "",
  });
  const navigate = useNavigate();

  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setList((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList((prev) => {
      return { ...prev, [e.target.name]: value };
    });
  };

  const handleCreate = (e) => {
    e.preventDefault();
    createList(list, dispatch);
    setList({
      title: "",
      type: "",
      genre: "",
    });
    navigate("/portal/lists")
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New List</h1>
      <form className="addProductForm">
        <div className="formLeft">
          <div className="addProductItem">
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={list.title}
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Type</label>
            <select name="type" onChange={handleChange}>
              <option>--select type--</option>
              <option value="movie">Movie</option>
              <option value="series">series</option>
            </select>
          </div>
          <div className="addProductItem">
            <label>Genre</label>
            <input
              type="text"
              name="genre"
              placeholder="Genre"
              value={list.genre}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="formRight">
          <div className="addProductItem">
            <label>Movies</label>
            <select
              multiple
              name="content"
              onChange={handleSelect}
              style={{ height: "260px" }}
            >
              <option>--select movies--</option>
              {movies.map((movie) => {
                return (
                  <option key={movie._id} value={movie._id}>
                    {movie.title}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <button className="addProductButton" onClick={handleCreate}>
          Create
        </button>
      </form>
    </div>
  );
};

export default NewList;
