{/* ================= ABOUT ================= */}
<section id="about" className="about-section">
  <motion.h2
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    About Me
  </motion.h2>

  <div className="about-grid">
    {/* LEFT SIDE */}
    <motion.div
      className="about-left"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p>
        I am <strong>Nitin Patyal</strong>, a B.Tech AIML student and passionate
        full-stack web developer. I specialize in building modern, scalable, and
        intelligent web applications that focus on performance, clean design,
        and real-world usability.
      </p>

      <p>
        With strong expertise in <strong>React, Node.js, SQL, and AI/ML</strong>,
        I enjoy transforming ideas into interactive digital experiences that are
        both functional and visually engaging.
      </p>
    </motion.div>

    {/* RIGHT SIDE */}
    <motion.div
      className="about-right"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="about-card">
        <span>🚀</span>
        <h3>Projects</h3>
        <p>15+ Real-world Web & AI Projects</p>
      </div>

      <div className="about-card">
        <span>💡</span>
        <h3>Problem Solver</h3>
        <p>Strong logical thinking & debugging skills</p>
      </div>

      <div className="about-card">
        <span>🎯</span>
        <h3>Career Goal</h3>
        <p>Full-Stack Developer in a product-based company</p>
      </div>

      <div className="about-card">
        <span>📚</span>
        <h3>Learning</h3>
        <p>Advanced MERN, System Design & AI</p>
      </div>
    </motion.div>
  </div>
</section>
