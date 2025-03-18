import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className=" flex flex-col  bg-tahiti">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
