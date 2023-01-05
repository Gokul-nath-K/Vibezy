import React from "react";
import { Outlet } from "react-router-dom";
import AppTopBar from "../components/AppTopBar";
import Player from "../components/Player";
import SideBar from "../components/sideBar";

export default function MainLayout() {
  return (
    <>
      <div className="app-top-bar">
        <AppTopBar />
      </div>
      <div className="side-nav-bar">
        <SideBar />
      </div>
      <div className="content-container">
        <Outlet />
      </div>
      <div className="music-control-bar">
        <Player />
      </div>
    </>
  );
}
