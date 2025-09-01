"use client";

import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-green-700 text-white py-10">
      <Container>
        <Row className="gy-4 gap-3">
          <Col md={4} className="mt-0 flex flex-col gap-2">
            <div className="flex items-center gap-2">
            <Image src="/assets/logo.svg" alt="" width={40} height={40}/>
            <motion.h3
              className="!font-bold !text-base text-white mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              >
              GriyaGo
            </motion.h3>
            </div>
            <p className="text-sm mb-0">
              Temukan hunian impianmu dengan mudah, cepat, dan transparan.
            </p>
          </Col>
          <Col md={4} className="mt-0 flex flex-col gap-2">
            <h5 className="font-bold !text-lg !mb-0">Navigasi</h5>
            <ul className="list-unstyled flex flex-col gap-2 mb-0 text-sm">
              <li><a href="#aboutUs" className="text-white text-decoration-none hover:!text-black">Tentang Kami</a></li>
              <li><a href="#unitType" className="text-white text-decoration-none hover:!text-black">Tipe Unit</a></li>
              <li><a href="#service" className="text-white text-decoration-none hover:!text-black">Fasilitas</a></li>
              <li><a href="#mailbox" className="text-white text-decoration-none hover:!text-black">Kontak</a></li>
            </ul>
          </Col>
          <Col md={4} className="mt-0 flex flex-col gap-2">
            <h5 className="font-bold !text-base mb-0">Hubungi Kami</h5>
            <p className="m-0 text-sm">📍 Jl. Perumahan No. 123, Jakarta</p>
            <p className="m-0 text-sm">📞 +62 812 3456 7890</p>
            <p className="m-0 text-sm">✉️ support@griyago.com</p>
          </Col>
        </Row>
        <hr className="border-gray-400 my-4" />
        <Row>
          <Col className="text-center">
            <small>© {new Date().getFullYear()} GriyaGo. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
