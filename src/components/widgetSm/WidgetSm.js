import { Visibility } from "@mui/icons-material";
import "./widgetSm.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../../api";

const WidgetSm = () => {
  const [newUser, setNewUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`${api}/users/find-all?new=true`, {
        headers: {
          token:
            `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`,
        },
      });
      setNewUser(res.data);
    };
    getUser();
  },[]);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Joiners</span>
      <ul className="widgetSmList">
        {newUser.map((user) => {
          return (
            <>
              <li className="widgetSmListItem">
                <img
                  src={user.profilePic}
                  className="widgetSmImg"
                  alt=""
                />
                <div className="widgetSmUser">
                  <span className="widgetSmUserName">{user.userName}</span>
                  <span className="widgetSmUserRole">{user.email}</span>
                </div>
                <button className="widgetSmVisibleBtn">
                  <Visibility /> Diplay
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default WidgetSm;
