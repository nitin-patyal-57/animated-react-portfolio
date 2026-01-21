import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Nitin</h2>
      <div>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </motion.nav>
  );
}

