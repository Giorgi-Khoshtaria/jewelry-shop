import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [show, setShow] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);

  const handleModalShow = () => {
    setShow(!show);
  };
  const handleShowUserModal = () => {
    setShowUserModal(!showUserModal);
  };

  return (
    <header className="w-full relative mt-5 flex justify-between items-center">
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
          <ul className="flex justify-center items-center gap-16 max-lg:gap-10 max-md:hidden">
            <li>
              <a href="" className="text-base font-normal leading-7 text-black">
                Shop
              </a>
            </li>
            <li>
              <a href="" className="text-base font-normal leading-7 text-black">
                Blog
              </a>
            </li>
            <li>
              <a href="" className="text-base font-normal leading-7 text-black">
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
          <div onClick={handleShowUserModal}>
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

      {/* userModal */}
      <AnimatePresence>
        {showUserModal && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-overlay z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleShowUserModal} // Close modal when clicked on overlay
            />

            {/* Modal Content */}
            <motion.div
              className="absolute top-0 right-0 w-50 rounded-2xl bg-white shadow-lg p-3 flex flex-col gap-4 z-20"
              initial={{ y: "-100%" }} // Start from above the screen
              animate={{ y: 0 }} // Move to normal position
              exit={{ y: "-10%" }} // Move upwards when exiting
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <button
                onClick={handleShowUserModal}
                className="self-end text-xl text-gray-700"
              >
                ✖
              </button>
              <div className=" w-full flex flex-col  items-center gap-10">
                <a href="/login" className="text-lg font-medium text-black">
                  Login
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Modal with Animation */}
      <AnimatePresence>
        {show && (
          <div>
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
              <div className="flex justify-center items-center gap-10">
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
                <a href="/" className="text-lg font-medium text-black">
                  Shop
                </a>
                <a href="/" className="text-lg font-medium text-black">
                  Blog
                </a>
                <a href="/" className="text-lg font-medium text-black">
                  Our Story
                </a>
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
