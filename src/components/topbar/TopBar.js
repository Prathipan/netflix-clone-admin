import "./topbar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import { Settings } from "@mui/icons-material";
import { useContext, useState } from "react";
import { logOut } from "../../context/authContext/AuthActions";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";

const TopBar = () => {
  const [show, setShow] = useState(false);
  
  const {isFetching,dispatch} = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogout = () =>{
    logOut(dispatch);
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  }

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <div className="logo">Admin Dashboard</div>
        </div>
        <div>
          <img style={{height : "75px",}} src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netlify-logo" />
        </div>
        <div className="topRight">
          <div className="topbarIcons">
            <NotificationsIcon />
            <span className="notificationBadge">2</span>
          </div>
          <div className="topbarIcons">
            <LanguageIcon />
          </div>
          <div className="topbarIcons">
            <Settings />
          </div>
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
              className="topAvatar"
              alt="TopAvatar"
              onClick={() => setShow((prev) => !prev)}
            />
            {show ? (
              <div className="toggleView">
                <span>Profile</span>
                <hr />
                <span onClick={handleLogout}>Logout</span>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
