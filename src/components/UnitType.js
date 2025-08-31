"use client";

import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";

function UnitType() {
  return (
    <div className="wrapper flex flex-col py-7 md:py-20 px-5 lg:px-20 items-center bg-gradient-to-b from-gray-400 to-green-50">
      <div className="box-title flex flex-col gap-1 items-center">
        <div className="title font-bold text-green-700 text-lg md:text-3xl">
          Rekomendasi
        </div>
        <div className="subtitle font-bold text-sm/5 text-center">
          Pilihan unit terbaik dari <span className="text-green-700">GriyaGo</span> 
          yang siap jadi rumah impianmu ✨
        </div>
      </div>
      <div className="box-carousel mt-10 w-full max-w-4xl">
        <Carousel>
          <Carousel.Item>
            <Image
              src="/assets/unit-1.svg"
              alt="Unit 35"
              width={900}
              height={700}
            />
            <Carousel.Caption>
              <h3>Tipe Unit 35</h3>
              <p>Ruang lebih lega, desain modern, pas untuk pasangan muda yang baru memulai perjalanan hidup.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image
              src="/assets/unit-2.svg"
              alt="Unit 36"
              width={900}
              height={700}
            />
            <Carousel.Caption>
              <h3>Tipe Unit 36</h3>
              <p>Hunian luas dengan konsep asri, ideal untuk keluarga yang butuh kenyamanan ekstra.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image
              src="/assets/unit-3.svg"
              alt="Unit 37"
              width={900}
              height={700}
            />
            <Carousel.Caption>
              <h3>Tipe Unit 37</h3>
              <p>Cocok untuk keluarga kecil yang mendambakan hunian praktis dan nyaman.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default UnitType;
