"use client";

import React, { useState } from "react";

import MotionComponent from "../components/MotionComponet";
import { Box, Card, CardContent, Modal, Typography } from "@mui/material";
import { motion } from "framer-motion";

type cardDetailsProps = {
  id: number;
  label: string;
  description: string;
};

const cardDetails: cardDetailsProps[] = [
  {
    id: 1,
    label: "Full-Stack Web Development",
    description:
      "Build end-to-end web applications using the MERN stack — React for dynamic frontends, Node.js/Express for scalable APIs, and MongoDB for flexible, NoSQL data storage.",
  },
  {
    id: 2,
    label: "RESTful API Development",
    description:
      "Develop secure and efficient RESTful APIs using Node.js and Express, with middleware handling, JWT-based auth, and proper error management for reliable client-server communication.",
  },
  {
    id: 3,
    label: "Authentication & Authorization",
    description:
      "Implement secure login and signup flows using JSON Web Tokens (JWT), access/refresh tokens, and role-based access control to protect APIs and route access.",
  },
  {
    id: 4,
    label: "MongoDB Data Modeling",
    description:
      "Design and implement flexible and scalable data schemas using MongoDB and Mongoose, with support for validation, relationships, indexing, and performance tuning.",
  },
  {
    id: 5,
    label: "Responsive Frontend Development",
    description:
      "Build responsive, component-driven UIs using React.js and Tailwind CSS or Material UI, ensuring accessibility, performance, and mobile-first designs.",
  },
  {
    id: 6,
    label: "Real-Time Applications",
    description:
      "Integrate Socket.io for real-time features like chat, notifications, and live updates, enabling interactive and engaging user experiences across clients.",
  },
  {
    id: 7,
    label: "Testing & Code Quality",
    description:
      "Write unit and integration tests using Jest and React Testing Library to ensure stability and prevent regressions, while following best practices in code structure.",
  },
  {
    id: 8,
    label: "Deployment & CI/CD",
    description:
      "Deploy full-stack applications to platforms like Vercel, Render, or Railway with CI/CD pipelines for automated testing, builds, and production rollouts.",
  },
];

const ServicesComponent: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<cardDetailsProps | null>(
    null
  );

  return (
    <div
      style={{
        marginTop: "5rem",
        marginBottom: "2rem",
      }}
    >
      <MotionComponent variant="h1" textAlign="center">
        My Services
      </MotionComponent>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-15 mb-20 mt-20">
        {cardDetails.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.1 }}
            className="group transition-ease-all duration-100"
          >
            <Card
              className="bg-black text-white border border-gray-700 p-1 rounded-xl relative overflow-hidden transition-all duration-300 group-hover:bg-gradient-to-r from-red-500 to-orange-500 cursor-pointer h-[300px]"
              sx={{
                backgroundColor: "black",
                "&:hover": {
                  backgroundColor: "rgba(212, 20, 111, 0.85)",
                },
              }}
            >
              <CardContent
                className="relative z-10 bg-black bg-opacity-100 group-hover:bg-opacity-70"
                onClick={() => setSelectedCard(item)}
              >
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
                <div className="mt-4 text-gray-300 font-semibold flex items-center gap-2 cursor-pointer">
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
