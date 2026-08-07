import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCar,
  FaShoppingBag,
  FaLaptopCode,
  FaUser,
  FaTachometerAlt,
} from "react-icons/fa";

const projects = [
  {
    title: "Car Rental Website",
    description:
      "A modern and responsive car rental website with a clean user interface, car listings and smooth user experience.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    icon: <FaCar />,
    type: "Web Development",
    github: "#",
    live: "#",
  },
  {
    title: "Clothes E-Commerce",
    description:
      "A stylish clothing e-commerce website featuring product collections, categories, responsive design and modern UI.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    icon: <FaShoppingBag />,
    type: "E-Commerce",
    github: "#",
    live: "#",
  },
  {
    title: "Hartron Website",
    description:
      "A professional educational institute website designed to present courses, information and services in a clean layout.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    icon: <FaLaptopCode />,
    type: "Institute Website",
    github: "#",
    live: "#",
  },
  {
    title: "Personal Portfolio",
    description:
      "My personal developer portfolio showcasing my skills, projects, experience and journey as a MERN stack developer.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    icon: <FaUser />,
    type: "Portfolio",
    github: "#",
    live: "#",
  },
  {
    title: "Jahvora",
    description:
      "A full-stack web application with a modern frontend and powerful admin panel for managing website content and data.",
    tech: ["MERN Stack", "Tailwind CSS", "Admin Panel"],
    icon: <FaTachometerAlt />,
    type: "Full Stack",
    github: "#",
    live: "https://jahvora.vercel.app",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-black text-white px-5 sm:px-8 lg:px-16 py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-gray-400 mb-4">
            My Work
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Featured <span className="text-gray-500">Projects</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed">
            A collection of websites and full-stack applications I have
            developed using modern technologies and clean UI principles.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl overflow-hidden hover:border-white/30 transition-all duration-500"
            >
              {/* Project Top */}
              <div className="relative h-52 bg-linear-to-br from-white/8 to-transparent flex items-center justify-center overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute w-40 h-40 rounded-full border border-white/10 group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute w-24 h-24 rounded-full border border-white/10 group-hover:scale-125 transition-transform duration-700" />

                {/* Icon */}
                <div className="relative z-10 w-20 h-20 rounded-2xl border border-white/20 bg-black/70 backdrop-blur-md flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  {project.icon}
                </div>

                {/* Number */}
                <span className="absolute top-5 left-5 text-xs text-gray-500 tracking-widest">
                  0{index + 1}
                </span>

                {/* Type */}
                <span className="absolute top-5 right-5 px-3 py-1 rounded-full border border-white/10 bg-black/50 text-[10px] uppercase tracking-wider text-gray-400">
                  {project.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 leading-6 min-h-18">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-[11px] rounded-full bg-white/5 border border-white/10 text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3 mt-7 pt-5 border-t border-white/10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-black hover:bg-gray-200 transition-all duration-300 text-sm font-medium"
                  >
                    Live Demo
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 text-sm">
            More projects coming soon...
          </p>
        </motion.div>
      </div>
    </section>
  );
}

