import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <h2>Contact</h2>
      <a className="btn" href="mailto:nitin@example.com">
        Email Me
      </a>
    </motion.section>
  );
}
