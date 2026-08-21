import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaWhatsapp,
} from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";
import resume from "../assets/resume.png";
import { useTheme } from "../context/ThemeContext.jsx";

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

  const { isDark, setIsDark } = useTheme();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 px-3 sm:px-6 lg:px-10 pt-5"
    >
      {/* Main Navbar */}
      <div
        className={`
          max-w-7xl mx-auto
          h-20
          px-5 sm:px-7 lg:px-9
          flex items-center justify-between
          rounded-full
          border
          backdrop-blur-2xl
          transition-all duration-300

          ${
            isDark
              ? `
                border-white/10
                bg-linear-to-b
                from-[#29292c]/95
                via-[#19191b]/95
                to-[#111113]/95
                shadow-[0_10px_40px_rgba(0,0,0,0.35)]
              `
              : `
                border-black/10
                bg-white/90
                shadow-[0_10px_40px_rgba(0,0,0,0.10)]
              `
          }
        `}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex items-center cursor-pointer"
        >
          <h1
            className={`
              text-xl md:text-2xl
              font-bold
              tracking-[0.18em]
              transition-colors duration-300
              ${isDark ? "text-white" : "text-black"}
            `}
          >
            ANKIT
      
          </h1>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`
                  relative
                  text-[15px]
                  font-medium
                  tracking-wide
                  transition-all duration-300
                  group

                  ${
                    isDark
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-700 hover:text-black"
                  }
                `}
              >
                {item}

                <span
                  className={`
                    absolute
                    left-1/2
                    -bottom-2
                    h-0.5
                    w-0
                    -translate-x-1/2
                    rounded-full
                    transition-all duration-300
                    group-hover:w-full

                    ${isDark ? "bg-white" : "bg-black"}
                  `}
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
            className={`
              p-3
              rounded-full
              transition-all duration-300
              hover:scale-105

              ${
                isDark
                  ? "text-gray-300 hover:text-white hover:bg-white/10"
                  : "text-gray-700 hover:text-black hover:bg-black/5"
              }
            `}
          >
            <FaGithub size={19} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ankit-sharma-1761643a2/"
            target="_blank"
            rel="noreferrer"
            className={`
              p-3
              rounded-full
              transition-all duration-300
              hover:scale-105

              ${
                isDark
                  ? "text-gray-300 hover:text-white hover:bg-white/10"
                  : "text-gray-700 hover:text-black hover:bg-black/5"
              }
            `}
          >
            <FaLinkedin size={19} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://web.whatsapp.com/7495095523"
            target="_blank"
            rel="noreferrer"
            className={`
              p-3
              rounded-full
              transition-all duration-300
              hover:scale-105

              ${
                isDark
                  ? "text-gray-300 hover:text-white hover:bg-white/10"
                  : "text-gray-700 hover:text-black hover:bg-black/5"
              }
            `}
          >
            <FaWhatsapp size={19} />
          </a>

          {/* Resume */}
          <a
            href={resume}
            download
            className={`
              flex items-center gap-2
              px-5 py-2.5
              ml-1
              rounded-full
              font-semibold
              text-sm
              transition-all duration-300
              hover:scale-105

              ${
                isDark
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-gray-800"
              }
            `}
          >
            <FaDownload size={14} />
            Resume
          </a>

          {/* Theme Switch */}
          <div
            className={`
              ml-2
              flex items-center
              p-1
              rounded-full
              border
              transition-all duration-300

              ${
                isDark
                  ? "border-white/10 bg-white/5"
                  : "border-black/10 bg-black/5"
              }
            `}
          >
            {/* Light Mode */}
            <button
              type="button"
              aria-label="Enable light mode"
              onClick={() => setIsDark(false)}
              className={`
                w-10 h-10
                rounded-full
                flex items-center justify-center
                transition-all duration-300

                ${
                  !isDark
                    ? `
                      bg-white
                      text-black
                      shadow-[0_2px_8px_rgba(0,0,0,0.15)]
                    `
                    : `
                      text-gray-500
                      hover:text-white
                      hover:bg-white/10
                    `
                }
              `}
            >
              <FiSun size={18} />
            </button>

            {/* Dark Mode */}
            <button
              type="button"
              aria-label="Enable dark mode"
              onClick={() => setIsDark(true)}
              className={`
                w-10 h-10
                rounded-full
                flex items-center justify-center
                transition-all duration-300

                ${
                  isDark
                    ? `
                      bg-[#29292c]
                      text-white
                      shadow-inner
                    `
                    : `
                      text-gray-500
                      hover:text-black
                      hover:bg-black/5
                    `
                }
              `}
            >
              <FiMoon size={18} />
            </button>
          </div>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={`
            lg:hidden
            w-12 h-12
            rounded-full
            border
            flex items-center justify-center
            text-3xl
            transition-all duration-300

            ${
              isDark
                ? "border-white/10 bg-white/5 text-white"
                : "border-black/10 bg-black/5 text-black"
            }
          `}
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
        className={`
          overflow-hidden
          lg:hidden
          max-w-7xl mx-auto
          mt-3
          rounded-[30px]
          border
          backdrop-blur-2xl
          transition-colors duration-300

          ${
            isDark
              ? "border-white/10 bg-[#111113]/95"
              : "border-black/10 bg-white/95"
          }
        `}
      >
        <div className="flex flex-col items-center justify-center h-full gap-7">

          {/* Mobile Links */}
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className={`
                text-2xl
                font-medium
                tracking-wide
                transition-all duration-300

                ${
                  isDark
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-black"
                }
              `}
            >
              {item}
            </a>
          ))}

          {/* Mobile Social Buttons */}
          <div className="flex items-center gap-4 mt-5">

            {/* GitHub */}
            <a
              href="https://github.com/ankitsharma343"
              target="_blank"
              rel="noreferrer"
              className={`
                w-12 h-12
                rounded-full
                border
                flex items-center justify-center
                transition-all duration-300

                ${
                  isDark
                    ? `
                      border-white/10
                      bg-white/5
                      text-white
                      hover:bg-white/10
                    `
                    : `
                      border-black/10
                      bg-black/5
                      text-black
                      hover:bg-black/10
                    `
                }
              `}
            >
              <FaGithub size={21} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ankit-sharma-1761643a2/"
              target="_blank"
              rel="noreferrer"
              className={`
                w-12 h-12
                rounded-full
                border
                flex items-center justify-center
                transition-all duration-300

                ${
                  isDark
                    ? `
                      border-white/10
                      bg-white/5
                      text-white
                      hover:bg-white/10
                    `
                    : `
                      border-black/10
                      bg-black/5
                      text-black
                      hover:bg-black/10
                    `
                }
              `}
            >
              <FaLinkedin size={21} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://web.whatsapp.com/7495095523"
              target="_blank"
              rel="noreferrer"
              className={`
                w-12 h-12
                rounded-full
                border
                flex items-center justify-center
                transition-all duration-300

                ${
                  isDark
                    ? `
                      border-white/10
                      bg-white/5
                      text-white
                      hover:bg-white/10
                    `
                    : `
                      border-black/10
                      bg-black/5
                      text-black
                      hover:bg-black/10
                    `
                }
              `}
            >
              <FaWhatsapp size={21} />
            </a>

            {/* Resume */}
            <a
              href={resume}
              download
              className={`
                flex items-center gap-2
                px-5 py-3
                rounded-full
                font-semibold
                transition-all duration-300

                ${
                  isDark
                    ? "bg-white text-black"
                    : "bg-black text-white"
                }
              `}
            >
              <FaDownload size={14} />
              Resume
            </a>
          </div>

          {/* Mobile Theme Switch */}
          <div
            className={`
              flex items-center
              p-1
              mt-2
              rounded-full
              border

              ${
                isDark
                  ? "border-white/10 bg-white/5"
                  : "border-black/10 bg-black/5"
              }
            `}
          >
            {/* Light */}
            <button
              type="button"
              onClick={() => setIsDark(false)}
              aria-label="Enable light mode"
              className={`
                w-10 h-10
                rounded-full
                flex items-center justify-center
                transition-all duration-300

                ${
                  !isDark
                    ? "bg-white text-black shadow-md"
                    : "text-gray-500 hover:text-white"
                }
              `}
            >
              <FiSun size={18} />
            </button>

            {/* Dark */}
            <button
              type="button"
              onClick={() => setIsDark(true)}
              aria-label="Enable dark mode"
              className={`
                w-10 h-10
                rounded-full
                flex items-center justify-center
                transition-all duration-300

                ${
                  isDark
                    ? "bg-[#29292c] text-white shadow-inner"
                    : "text-gray-500 hover:text-black"
                }
              `}
            >
              <FiMoon size={18} />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;