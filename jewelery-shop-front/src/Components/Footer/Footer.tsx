import React from "react";

function Footer() {
  return (
    <footer className=" w-full flex flex-col items-center p-9 border-t border-Dark_gray">
      <div className=" w-full flex justify-between items-center gap-5 max-md:flex-col-reverse">
        <nav>
          <ul className=" flex justify-between items-center gap-5">
            <li>
              <a href="" className="text-Dark_gray text-base font-normal">
                CONTACT
              </a>
            </li>
            <li>
              <a href="" className="text-Dark_gray text-base font-normal">
                TERMS OF SERVICES
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center items-center gap-5 ">
          <a href="">
            <img
              src="../../../public/assets/facebook.svg"
              alt="Facebook"
              className="w-5"
            />
          </a>
          <a href="">
            <img
              src="../../../public/assets/instagram.svg"
              alt="Instagram"
              className="w-5"
            />
          </a>
          <a href="">
            <img
              src="../../../public/assets/tik-tok.svg"
              alt="Tik-Tok"
              className="w-5"
            />
          </a>
        </div>
      </div>

      <div className="mt-8 max-md:mt-5"> 2022 SHOPPE. ALL RIGHTS RESERVED.</div>
    </footer>
  );
}

export default Footer;
