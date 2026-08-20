import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaDownload, FaWhatsapp } from "react-icons/fa";
import { FiTerminal, FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";
import resume from "../assets/resume.png";

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
  const [dark, setDark] = useState(true);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 px-3 sm:px-6 lg:px-10 pt-5"
    >
      {/* Main Navbar */}
      <div
        className="
          max-w-7xl mx-auto
          h-20
          px-5 sm:px-7 lg:px-9
          flex items-center justify-between
          rounded-full
          border border-white/10
          bg-linear-to-b from-[#29292c]/95 via-[#19191b]/95 to-[#111113]/95
          backdrop-blur-2xl
          shadow-[0_10px_40px_rgba(0,0,0,0.35)]
        "
      >
        {/* Logo */}
        <motion.div
  whileHover={{ scale: 1.03 }}
  className="flex items-center cursor-pointer"
>
  <h1 className="text-xl md:text-2xl font-bold tracking-[0.18em] text-white">
    ANKIT<span className="text-gray-400">.</span>
  </h1>
</motion.div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="
                  relative
                  text-[15px]
                  font-medium
                  tracking-wide
                  text-gray-300
                  hover:text-white
                  transition-all duration-300
                  group
                "
              >
                {item}

                <span
                  className="
                    absolute
                    left-1/2
                    -bottom-2
                    h-0.5
                    w-0
                    -translate-x-1/2
                    rounded-full
                    bg-white
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-3">
          {/* GitHub */}
          <a
            href="https://github.com/ankitsharma343"
            target="_blank"
            rel="noreferrer"
            className="
              p-3
              rounded-full
              text-gray-300
              hover:text-white
              hover:bg-white/10
              transition-all duration-300
              hover:scale-105
            "
          >
            <FaGithub size={19} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ankit-sharma-1761643a2/"
            target="_blank"
            rel="noreferrer"
            className="
              p-3
              rounded-full
              text-gray-300
              hover:text-white
              hover:bg-white/10
              transition-all duration-300
              hover:scale-105
            "
          >
            <FaLinkedin size={19} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://web.whatsapp.com/7495095523"
            target="_blank"
            rel="noreferrer"
            className="
              p-3
              rounded-full
              text-gray-300
              hover:text-white
              hover:bg-white/10
              transition-all duration-300
              hover:scale-105
            "
          >
            <FaWhatsapp size={19} />
          </a>

          {/* Resume */}
          <a
            href={resume}
            download
            className="
              flex items-center gap-2
              px-5 py-2.5
              ml-1
              rounded-full
              bg-white
              text-black
              font-semibold
              text-sm
              hover:bg-gray-200
              hover:scale-105
              transition-all duration-300
            "
          >
            <FaDownload size={14} />
            Resume
          </a>

          {/* Theme Switch */}
          <div
            className="
              ml-2
              flex items-center
              p-1
              rounded-full
              border border-white/10
              bg-white/3
            "
          >
            <button
              onClick={() => setDark(false)}
              className={`
                w-10 h-10
                rounded-full
                flex items-center justify-center
                transition-all duration-300
                ${
                  !dark
                    ? "bg-white/10 text-white"
                    : "text-gray-500 hover:text-white"
                }
              `}
            >
              <FiSun size={18} />
            </button>

            <button
              onClick={() => setDark(true)}
              className={`
                w-10 h-10
                rounded-full
                flex items-center justify-center
                transition-all duration-300
                ${
                  dark
                    ? "bg-[#29292c] text-white shadow-inner"
                    : "text-gray-500 hover:text-white"
                }
              `}
            >
              <FiMoon size={18} />
            </button>
          </div>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="
            lg:hidden
            w-12 h-12
            rounded-full
            border border-white/10
            bg-white/5
            text-white
            flex items-center justify-center
            text-3xl
          "
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: open ? "calc(100vh - 110px)" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.35 }}
        className="
          overflow-hidden
          lg:hidden
          max-w-7xl mx-auto
          mt-3
          rounded-[30px]
          border border-white/10
          bg-[#111113]/95
          backdrop-blur-2xl
        "
      >
        <div className="flex flex-col items-center justify-center h-full gap-7">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="
                text-2xl
                font-medium
                tracking-wide
                text-gray-300
                hover:text-white
                transition-all duration-300
              "
            >
              {item}
            </a>
          ))}

          <div className="flex items-center gap-4 mt-5">
            <a
              href="https://github.com/ankitsharma343"
              target="_blank"
              rel="noreferrer"
              className="
                w-12 h-12
                rounded-full
                border border-white/10
                bg-white/5
                flex items-center justify-center
                hover:bg-white/10
                transition
              "
            >
              <FaGithub size={21} />
            </a>

            <a
              href="https://www.linkedin.com/in/ankit-sharma-1761643a2/"
              target="_blank"
              rel="noreferrer"
              className="
                w-12 h-12
                rounded-full
                border border-white/10
                bg-white/5
                flex items-center justify-center
                hover:bg-white/10
                transition
              "
            >
              <FaLinkedin size={21} />
            </a>

            <a
              href="https://web.whatsapp.com/7495095523"
              target="_blank"
              rel="noreferrer"
              className="
                w-12 h-12
                rounded-full
                border border-white/10
                bg-white/5
                flex items-center justify-center
                hover:bg-white/10
                transition
              "
            >
              <FaWhatsapp size={21} />
            </a>

            <a
              href={resume}
              download
              className="
                flex items-center gap-2
                px-5 py-3
                rounded-full
                bg-white
                text-black
                font-semibold
              "
            >
              <FaDownload size={14} />
              Resume
            </a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;