import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDownload,
} from "react-icons/fa";

import profile from "../assets/profile.PNG";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >

      <div className="absolute inset-0 -z-10">

        <div
          className="absolute inset-0
          bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)]
          bg-size-[70px_70px]"
        />

        <div className="absolute -top-32 -left-24 h-125 w-125 rounded-full bg-black/5 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-112.5 w-112.5 rounded-full bg-neutral-400/10 blur-[140px]" />

        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 pb-20 lg:px-10">

        <div className="grid w-full items-center gap-20 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .2 }}
              className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-black/5 px-5 py-2"
            >
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />

              <span className="text-sm font-medium tracking-wide">
                AVAILABLE FOR WORK
              </span>

            </motion.div>


            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .3 }}
              className="mt-5 text-4xl font-black leading-none sm:text-7xl lg:text-[40px]"
            >
              ANKIT

              <span className=" ml-4 text-neutral-300">
                SHARMA
              </span>

            </motion.h1>

            {/* Role */}

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .5 }}
              className="mt-8 text-xl font-medium text-neutral-700 sm:text-2xl"
            >
              MERN Stack Developer

              <span className="mx-3 text-neutral-300">
                /
              </span>

              Cyber Security Student

            </motion.h2>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .6 }}
              className="mt-8 max-w-xl text-lg leading-9 text-neutral-500"
            >
              I design and build modern web applications with
              React, Node.js, Express and MongoDB.
              My focus is creating fast, responsive and secure
              digital experiences while continuously improving
              my Cyber Security skills.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .7 }}
              className="mt-12 flex flex-wrap gap-5"
            >

              <motion.div className="flex items-center gap-4">
                {/* First Button: View Projects */}
                <motion.a
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="border-2 group flex items-center justify-center gap-3 rounded-full bg-black px-8 py-4 font-semibold text-white duration-300"
                >
                  View Projects
                  <FaArrowRight className="group-hover:translate-x-1 duration-300" />
                </motion.a>

                {/* Second Button: Download CV */}
                <motion.a
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="/resume.pdf"
                  className="border-2 flex items-center justify-center gap-3 rounded-full px-8 py-4 font-semibold hover:bg-white hover:text-black duration-300"
                >
                  <FaDownload />
                  <span>Download CV</span>
                </motion.a>
              </motion.div>

            </motion.div>

            {/* Social Icons */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .8 }}
              className="mt-12 flex gap-5"
            >
              <div className="border-2 rounded-2xl">
                <a
                  href="https://github.com/ankitsharma343"
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-black/10 hover:bg-white hover:text-black duration-300"
                >
                  <FaGithub size={20} />
                </a>
              </div>

              <div className="border-2 rounded-2xl">
                <a
                  href="https://www.linkedin.com/in/ankit-sharma-1761643a2/"
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-black/10 hover:bg-white hover:text-black duration-300"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>

              <div className="border-2 rounded-2xl">
                <a
                  href="#"
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-black/10 hover:bg-white hover:text-black duration-300"
                >
                  <FaInstagram size={20} />
                </a>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-16 grid grid-cols-3 gap-5"
            >
              {[
                {
                  number: "5",
                  title: "Projects",
                },
                {
                  number: "1",
                  title: "Years Learning",
                },
                {
                  number: "100%",
                  title: "Passion",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  className="rounded-3xl border-white bg-black p-6 shadow-sm transition-all duration-300 hover:shadow-2xl border-2"
                >
                  <h3 className="text-4xl font-black">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-neutral-500">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="flex justify-center lg:justify-end"
          >

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
              className="relative"
            >

              <div className="absolute inset-0 rounded-full bg-black/10 blur-[120px]" />

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-4.5 rounded-full border border-dashed border-black/10"
              />

              {/* Image */}

              <div
                className="
                relative
                h-82.5
                w-82.5
                overflow-hidden
                rounded-full
                border
                border-black/10
                bg-neutral-100
                shadow-[0_40px_100px_rgba(0,0,0,.12)]
                sm:h-105
                sm:w-105
                lg:h-140
                lg:w-140
                "
              >
                <img
                  src={profile}
                  alt="Ankit Baali"
                  className="h-full w-full object-cover grayscale transition-all duration-700 hover:scale-110 hover:grayscale-0"
                />
              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>
      
    </section>
  );
};

export default Hero;