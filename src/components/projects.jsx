import { motion } from "framer-motion";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`card ${project.featured ? "featured" : ""}`}
            whileHover={{ scale: 1.06 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
