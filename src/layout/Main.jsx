import React, { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet, ScrollRestoration } from "react-router-dom";
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
      <div className="min-h-[calc(100vh-530px)]">
        <Outlet />
        <ScrollRestoration />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
