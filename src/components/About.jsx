import { motion } from "framer-motion";
import {
  FaCode,
  FaShieldAlt,
  FaLaptopCode,
  FaServer,
} from "react-icons/fa";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "GitHub",
];

const stats = [
  {
    icon: <FaLaptopCode />,
    number: "10+",
    title: "Projects Built",
  },
  {
    icon: <FaCode />,
    number: "500+",
    title: "Hours Coding",
  },
  {
    icon: <FaShieldAlt />,
    number: "Cyber",
    title: "Security Student",
  },
  {
    icon: <FaServer />,
    number: "MERN",
    title: "Full Stack",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[5px] text-white/50">
            ABOUT ME
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Building Modern &
            <span className="text-white/70"> Secure</span>
            <br />
            Web Experiences
          </h2>
        </motion.div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-20 items-center mt-20">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >
            <div className="border border-white/10 rounded-3xl p-8 bg-white/0.02 backdrop-blur">

              <h3 className="text-3xl font-bold mb-6">
                Who am I?
              </h3>

              <p className="text-white/60 leading-8">
                I'm <span className="text-white font-semibold">Ankit Baali</span>,
                a passionate MERN Stack Developer and Cyber Security student
                who enjoys building fast, responsive, and scalable web
                applications.
              </p>

              <p className="text-white/60 leading-8 mt-6">
                I love transforming ideas into real-world applications
                using React, Node.js, Express, and MongoDB while
                continuously learning secure coding practices,
                networking, and ethical hacking.
              </p>

              <p className="text-white/60 leading-8 mt-6">
                My goal is to become a Full Stack Developer capable
                of building secure, high-performance applications
                with exceptional user experiences.
              </p>

            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            <div className="grid grid-cols-2 gap-5">

              {stats.map((item, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-2xl p-7 hover:border-white transition duration-300"
                >
                  <div className="text-3xl mb-5">
                    {item.icon}
                  </div>

                  <h3 className="text-3xl font-bold">
                    {item.number}
                  </h3>

                  <p className="text-white/50 mt-2">
                    {item.title}
                  </p>

                </div>
              ))}

            </div>

            {/* Skills */}

            <div className="mt-10">

              <h3 className="text-2xl font-semibold mb-6">
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-4">

                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-3 rounded-full border border-white/10 text-sm hover:bg-white hover:text-black transition"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;