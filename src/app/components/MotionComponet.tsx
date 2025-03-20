import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

interface MotionComponentProps {
  children: React.ReactNode;
  variant?: "body1" | "body2" | "h1" | "h2" | "h3";
  fontSize?: string;
  textAlign?: "center" | "left";
  fontWeight?: string
  
}

const MotionComponent: React.FC<MotionComponentProps> = ({
  children,
  variant,
  fontSize,
  textAlign,
  fontWeight
}) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography component="p" variant={variant} textAlign={textAlign} fontWeight={fontWeight} fontSize={fontSize}>
          {children}
        </Typography>
      </motion.div>
    </div>
  );
};

export default MotionComponent;
