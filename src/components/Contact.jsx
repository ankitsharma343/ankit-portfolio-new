import React from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaArrowRight,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-black text-white px-5 sm:px-8 lg:px-16 py-24 overflow-hidden"
    >
      {/* ================= BACKGROUND ================= */}
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

      <div className="relative max-w-6xl mx-auto">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-gray-400 mb-4">
            Get In Touch
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Let's Work <span className="text-gray-500">Together</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed">
            Have a project, idea or opportunity? Feel free to reach out.
            I'm always open to discussing new projects and opportunities.
          </p>
        </motion.div>

        {/* ================= CONTACT CONTENT ================= */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl p-7 sm:p-10"
          >
            <div className="mb-8">
              <p className="text-gray-500 text-sm uppercase tracking-widest mb-3">
                Contact Me
              </p>

              <h3 className="text-2xl sm:text-3xl font-semibold">
                Let's build something great.
              </h3>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917495095523"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-5 p-5 rounded-2xl border border-white/10 bg-white/2 hover:bg-white hover:text-black transition-all duration-300 mb-4"
            >
              <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-xl">
                <FaWhatsapp />
              </div>

              <div className="flex-1">
                <p className="text-xs text-gray-500 group-hover:text-gray-600 uppercase tracking-wider">
                  WhatsApp
                </p>
                <p className="text-sm sm:text-base mt-1">
                  +91 74950 95523
                </p>
              </div>

              <FaArrowRight className="text-sm opacity-50 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Email */}
            <a
              href="mailto:ankitsharma082233@gmail.com"
              className="group flex items-center gap-5 p-5 rounded-2xl border border-white/10 bg-white/2 hover:bg-white hover:text-black transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-xl">
                <FaEnvelope />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 group-hover:text-gray-600 uppercase tracking-wider">
                  Email
                </p>
                <p className="text-sm sm:text-base mt-1 break-all">
                  ankitsharma082233@gmail.com
                </p>
              </div>

              <FaArrowRight className="text-sm opacity-50 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Social Media */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                Follow Me
              </p>

              <div className="flex flex-wrap gap-3">

                {/* GitHub */}
                <a
                  href="https://github.com/ankitsharma343"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-lg hover:bg-white hover:text-black transition-all duration-300"
                >
                  <FaGithub />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ankit-sharma-1761643a2/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-lg hover:bg-white hover:text-black transition-all duration-300"
                >
                  <FaLinkedinIn />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/ankit_baali_0008/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-lg hover:bg-white hover:text-black transition-all duration-300"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl p-7 sm:p-10"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-11 h-11 rounded-xl bg-white text-black flex items-center justify-center">
                <FaPaperPlane />
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Send a Message
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  I'll get back to you as soon as possible.
                </p>
              </div>
            </div>

            <form
              action="mailto:ankitsharma082233@gmail.com"
              method="POST"
              encType="text/plain"
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="Name"
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 outline-none text-sm placeholder:text-gray-600 focus:border-white/30 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                  Your Email
                </label>

                <input
                  type="email"
                  name="Email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 outline-none text-sm placeholder:text-gray-600 focus:border-white/30 transition-all"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="Subject"
                  placeholder="Project / Job opportunity"
                  className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 outline-none text-sm placeholder:text-gray-600 focus:border-white/30 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                  Message
                </label>

                <textarea
                  name="Message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 outline-none text-sm placeholder:text-gray-600 focus:border-white/30 transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-all duration-300"
              >
                Send Message
                <FaArrowRight />
              </button>
            </form>
          </motion.div>
        </div>

        {/* ================= BOTTOM ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 text-xs tracking-wider">
            © {new Date().getFullYear()} Ankit Baali. All rights reserved.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;

