import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-black text-white border-t border-white/10 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-125 h-62.5 bg-white/3 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">

        {/* Main Footer */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              ANKIT<span className="text-gray-500">.</span>
            </h2>

            <p className="mt-4 text-sm text-gray-500 leading-6 max-w-sm">
              MERN Stack Developer and Cyber Security Student focused on
              building modern, responsive and real-world web applications.
            </p>

            <div className="flex items-center gap-3 mt-6">

              <a
                href="https://github.com/ankitsharma343"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/917495095523"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">
              Quick Links
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-y-4 text-sm text-gray-500">

              <a
                href="#home"
                className="hover:text-white transition-colors"
              >
                Home
              </a>

              <a
                href="#about"
                className="hover:text-white transition-colors"
              >
                About
              </a>

              <a
                href="#skills"
                className="hover:text-white transition-colors"
              >
                Skills
              </a>

              <a
                href="#experience"
                className="hover:text-white transition-colors"
              >
                Experience
              </a>

              <a
                href="#projects"
                className="hover:text-white transition-colors"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </a>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">
              Let's Connect
            </h3>

            <p className="mt-5 text-sm text-gray-500 leading-6">
              Have a project or opportunity? Let's connect and build
              something amazing together.
            </p>

            <a
              href="mailto:ankitsharma082233@gmail.com"
              className="inline-block mt-5 text-sm text-gray-300 hover:text-white transition-colors break-all"
            >
              ankitsharma082233@gmail.com
            </a>

            <a
              href="https://wa.me/917495095523"
              target="_blank"
              rel="noreferrer"
              className="block mt-2 text-sm text-gray-500 hover:text-white transition-colors"
            >
              +91 74950 95523
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-xs text-gray-600 text-center sm:text-left">
            © {new Date().getFullYear()} Ankit Sharma. All rights reserved.
          </p>

          <p className="text-xs text-gray-600">
            Designed & Built with React
          </p>

          {/* Back To Top */}
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
            aria-label="Back to top"
          >
            <FaArrowUp className="text-sm" />
          </motion.button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
