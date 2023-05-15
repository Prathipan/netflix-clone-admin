import { useContext, useState } from "react";
import "./login.css";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { AuthContext } from "../../context/authContext/AuthContext";
import { login } from "../../context/authContext/apiCalls";
import { CircularProgress } from "@mui/material";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    setword: "",
  });
  const {isFetching,dispatch} = useContext(AuthContext);
  console.log(isFetching)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setLoginDetails({
        email : "admin@gmail.com",
        password : "123456"
    })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login(loginDetails,dispatch);
    setLoginDetails({
        email : "",
        password : ""
    });
  };

  return (
    <div className="login">
      <h2 className="LoginTitle">Admin Dashboard</h2>
      <div className="login-container">
        <div className="login-form">
          <PersonOutlineOutlinedIcon className="loginIcon" />
          <form>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={loginDetails.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginDetails.password}
              onChange={handleChange}
            />
            {
              isFetching ? <CircularProgress color="success" /> : <></>
            }
            <button className="login-button" onClick={handleSubmit} disabled={isFetching ? true : false}>
              Sign In
            </button>
            <button onClick={handleClick} className="guestButton" >
              Sign In with admin credentials
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
