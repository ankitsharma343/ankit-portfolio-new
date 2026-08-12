import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import resume from "../assets/resume.png";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaWhatsapp,
} from "react-icons/fa";

const links = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: .5 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-2xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto h-20 px-6 lg:px-10 flex items-center justify-between">

        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl md:text-3xl font-extrabold tracking-widest cursor-pointer"
        >
          <span className="text-white">ANKIT</span>

          <span className="bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {" "}SHARMA
          </span>
        </motion.h1>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex items-center gap-10">

          {links.map((item) => (

            <li key={item}>

              <a
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-300 hover:text-white duration-300 group"
              >
                {item}

                <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-linear-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>

              </a>

            </li>

          ))}

        </ul>

        {/* Right Side */}

        <div className="hidden lg:flex items-center gap-4">
         
          <a
            href="https://github.com/ankitsharma343"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-linear-to-r hover:from-cyan-500 hover:to-purple-600 hover:text-white hover:scale-110 duration-300"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/ankit-sharma-1761643a2/"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-linear-to-r hover:from-cyan-500 hover:to-purple-600 hover:text-white hover:scale-110 duration-300"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="https://web.whatsapp.com/7495095523"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-linear-to-r hover:from-cyan-500 hover:to-purple-600 hover:text-white hover:scale-110 duration-300"
          >
            <FaWhatsapp size={20} />
          </a>

          <a
            href={resume}
            download
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold hover:scale-105 duration-300 shadow-lg shadow-cyan-500/20"
          >
            <FaDownload />
            Resume
          </a>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white text-4xl"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>

      </div>

      {/* Mobile Menu */}

      <motion.div
        initial={false}
        animate={{
          height: open ? "100vh" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: .35 }}
        className="overflow-hidden lg:hidden bg-black/95 backdrop-blur-xl"
      >

        <div className="flex flex-col items-center justify-center h-130 gap-9">

          {links.map((item) => (

            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-3xl font-semibold text-gray-300 hover:text-cyan-400 duration-300"
            >
              {item}
            </a>

          ))}

          <div className="flex gap-6 mt-6">

            <a
              href="https://github.com/ankitsharma343"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-full border border-white/20 hover:bg-cyan-500 duration-300"
            >
              <FaGithub size={24}/>
            </a>

            <a
              href="https://www.linkedin.com/in/ankit-sharma-1761643a2/"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-full border border-white/20 hover:bg-cyan-500 duration-300"
            >
              <FaLinkedin size={24}/>
            </a>

          </div>

        </div>

      </motion.div>

    </motion.nav>
  );
};

export default Navbar;