import React from "react";

function Header() {
  return (
    <header className=" w-full mt-16 flex justify-between items-center">
      <a
        href="/"
        className="font-font_secondary leading-10 text-4xl font-normal text-black"
      >
        <span className="font-font_secondary leading-10 text-4xl font-normal text-Accent ">
          S
        </span>
        HOPPE
      </a>
      <section className=" flex justify-center items-center gap-12">
        <nav>
          <ul className=" flex justify-center items-center gap-16">
            <li>
              <a href="" className="text-base font-normal leading-7 ">
                Shop
              </a>
            </li>
            <li>
              <a href="" className="text-base font-normal leading-7 ">
                Blog
              </a>
            </li>
            <li>
              <a href="" className="text-base font-normal leading-7 ">
                Our Story
              </a>
            </li>
          </ul>{" "}
        </nav>
        <div className=" flex justify-center items-center gap-12 ">
          <div className="w-[1px] h-[17px] bg-Gray "></div>
          <div>
            <img
              src="../../../public/assets/search.png"
              alt="search"
              className="w-5 h-5"
            />
          </div>
          <div>
            <img
              src="../../../public/assets/shopping-cart.png"
              alt="search"
              className="w-5 h-5"
            />
          </div>
          <div>
            <img
              src="../../../public/assets/user.png"
              alt="search"
              className="w-5 h-5"
            />
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
