import React from "react";
import { motion } from "framer-motion";

const Card = ({
  children,
  className = "",
  hover = true,
  delay = 0,
  onClick,
  ...props
}) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay * 0.1,
        ease: "easeOut",
      },
    },
  };

  const hoverVariants = hover
    ? {
        hover: {
          y: -5,
          scale: 1.02,
          transition: {
            duration: 0.2,
            ease: "easeInOut",
          },
        },
      }
    : {};

  return (
    <motion.div
      className={`card ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover={hover ? "hover" : undefined}
      viewport={{ once: true, margin: "-50px" }}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
