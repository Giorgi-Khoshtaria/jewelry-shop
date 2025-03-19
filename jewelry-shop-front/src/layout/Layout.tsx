import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="w-full  flex flex-col items-center bg-tahiti p-5 min-h-screen">
      <Header />
      <div className="w-full flex-1 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
