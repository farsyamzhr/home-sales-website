"use client";

import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-green-700 text-white py-10">
      <Container>
        <Row className="gy-4 gap-3">
          <Col md={4} className="mt-0">
            <div className="flex items-center gap-2">
            <Image src="/assets/logo.svg" alt="" width={40} height={40}/>
            <motion.h3
              className="font-bold text-base text-white mb-0"
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
          <Col md={4} className="mt-0">
            <h5 className="font-bold">Navigasi</h5>
            <ul className="list-unstyled">
              <li><a href="#aboutUs" className="text-white text-decoration-none">Tentang Kami</a></li>
              <li><a href="#services" className="text-white text-decoration-none">Layanan</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">Kontak</a></li>
            </ul>
          </Col>
          <Col md={4} className="mt-0">
            <h5 className="font-bold">Hubungi Kami</h5>
            <p className="m-0">📍 Jl. Perumahan No. 123, Jakarta</p>
            <p className="m-0">📞 +62 812 3456 7890</p>
            <p className="m-0">✉️ support@griyago.com</p>
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
