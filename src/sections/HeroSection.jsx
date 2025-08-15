import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, Mail, Github, Linkedin } from "lucide-react";
import Button from "../components/Button";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "Full Stack Developer",
    "Web Developer",
    "React.js Developer",
    "Node.js Developer",
    "Backend Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-primary-400 font-medium"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold"
          >
            Anmol Futela
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-12 flex items-center justify-center"
          >
            <motion.p
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl text-secondary-300 font-medium"
            >
              {texts[currentText]}
            </motion.p>
          </motion.div>

          {/* Experience Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-900/20 border border-primary-500/30"
          >
            <span className="text-primary-400 font-medium">
              Fresher Developer
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-xl text-secondary-400 max-w-3xl mx-auto leading-relaxed"
          >
            Enthusiastic fresher skilled in React.js, JavaScript, NodeJS,
            Express.js, MySQL, and MongoDB. Experienced in API design,
            debugging, and backend development. Passionate about learning and
            contributing to innovative AI-driven solutions while collaborating
            effectively in team environments.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Download Resume */}
            <a
              href="/anmol_futela_resume.pdf"
              download="Anmol_Futela_Resume.pdf"
              className="inline-block"
            >
              <Button variant="primary" size="lg" icon={Download}>
                Download Resume
              </Button>
            </a>

            {/* Contact Button */}
            <Button
              variant="secondary"
              size="lg"
              icon={Mail}
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex justify-center space-x-6 pt-8"
          >
            {[
              {
                icon: Github,
                url: "https://github.com/CORA-HEAD",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                url: "https://linkedin.com/in/anmolfutela",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                url: "https://mail.google.com/mail/?view=cm&fs=1&to=anmolfutela94@gmail.com",
                label: "Email",
              },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-primary-400 transition-colors duration-300 p-3 rounded-full bg-secondary-800/50 hover:bg-secondary-700/50"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          className="text-secondary-400 hover:text-primary-400 transition-colors duration-300"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </motion.div>

      {/* Floating Stats */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute top-20 right-10 hidden lg:block"
      >
        <div className="glass p-6 rounded-2xl space-y-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400">8+</div>
            <div className="text-sm text-secondary-400">Projects Built</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-400">15+</div>
            <div className="text-sm text-secondary-400">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400">100%</div>
            <div className="text-sm text-secondary-400">Passionate</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
