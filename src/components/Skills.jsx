import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinux,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiVite,
  SiPostman,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    level: "Advanced",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    level: "Advanced",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    level: "Intermediate",
  },
  {
    name: "React.js",
    icon: <FaReact />,
    level: "Intermediate",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    level: "Advanced",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    level: "Intermediate",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    level: "Intermediate",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    level: "Intermediate",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    level: "Intermediate",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    level: "Advanced",
  },
  {
    name: "Linux",
    icon: <FaLinux />,
    level: "Intermediate",
  },
  {
    name: "Vite",
    icon: <SiVite />,
    level: "Advanced",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    level: "Intermediate",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-black px-6 py-24 text-white sm:px-10 lg:px-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-white/5 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/40">
            My Expertise
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Skills &
            <span className="ml-3 text-white/40">
              Technologies
            </span>
          </h2>

          <p className="mt-6 text-sm leading-7 text-white/50 sm:text-base">
            Technologies and tools I use to build modern,
            responsive and scalable web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group rounded-2xl border border-white/10 bg-white/3 p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/[0.07]"
            >
              {/* Top */}
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
                  {skill.icon}
                </div>

                <span className="text-xs text-white/30">
                  0{index + 1}
                </span>
              </div>

              {/* Name */}
              <h3 className="mt-6 text-lg font-semibold">
                {skill.name}
              </h3>

              {/* Level */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-white/40">
                  Skill Level
                </span>

                <span className="text-xs font-medium text-white/70">
                  {skill.level}
                </span>
              </div>

              {/* Progress */}
              <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width:
                      skill.level === "Advanced"
                        ? "90%"
                        : "70%",
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.2 + index * 0.05,
                  }}
                  className="h-full rounded-full bg-white"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-white/30">
            Always learning. Always building. Always improving.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

