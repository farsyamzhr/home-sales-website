"use client";

import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [show, setShow] = useState(false);

  const menuBarClick = () => {
    setShow(!show);
  };

  let menuActive = show ? "right-0" : "-right-full";

  return (
    <div className="bg-green-50 py-4 md:px-6 px-3 flex justify-between items-center shadow transition-all sticky top-0 z-50">
      {/* Logo */}
      <div className="box-logo flex gap-2 items-center cursor-pointer">
        <img src="/assets/logo.svg" alt="" className="w-[40px]" />
        <h1 className="font-bold">GriyaGo</h1>
      </div>

      {/* Menu Bar Icon */}
      <img
        src="/assets/menu-bar.svg"
        alt=""
        className="lg:hidden cursor-pointer border border-green-600 p-3 rounded-md hover:bg-green-100"
        onClick={menuBarClick}
      />

      {/* Navbar Items */}
      <ul
        className={`shadow lg:shadow-none fixed lg:static lg:top-0 top-18 ${menuActive} lg:items-center w-[200px] lg:w-auto h-[calc(100vh-64px)] lg:h-auto bg-green-50 lg:bg-transparent flex flex-col lg:flex-row gap-6 p-6 lg:p-0 transition-all duration-300 z-40`}
      >
        <li>
          <a href="#" className="hover:text-green-700">
            Beranda
          </a>
        </li>
        <li>
          <a href="#aboutUs" className="hover:text-green-700">
            Tentang kami
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-green-700">
            Tipe Unit
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-green-700">
            Fasilitas
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-green-700">
            Kontak
          </a>
        </li>
        <div className="flex flex-col md:flex-row gap-3 text-sm font-medium">
          <Link
            href="/signUp"
            className="w-[100px] text-center bg-transparent border border-green-700 py-2 px-6 rounded-md hover:bg-green-700 hover:text-white cursor-pointer"
          >
            Daftar
          </Link>
          <Link
            href="/SignIn"
            className="w-[100px] text-center bg-green-700 py-2 px-6 rounded-md hover:bg-transparent hover:text-black text-white cursor-pointer"
          >
            Masuk
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
