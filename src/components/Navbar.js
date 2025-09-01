"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { px } from "motion";

function Navbar() {
  const [show, setShow] = useState(false);

  const menuBarClick = () => {
    setShow(!show);
  };

  let menuActive = show ? "right-0" : "-right-full";

  return (
    <div className="bg-green-50 py-3 md:px-6 px-3 flex justify-between items-center shadow transition-all sticky top-0 z-50">
      <div className="box-logo flex gap-2 items-center cursor-pointer">
        <Image src="/assets/logo.svg" alt="" width={40} height={40}/>
        <h1 className="!text-base !font-bold mb-0">GriyaGo</h1>
      </div>

      <Image
        src="/assets/menu-bar.svg"
        alt=""
        width={50}
        height={50}
        className="lg:hidden cursor-pointer border border-green-600 p-3 rounded-md hover:bg-green-100"
        onClick={menuBarClick}
      />

      <ul
        className={`shadow lg:!shadow-none fixed lg:static lg:top-0 top-19 ${menuActive} lg:items-center w-[200px] lg:w-auto h-[calc(100vh-64px)] lg:h-auto bg-green-50 lg:bg-transparent flex flex-col lg:flex-row gap-6 p-6 lg:p-0 transition-all duration-300 z-40 m-0`}
      >
        <li>
          <a href="#" className="hover:!text-green-700 !text-black !no-underline">
            Beranda
          </a>
        </li>
        <li>
          <a href="#aboutUs" className="hover:!text-green-700 !text-black !no-underline">
            Tentang kami
          </a>
        </li>
        <li>
          <a href="#unitType" className="hover:!text-green-700 !text-black !no-underline">
            Tipe Unit
          </a>
        </li>
        <li>
          <a href="#service" className="hover:!text-green-700 !text-black !no-underline">
            Fasilitas
          </a>
        </li>
        <li>
          <a href="#mailbox" className="hover:!text-green-700 !text-black !no-underline">
            Kontak
          </a>
        </li>
        <div className="flex flex-col lg:flex-row gap-3 text-sm font-medium">
          <Link
            href="/signUp"
            className="w-[100px] text-center bg-transparent border !border-green-700 py-2 px-6 rounded-md hover:!bg-green-700 !text-black hover:!text-white cursor-pointer !no-underline"
          >
            Daftar
          </Link>
          <Link
            href="/signIn"
            className="w-[100px] text-center bg-green-700 py-2 px-6 rounded-md hover:!bg-transparent hover:!text-black !text-white hover:!border hover:!border-green-700 cursor-pointer !no-underline"
          >
            Masuk
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
