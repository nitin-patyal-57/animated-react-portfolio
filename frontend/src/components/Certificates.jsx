import React from "react";
import { motion } from "framer-motion";

// Certificate data
const certificates = [
  {
    title: "Full Stack Web Development",
    issuer: "Online Training",
    image: "/certificates/fullstack.jpg",
  },
  {
    title: "6 Months Training",
    issuer: "WhiteHat Coder",
    image: "/certificates/whitehat.jpg",
  },
  {
    title: "AWS Cloud Operations",
    issuer: "Amazon",
    image: "/certificates/aws.jpg",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Certificates
      </motion.h2>

      <div className="grid">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="card certificate-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="certificate-img"
            />
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
