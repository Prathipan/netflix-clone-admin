import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../components/topbar/TopBar";
import SideBar from "../components/sidebar/SideBar";
import { AuthContext } from "../context/authContext/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
        <>
          <TopBar />
          <div className="container">
            <SideBar />
            <Outlet />
          </div>
        </>
  );
};

export default Dashboard;
