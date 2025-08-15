import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/CORA-HEAD",
      icon: Github,
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/anmolfutela",
      icon: Linkedin,
      color: "hover:text-blue-400",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "anmolfutela94@gmail.com",
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=anmolfutela94@gmail.com",
    },    
    {
      icon: Phone,
      text: "+91 9817219375",
      url: "tel:+919817219375",
    },
    {
      icon: MapPin,
      text: "Yamunanagar, Haryana",
      url: null,
    },
  ];

  return (
    <footer className="relative mt-32 border-t border-secondary-700/30">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/50 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">Anmol Futela</h3>
            <p className="text-secondary-400">
              Full Stack Developer with expertise in React.js, Node.js, and
              modern web technologies. Passionate about building innovative
              solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-secondary-400 transition-colors duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                "About",
                "Skills",
                "Projects",
                "Education",
                "Achievements",
                "Contact",
              ].map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    className="text-secondary-400 hover:text-primary-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                >
                  <contact.icon className="w-4 h-4 text-primary-400" />
                  {contact.url ? (
                    <a
                      href={contact.url}
                      className="text-secondary-400 hover:text-primary-400 transition-colors duration-300"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span className="text-secondary-400">{contact.text}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-secondary-700/30 text-center"
        >
          <p className="text-secondary-400">
            © {currentYear} Anmol Futela. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
