import React, { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header/Header";
import { AuthContext } from "../provider/AuthProviders";

const Main = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center h-screen items-center">
        <progress className="progress w-56 " />;
      </div>
    );
  }
  return (
    <div>
      <Header />
      <Toaster />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
