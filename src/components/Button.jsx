import React from "react";
import { motion } from "framer-motion";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon: Icon,
  iconPosition = "left",
  loading = false,
  disabled = false,
  ...props
}) => {
  const baseClasses =
    "btn inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary-900";

  const variants = {
    primary: "btn-primary focus:ring-primary-500",
    secondary: "btn-secondary focus:ring-primary-500",
    accent: "btn-accent focus:ring-accent-500",
    ghost:
      "bg-transparent text-secondary-300 hover:text-primary-400 hover:bg-secondary-800/50 focus:ring-primary-500",
    outline:
      "bg-transparent border-2 border-secondary-600 text-secondary-300 hover:border-primary-500 hover:text-primary-400 focus:ring-primary-500",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const buttonContent = (
    <>
      {loading && <div className="loading mr-2"></div>}
      {Icon && iconPosition === "left" && !loading && (
        <Icon className="w-4 h-4 mr-2" />
      )}
      {children}
      {Icon && iconPosition === "right" && !loading && (
        <Icon className="w-4 h-4 ml-2" />
      )}
    </>
  );

  return (
    <motion.button
      className={classes}
      disabled={disabled || loading}
      whileHover={!disabled && !loading ? { scale: 1.05 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.95 } : {}}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;
