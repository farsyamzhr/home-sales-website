"use client";

import { useState } from "react";

function Navbar() {
  const [show, setShow] = useState(false);

  const menuBarClick = () => {
    setShow(!show);
    console.log(show);
  };

  let menuActive = show ? "right-0" : "-right-full";

  return (
    <div className="bg-green-50 py-4 md:px-6 px-3 flex justify-between items-center shadow transition-all">
      <div className="box-logo flex gap-2 items-center cursor-pointer">
        <img src="/assets/logo.svg" alt="" className="w-[40px]" />
        <h1 className="font-bold">GriyaGo</h1>
      </div>
      <img
        src="/assets/menu-bar.svg"
        alt=""
        className="md:hidden"
        onClick={menuBarClick}
      />
      <ul
        className={`shadow md:shadow-none fixed md:items-center md:static ${menuActive} top-18 md:top-0 w-[200px] md:w-auto h-[calc(100vh-64px)] md:h-auto bg-green-50 md:bg-transparent flex flex-col md:flex-row gap-6 p-6 md:p-0 transition-all duration-300 z-40`}
      >
        <li>
          <a href="#" className="hover:text-green-700">
            Beranda
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-green-700">
            Layanan
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-green-700">
            Fitur
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-green-700">
            Kontak
          </a>
        </li>
        <div className="flex flex-col md:flex-row gap-3 text-sm font-medium">
          <button className="w-[100px] bg-transparent border border-green-700 py-2 px-6 rounded-md hover:bg-green-700 hover:text-white">
            Daftar
          </button>
          <button className="w-[100px] bg-green-700 py-2 px-6 rounded-md hover:bg-transparent hover:text-black text-white">
            Masuk
          </button>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
