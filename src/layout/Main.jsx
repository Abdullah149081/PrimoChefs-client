import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Toaster />
      <Outlet />
    </div>
  );
};

export default Main;
