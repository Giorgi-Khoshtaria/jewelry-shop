import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [show, setShow] = useState(false);

  const handleModalShow = () => {
    setShow(!show);
  };

  return (
    <header className="w-full mt-5 flex justify-between items-center">
      <a
        href="/"
        className="font-font_secondary leading-10 text-4xl font-normal text-black"
      >
        <span className="font-font_secondary leading-10 text-4xl font-normal text-Accent">
          S
        </span>
        HOPPE
      </a>
      <section className="flex justify-center items-center gap-12 max-lg:gap-8">
        <nav>
          <ul className="flex justify-center items-center gap-16 max-lg:gap-10 max-md:hidden ">
            <li>
              <a href="" className="text-base font-normal leading-7">
                Shop
              </a>
            </li>
            <li>
              <a href="" className="text-base font-normal leading-7">
                Blog
              </a>
            </li>
            <li>
              <a href="" className="text-base font-normal leading-7">
                Our Story
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center items-center gap-12 max-lg:gap-8">
          <div className="w-[1px] h-[17px] bg-Gray max-md:hidden"></div>
          <div className="max-md:hidden">
            <img src="/assets/search.png" alt="search" className="w-5 h-5" />
          </div>
          <div className="max-md:hidden">
            <img
              src="/assets/shopping-cart.png"
              alt="cart"
              className="w-5 h-5"
            />
          </div>
          <div>
            <img src="/assets/user.png" alt="user" className="w-5 h-5" />
          </div>
          <div
            onClick={handleModalShow}
            className=" hidden max-md:flex max-md:cursor-pointer"
          >
            <img src="/assets/menu-bar.png" alt="menu" className=" w-7 h-7 " />
          </div>
        </div>
      </section>

      {/* Modal with Animation */}
      <AnimatePresence>
        {show && (
          <>
            {/* Overlay with fade-in animation */}
            <motion.div
              className="fixed inset-x-0 top-0 bottom-0 bg-overlay z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleModalShow}
            />

            {/* Sliding Sidebar */}
            <motion.div
              className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col gap-6 z-20"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <button
                onClick={handleModalShow}
                className="self-end text-xl text-gray-700"
              >
                ✖
              </button>
              <div className=" flex justify-center items-center gap-10">
                <div>
                  <img
                    src="/assets/search.png"
                    alt="search"
                    className="w-5 h-5"
                  />
                </div>
                <div>
                  <img
                    src="/assets/shopping-cart.png"
                    alt="cart"
                    className="w-5 h-5"
                  />
                </div>
              </div>

              <nav className="flex flex-col items-center gap-4">
                <a href="/" className="text-lg font-medium text-gray-800">
                  Shop
                </a>
                <a href="/" className="text-lg font-medium text-gray-800">
                  Blog
                </a>
                <a href="/" className="text-lg font-medium text-gray-800">
                  Our Story
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
