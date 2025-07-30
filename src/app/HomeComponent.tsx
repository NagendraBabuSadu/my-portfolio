"use client";

import React from "react";
import { motion } from "framer-motion";
import MediaCard from "./components/MediaCard";
import { Button, Typography } from "@mui/material";

const HomeComponent: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full flex flex-col items-center gap-1 p-1 md:gap-6 rounded-xl"
    >
      <div>
        <MediaCard
          image="/My_Photo1.jpg"
          width="250px"
          height="250px"
          borderRadiusInner="50%"
          borderRadiusOuter="50%"
          loading="lazy"

        />
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography
          component="p"
          variant="body1"
          fontSize="4.4rem"
          textAlign="center"
          fontWeight="600"
        >
          I&apos;m Nagendra Babu, fullstack developer based in India.
        </Typography>
      </motion.div>

      <p className="text-3xl text-center">
        <motion.span
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          I&apos;m a fullstack developer from Hyderabad, Telangana, India with 4+
          years of experience in Capgemini.
        </motion.span>
      </p>
      <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
        >
        <Button
          sx={{
            background: "linear-gradient(90deg, #9333ea, #f97316)", // Purple to Orange
        
            color: '#000',
            padding: "12px 24px",
            borderRadius: "50px",
            fontSize: "2rem",
            fontWeight: "600",
            transition: "opacity 0.3s",
            mt: "30px",
            "&:hover": {
              opacity: 0.8,
              color: "white",
              boxShadow: "0px 0px 10px rgb(250, 229, 229)",

            },
          }}
          className="bg-blue-500 text-white px-4 py-2 
          rounded-md hover:bg-blue-700 transition duration-100"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300"
          >
            My Resume
          </a>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default HomeComponent;
