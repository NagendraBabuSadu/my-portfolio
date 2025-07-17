"use client";

import React from "react";
import { motion } from "framer-motion";

import {  Typography } from "@mui/material";
import SkillBar from "../components/ResponsiveBar";
import Counter from "../components/Counter";
import MotionComponent from "../components/MotionComponet";

const AboutComponent: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full flex flex-col items-center gap-1 p-2 mt-10 md:gap-6 rounded-xl mb-2"
    >
      <Typography
        component="p"
        textAlign="center"
        variant="h1"
      >
        About Me
      </Typography>
      <MotionComponent variant="body1" fontSize="1.4rem">
        I am an experienced Frontend Developer with over 4 years of professional
        expertise in the field. Throughout my career, I have had the privilege
        of collaborating with prestigious organizations, contributing to their
        success and growth.
      </MotionComponent>
      <MotionComponent variant="body1" fontSize="1.4rem">
        My passion for fullstack development is not only reflected in my
        extensive experience but also in the enthusiasm and dedication I bring
        to each project.
      </MotionComponent>

      <motion.div
        initial={{ opacity: 0, y: 120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full flex flex-col items-center gap-1 p-1 md:gap-6 rounded-xl"
      >
        <SkillBar />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full flex flex-col items-center gap-1 p-1 md:gap-6 rounded-xl"
      >
        <Counter />
      </motion.div>
    </motion.div>
  );
};

export default AboutComponent;
