"use client";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";

function Mailbox() {
  const messages = [
    {
      sender: "Admin GriyaGo",
      subject: "Selamat datang di GriyaGo!",
      preview: "Terima kasih telah bergabung, yuk jelajahi rumah idamanmu.",
      time: "10:30 AM",
    },
    {
      sender: "Customer Service",
      subject: "Promo Hunian Baru",
      preview: "Nikmati promo spesial untuk unit terbaru di kawasan strategis.",
      time: "09:15 AM",
    },
    {
      sender: "GriyaGo Team",
      subject: "Update Transaksi",
      preview: "Pesanan rumahmu sedang diproses, silakan cek detail transaksi.",
      time: "Kemarin",
    },
  ];

  return (
    <div className="py-10 px-5 lg:px-20 bg-gradient-to-b from-gray-100 to-green-50">
      <Container>
        <Row className="mb-5 text-center">
          <Col>
            <motion.h2
              className="fw-bold text-success"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Kotak Pesan 📬
            </motion.h2>
            <motion.p
              className="text-muted"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Semua pesan penting terkait akun dan transaksi ada di sini
            </motion.p>
          </Col>
        </Row>

        <Row className="g-4">
          {messages.map((msg, i) => (
            <Col md={6} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <Card className="shadow-sm border-0 h-100">
                  <Card.Body>
                    <Card.Title className="fw-bold text-success">
                      {msg.subject}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Dari: {msg.sender} • {msg.time}
                    </Card.Subtitle>
                    <Card.Text>{msg.preview}</Card.Text>
                    <Button variant="success" size="sm">
                      Baca Selengkapnya
                    </Button>
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

export default Mailbox;
