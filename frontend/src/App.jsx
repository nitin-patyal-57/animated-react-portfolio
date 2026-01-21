import { useState } from "react";
import { motion } from "framer-motion";
import projects from "./data/projects";
import "./styles.css";


export default function App() {
  // ================= CONTACT FORM STATE =================
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://animated-react-portfolio-9.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      if (data.success) {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert(data.error || "Failed to send message");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="app">

      {/* ================= HEADER ================= */}
      <header className="header">
        <div className="header-left">
          <img src="/PHOTO-2026-01-19-22-22-54.jpg" className="header-logo" alt="Nitin Logo" />
          <span className="brand">Nitin Patyal</span>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* ================= HERO ================= */}
      <section id="home" className="hero">
        <div className="hero-left">
          <motion.img
            src="/PHOTO-2026-01-19-22-22-54.jpg"
            className="logo"
            alt="Profile"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9 }}
          />
          <motion.h1 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
            Nitin Patyal
          </motion.h1>
          <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
            Crafting Intelligent Web Experiences That Inspire, Engage, and Transform
          </motion.p>
        </div>
        <div className="hero-right">
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <div className="text-box">
              <p>
                I am Nitin Patyal, a passionate full-stack web developer and AI enthusiast, dedicated to crafting intelligent web experiences that inspire, engage, and transform. I specialize in building modern, scalable, and high-performance applications using the MERN stack, combined with AI-powered solutions that learn and adapt. My focus is on turning creative ideas into responsive, interactive, and animated digital experiences while maintaining clean, efficient, and maintainable code. With expertise in frontend design, backend logic, and database management, I strive to deliver seamless, user-centric, and data-driven applications. Always exploring emerging technologies, I aim to push the boundaries of web development and create impactful solutions that truly resonate with users.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="about-section">
        <motion.h2 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          About Me
        </motion.h2>
        <div className="about-grid">
          <motion.div className="about-left card-box" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h3>Who I Am</h3>
            <p>I am <strong>Nitin Patyal</strong>, a B.Tech AIML student and passionate full-stack web developer. I specialize in building modern, scalable, and intelligent web applications with clean design and strong performance.</p>
            <p>With expertise in <strong>React, Node.js, SQL, and AI/ML</strong>, I enjoy turning complex ideas into simple, interactive, and visually engaging digital experiences.</p>
          </motion.div>
          <motion.div className="about-right" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="about-card"><span>🚀</span><h3>Projects</h3><p>15+ Web & AI Projects</p></div>
            <div className="about-card"><span>💡</span><h3>Problem Solver</h3><p>Strong logic & debugging skills</p></div>
            <div className="about-card"><span>🎯</span><h3>Career Goal</h3><p>Product-based company developer</p></div>
            <div className="about-card"><span>📚</span><h3>Learning</h3><p>Advanced MERN & AI</p></div>
          </motion.div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="section skills-section">
        <motion.h2 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Skills & Expertise</motion.h2>
        <div className="skills-wrapper">
          {/* MERN STACK */}
          <motion.div className="skill-box" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} viewport={{ once: true }}>
            <h3>🚀 MERN Stack Development</h3>
            <p>Building modern, responsive, and scalable web applications using the MERN stack with clean UI, smooth animations, and optimized performance.</p>
            <ul>
              <li>MongoDB</li>
              <li>Express.js</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>REST APIs</li>
            </ul>
          </motion.div>
          {/* AI / ML */}
          <motion.div className="skill-box" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} viewport={{ once: true }}>
            <h3>🤖 AI & Machine Learning</h3>
            <p>Strong foundation in Artificial Intelligence and Machine Learning, focusing on intelligent systems and data-driven solutions.</p>
            <ul>
              <li>Machine Learning Basics</li>
              <li>AI Concepts</li>
              <li>Python for ML</li>
              <li>Data Analysis</li>
              <li>AI-powered Applications</li>
            </ul>
          </motion.div>
          {/* SQL & BACKEND */}
          <motion.div className="skill-box" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} viewport={{ once: true }}>
            <h3>🗄️ SQL & Backend Systems</h3>
            <p>Experience in designing structured databases and backend logic to support real-world applications efficiently.</p>
            <ul>
              <li>SQL (MySQL / PostgreSQL)</li>
              <li>Database Design</li>
              <li>CRUD Operations</li>
              <li>Authentication</li>
              <li>Backend Integration</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="projects">
        <motion.h2 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Projects</motion.h2>
        <div className="grid">
          {projects.map((project, index) => (
            <motion.div key={index} className="card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05 }} viewport={{ once: true }}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech">{project.tech.map((t, i) => <span key={i}>{t}</span>)}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CERTIFICATES ================= */}
      <section id="certificates" className="projects">
        <motion.h2 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Certificates</motion.h2>
        <div className="grid">
          {[
            { title: "Full Stack Web Development", file: "public/certificates/webdevelopmentcourse_page-0001.jpg" },
            { title: "6 Months Internship - WhiteHat Coder", file: "public/certificates/Nitin Patyal Offer Letter_page-0001.jpg" },
            { title: "AWS Cloud Operations", file: "public/certificates/AWS_Academy_Graduate___AWS_Academy_Cloud_Operations_Badge20250212-27-ibdvs_page-0001.jpg" },
          ].map((cert, index) => (
            <motion.a key={index} href={cert.file} target="_blank" rel="noreferrer" className="card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} viewport={{ once: true }}>
              <span style={{ fontSize: "2.5rem" }}>🎯</span>
              <h3>{cert.title}</h3>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="contact">
        <motion.h2 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Contact</motion.h2>
        <div className="contact-wrapper">
          <div className="contact-grid">
            <motion.a href="mailto:nitinpatyal57@gmail.com" className="contact-card" whileHover={{ scale: 1.05 }}>📧 Email</motion.a> <br /><br /><br />
            <motion.a href="https://github.com/nitin-patyal-57" target="_blank" rel="noreferrer" className="contact-card" whileHover={{ scale: 1.05 }}>💻 GitHub</motion.a> <br /><br /><br />
            <motion.a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-card" whileHover={{ scale: 1.05 }}>💼 LinkedIn</motion.a>
          </div>

          <motion.form className="contact-form" onSubmit={handleSubmit} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" required />
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </motion.form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <p>© 2026 Nitin Patyal • Built with React & Framer Motion</p>
      </footer>
    </div>
  );
}
