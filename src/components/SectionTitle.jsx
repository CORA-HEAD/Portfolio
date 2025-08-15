import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({
  title,
  subtitle,
  center = true,
  className = "",
  delay = 0,
}) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay * 0.1,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: (delay + 1) * 0.1,
        ease: "easeOut",
      },
    },
  };

  const subtitleVariants = {
    hidden: {
      opacity: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: (delay + 2) * 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={`mb-16 ${center ? "text-center" : ""} ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
        variants={titleVariants}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="text-xl text-secondary-400 max-w-3xl mx-auto"
          variants={subtitleVariants}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
