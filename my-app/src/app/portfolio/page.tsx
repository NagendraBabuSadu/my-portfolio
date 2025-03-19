"use client";

import React, { useState } from "react";

import MotionComponent from "../components/MotionComponet";
import { Box, Card, CardContent, Modal, Typography } from "@mui/material";
import { hover, motion } from "framer-motion";
import MediaCard from "../components/MediaCard";

type imageslistProps = {
  image: string;
  projectTitle: string;
};
const imageslist: imageslistProps[] = [
  { image: "empPortal.png", projectTitle: "Employee Onboarding" },
  { image: "best deals interiors.png", projectTitle: "Best Deals Interiors" },
  { image: "pumperpal.webp", projectTitle: "Pumperpal" },
];

const PortfolioComponent: React.FC = () => {
  return (
    <div>
      <MotionComponent variant="h1" textAlign="center">My Works</MotionComponent>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-15 m-19  left-0 cursor-pointer" 
     >
        {imageslist.map((item, index) => (
          <motion.div
            whileHover={{ scale: 1.2, border: "4px solid #b353f2"}}
            className="group transition-ease-all duration-100 text-center font-bold "
            style={{
                border: "4px solid gray", 
              
            }}
            
            
          >
            <MediaCard
              image={item.image}
              width="25rem"
              height="16rem"
              borderRadiusInner=""
              
            ></MediaCard>
            <Typography variant="h5">{item.projectTitle}</Typography>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioComponent;
