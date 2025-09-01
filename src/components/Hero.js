"use client";

import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="wrapper flex flex-col lg:flex-row lg:justify-center lg:items-center pt-10 lg:pt-20 px-5 lg:px-10 gap-4 md:gap-8 lg:gap-10 bg-gradient-to-br from-green-600 to-black">
      <motion.div
        className="box-hero flex flex-col gap-4 md:gap-8 text-white"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="title lg:mb-0 text-lg md:text-3xl font-bold">
          Wujudkan Rumah Impianmu di GriyaGo!
        </div>
        <div className="sub-title text-sm md:text-2xl">
          <span className="font-bold">GriyaGo</span> hadir untuk temukan rumah
          terbaik untukmu, untuk di jual ataupun di sewa dengan sumber yang
          terpercaya
        </div>
        <motion.button
          className="flex justify-center items-center px-2 gap-2 bg-white w-[180px] !rounded-md cursor-pointer hover:!bg-gray-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="text-green-700 font-medium text-sm">Temukan Rumah</div>
          <img src="/assets/arrow-right.svg" alt="" />
        </motion.button>
      </motion.div>
      <motion.img
        src="/assets/house-3D.svg"
        alt=""
        className="translate-x-12 top-3 lg:translate-x-14"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      />
    </div>
  );
}

export default Hero;
