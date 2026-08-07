import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCode,
  FaGraduationCap,
  FaCalendarAlt,
} from "react-icons/fa";

const experiences = [
  {
    role: "MERN Stack Developer Intern",
    company: "Hartron Advance Skill Center",
    duration: "Jan 2026 - Present",
    type: "Internship",
    icon: <FaBriefcase />,
    description:
      "Currently gaining practical experience in full-stack web development, working with modern web technologies and building real-world applications.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Personal Projects",
    duration: "2025 - Present",
    type: "Project Experience",
    icon: <FaCode />,
    description:
      "Built 5+ full-stack and frontend projects to strengthen practical development skills, including e-commerce websites, business websites, portfolios and applications with admin panels.",
    skills: [
      "MERN Stack",
      "REST APIs",
      "Authentication",
      "Admin Panels",
      "Responsive UI",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen bg-black text-white px-5 sm:px-8 lg:px-16 py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-gray-400 mb-4">
            My Journey
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Experience
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed">
            I am a fresher developer focused on building real-world projects
            and gaining practical experience in full-stack web development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px bg-white/10 sm:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.role}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -40 : 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                className={`relative flex items-center ${
                  index % 2 === 0
                    ? "sm:flex-row"
                    : "sm:flex-row-reverse"
                }`}
              >

                {/* Timeline Dot */}
                <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full border border-white/20 bg-black flex items-center justify-center text-white">
                  {experience.icon}
                </div>

                {/* Card */}
                <div
                  className={`w-full sm:w-[46%] ml-14 sm:ml-0 ${
                    index % 2 === 0
                      ? "sm:mr-auto"
                      : "sm:ml-auto"
                  }`}
                >
                  <div className="group rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl p-6 sm:p-7 hover:border-white/30 hover:bg-white/5 transition-all duration-500">

                    {/* Top */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                      <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-wider text-gray-400">
                        {experience.type}
                      </span>

                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <FaCalendarAlt />
                        {experience.duration}
                      </div>
                    </div>

                    {/* Role */}
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 group-hover:text-gray-300 transition-colors">
                      {experience.role}
                    </h3>

                    {/* Company */}
                    <p className="text-gray-400 text-sm font-medium mb-5">
                      {experience.company}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-6">
                      {experience.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fresher Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex justify-center"
        >
          <div className="flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/3 text-sm text-gray-400">
            <FaGraduationCap />
            <span>
              Fresher • 5+ Projects • Currently Learning & Building
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

