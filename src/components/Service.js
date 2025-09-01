"use client";

import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from "react-bootstrap";
import { motion } from "framer-motion";

function Service() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, type: "spring" },
    }),
  };

  const services = [
    {
      title: "Keamanan 24 Jam",
      text: "Lingkungan hunian lebih tenang dengan sistem keamanan modern dan petugas satpam yang siaga sepanjang waktu.",
      image: "/assets/security.svg",
    },
    {
      title: "Fasilitas Lengkap",
      text: "Nikmati fasilitas olahraga, taman hijau, dan area bermain anak yang membuat aktivitas keluarga semakin menyenangkan.",
      image: "/assets/playground.svg",
    },
    {
      title: "Akses Mudah",
      text: "Lokasi strategis dengan akses transportasi publik dan jalan utama, memudahkan mobilitas sehari-hari.",
      image: "/assets/access-transportation.svg",
    },
  ];

  return (
    <div id="service" className="wrapper flex flex-col gap-10 py-7 md:py-20 px-5 lg:px-20 bg-gradient-to-b from-green-50 to-gray-400">
      <div className="box-title flex flex-col gap-1 items-center">
        <motion.div
          className="title font-bold text-green-700 !text-lg md:!text-2xl"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Fasilitas
        </motion.div>
        <motion.div
          className="sub-title text-base text-center text-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          GriyaGo hadir memberikan kenyamanan dan kemudahan bagi penghuni
        </motion.div>
      </div>

      {/* Cards */}
      <div className="box-service grid grid-cols-1 md:grid-cols-3 gap-3">
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={i}
            viewport={{ once: false }}
          >
            <Card className="text-white relative shadow-lg border-0 overflow-hidden rounded-2xl">
              <CardImg src={service.image} alt={service.title} />
              <div className="absolute inset-0 bg-black/50"></div>
              <CardImgOverlay className="flex flex-col justify-center relative z-10">
                <CardTitle className="text-xs lg:text-2xl font-bold text-center mb-2">
                  {service.title}
                </CardTitle>
                <CardText className="text-xs lg:text-base text-center">
                  {service.text}
                </CardText>
              </CardImgOverlay>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Service;
