"use client";

import React, { useState } from "react";

import MotionComponent from "../components/MotionComponet";
import { Box, Card, CardContent, Modal, Typography } from "@mui/material";
import {  motion } from "framer-motion";

type cardDetailsProps = {
  id: number;
  label: string;
  description: string;
};

const cardDetails: cardDetailsProps[] = [
  {
    id: 1,
    label: "Web Design",
    description:
      "Web design is the process of creating visually appealing, user-friendly, and responsive websites that provide an engaging experience across all devices. It involves a combination of aesthetics, usability, and functionality, including layout design, typography, color schemes, and interactive elements.",
  },
  {
    id: 2,
    label: "Graphic Design",
    description:
      "Graphic design is the art of visually communicating ideas using typography, colors, and imagery. It includes branding, illustrations, and digital assets to create engaging and professional designs for websites, advertisements, and print media.",
  },
  {
    id: 3,
    label: "Social Media",
    description:
      "Social media marketing involves creating, curating, and sharing engaging content to grow brand awareness, build communities, and drive engagement across platforms like Instagram, Facebook, LinkedIn, and Twitter.",
  },
  {
    id: 4,
    label: "Digital Marketing",
    description:
      "Digital marketing utilizes SEO, social media, email campaigns, and paid ads to reach the right audience, increase brand visibility, and drive conversions through online channels.",
  },
];

const ServicesComponent: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<cardDetailsProps | null>(
    null
  );

  return (
    <div style={{
      marginTop: "5rem", marginBottom: "2rem"
    }}> 
      <MotionComponent variant="h1" textAlign="center">
        My Services
      </MotionComponent>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-15 mb-20 mt-20">
        {cardDetails.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.2 }}
            className="group transition-ease-all duration-100"
          >
            <Card
              className="bg-black text-white border border-gray-700 p-1 rounded-xl relative overflow-hidden transition-all duration-300 group-hover:bg-gradient-to-r from-red-500 to-orange-500 cursor-pointer"
              sx={{
                backgroundColor: "black",
                "&:hover": {
                  backgroundColor: "rgba(212, 20, 212, 0.85)",
                },
              }}
            >
              <CardContent className="relative z-10 bg-black bg-opacity-100 group-hover:bg-opacity-70">
                <Typography variant="h5" className="font-bold text-gray-300">
                  {item.id}
                </Typography>
                <Typography
                  variant="h4"
                  className="font-bold bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent"
                >
                  {item.label}
                </Typography>
                <Typography variant="body2" className="text-gray-400 mt-2">
                  {item.description.slice(0, 30)}...
                </Typography>
                <div
                  className="mt-4 text-gray-300 font-semibold flex items-center gap-2 cursor-pointer"
                  onClick={() => setSelectedCard(item)}
                >
                  Read More <span className="text-lg">→</span>
                </div>
              </CardContent>
            </Card>

            <Modal open={!!selectedCard} onClose={() => setSelectedCard(null)}>
              <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white p-6 rounded-xl w-11/12 md:w-1/2 shadow-lg">
                <Typography variant="h5" className="font-bold mb-6 pb-4 ">
                  {selectedCard?.label}
                </Typography>
                <Typography variant="body1" className="text-gray-300">
                  {selectedCard?.description}
                </Typography>
                <div
                  className="mt-4 text-red-400 font-semibold cursor-pointer"
                  onClick={() => setSelectedCard(null)}
                >
                  Close
                </div>
              </Box>
            </Modal>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesComponent;
