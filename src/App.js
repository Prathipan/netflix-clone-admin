import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import MoviesList from "./pages/moviesList/MoviesList";
import Movie from "./pages/movie/Movie";
import NewMovie from "./pages/newMovie/NewMovie";
import Login from "./pages/login/Login";
import Dashboard from "./pages/Dashboard";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import ListsList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/portal/home" /> : <Login />}
        />
        <Route exact path="/" element={<Navigate to="/login" />} />
          <>
            <Route
              path="/portal"
              element={!user ? <Navigate to="/login" /> : <Dashboard />}
            >
              <Route path="home" element={user ? <Home /> : <Navigate to="/login" />} />
              <Route path="users" element={<UserList />} />
              <Route path="user/:userId" element={<User />} />
              <Route path="movies" element={<MoviesList />} />
              <Route path="movie/:movieId" element={<Movie />} />
              <Route path="new-movie" element={<NewMovie />} />
              <Route path="lists" element={<ListsList />} />
              <Route path="list/:listId" element={<List />} />
              <Route path="new-list" element={<NewList />} />
            </Route>
          </>
      </Routes>
    </Router>
  );
}

export default App;
