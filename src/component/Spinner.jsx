import React from "react";
import { motion } from "framer-motion";
const Spinner = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <motion.div
      style={{
        width: "20px",
        height: "20px",
        border: "3px solid white",
        borderTop: "3px solid blue",
        borderRadius: "50%",
        margin: "auto",
      }}
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 1,
        ease: "linear",
      }}
    ></motion.div>
  );
};

export default Spinner;
