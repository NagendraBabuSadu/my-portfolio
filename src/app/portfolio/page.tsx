"use client";

import React from "react";

import MotionComponent from "../components/MotionComponet";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import MediaCard from "../components/MediaCard";

type imageslistProps = {
  image: string;
  projectTitle: string;
  url: string;
};
const imageslist: imageslistProps[] = [
  {
    image: "urlShortner.png",
    projectTitle: "URL Shortner",
    url: "https://url-shortner-woad-two.vercel.app/",
  },
  {
    image: "SaiOpticals.png",
    projectTitle: "Sai Optical Express",
    url: "https://optics2.vercel.app/",
  },
  {
    image: "best deals interiors.png",
    projectTitle: "Best Deals Interiors",
    url: "https://bestdealsinteriors.netlify.app/",
  },
  {
    image: "pumperpal.webp",
    projectTitle: "Pumperpal",
    url: "https://www.pumperpal.io/",
  },
];

const PortfolioComponent: React.FC = () => {
  return (
    <div>
      <MotionComponent variant="h1" textAlign="center">
        My Works
      </MotionComponent>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-19  left-0 cursor-pointer">
        {imageslist.map((item, index) => (
          <motion.div
            whileHover={{ scale: 1.1, border: "4px solid #b353f2" }}
            className="group transition-ease-all duration-100 text-center font-bold "
            style={{
              border: "4px solid gray",
            }}
            key={index}
          >
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <MediaCard
                image={item.image}
                width="25rem"
                height="16rem"
                borderRadiusInner=""
                loading="lazy"
               
              ></MediaCard>
            </a>
            <Typography variant="h5" className="p-4">
              {item.projectTitle}
            </Typography>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioComponent;
