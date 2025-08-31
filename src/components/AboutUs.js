"use client";

import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

function AboutUs() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, type: "spring" },
    }),
  };

  return (
    <div
      id="aboutUs"
      className="py-7 md:py-20 bg-gradient-to-b from-green-50 to-gray-400"
    >
      <Container>
        {/* Title */}
        <Row className="mb-5 text-center">
          <Col>
            <motion.h2
              className="fw-bold text-success"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Tentang Kami
            </motion.h2>
            <motion.p
              className="text-muted fs-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Kenali lebih dekat siapa kami dan apa yang membuat{" "}
              <span className="fw-bold text-success">GriyaGo</span> berbeda ✨
            </motion.p>
          </Col>
        </Row>

        <Row className="g-4">
          {[
            {
              title: "Siapa Kami",
              text: "GriyaGo adalah platform properti yang berkomitmen membantu siapa saja menemukan rumah idaman.",
            },
            {
              title: "Nilai Kami",
              text: "Kami percaya rumah adalah tempat cerita baru dimulai, dirancang dengan kualitas & kenyamanan.",
            },
            {
              title: "Teknologi & Transparansi",
              text: "Lewat teknologi digital, kamu bisa jelajahi unit, lihat fasilitas, hingga pesan rumah dengan mudah.",
            },
            {
              title: "Visi Kami",
              text: "Kami terus berinovasi menghadirkan hunian modern yang relevan dengan kebutuhan masyarakat.",
            },
          ].map((item, i) => (
            <Col md={6} key={i}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                custom={i}
                viewport={{ once: false }}
              >
                <Card className="h-100 shadow-lg border-0">
                  <Card.Body>
                    <Card.Title className="fw-bold text-success">
                      {item.title}
                    </Card.Title>
                    <Card.Text>{item.text}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;
