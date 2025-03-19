"use client";

import React, { useEffect, useState } from "react";
import MotionComponent from "../components/MotionComponet";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import emailjs from "emailjs-com";
import { useDispatch } from "react-redux";
import { Form, useForm } from "react-hook-form";

const ContactComponent: React.FC = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [sentMail, setSentMail] = useState(false);
  const [open, setOpen] = useState(false);

  const onSubmit = (data: any) => {
    const templateParams = {
      to_name: "Admin",
      from_name: data.name,
      message: data.message,
      reply_to: data.email,
    };

    console.log("Form Data:", data);

    emailjs
      .send(
        "service_w805v94",
        "template_zurmhu4",
        templateParams,
        "Zi3abysgbcMjj6Ysa"
      )
      .then((response) => {
        console.log("Email sent successfully: ", response);
        setSentMail(true);
        setOpen(true);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });

    console.log("Template Params:", templateParams);
    reset();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <MotionComponent variant="h1" textAlign="center">
        Get in touch
      </MotionComponent>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-11 mt-15 left-0 w-full pb-1 ">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left"
          }}
        >
          <Box
            sx={{
              textAlign: "left",
              mb: "3rem",
            }}
            className="font-bold bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent "
          >
            <MotionComponent variant="h2" fontWeight="600">
              Let's talk
            </MotionComponent>
          </Box>
          <Box
            sx={{
              textAlign: "left",
              mb: "4rem",
            }}
          >
            <MotionComponent variant="body1" fontSize="1.3rem">
              I'm currently available to take on new projects, so feel free to
              send me a message about anything that you want me to work on. You
              can contact anytime.
            </MotionComponent>
          </Box>
          <Box
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Email sx={{ fontSize: 60, color: "gray" }} />
              <Typography variant="h4">
                <a href="">nagendrababusadu@gmail.com</a>
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Phone sx={{ fontSize: 60, color: "gray" }} />
              <Typography variant="h4">+91-6305109126</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LocationOn sx={{ fontSize: 60, color: "gray" }} />
              <Typography variant="h4">Hyderabad, Telangana, India</Typography>
            </Box>
          </Box>
        </div>

        {/* this is the form div */}

        <div className="flex justify-center items-center p-2 px-4 ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ paddingBottom: "2rem", width: "100%", margin: "2rem 1rem" }}
          >
            <div className="mb-4">
              <label className="block text-white mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-4 mb-4 rounded-md bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                {...register("name")}
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 mb-4 rounded-md bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                {...register("email")}
              />
            </div>

            <div className="mb-4">
              <label className="block text-white mb-2">
                Write your message here
              </label>
              <textarea
                placeholder="Enter your message"
                className="w-full p-4 mb-2 rounded-md bg-gray-800 text-gray-300 border border-gray-700 h-22 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500  rows={3}"
                {...register("message")}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 mt-1 rounded-md bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold shadow-lg hover:opacity-90 transition-all cursor-pointer"
            >
              Submit now
            </button>

            {sentMail === true ? (
              <div>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    Email has been sent successfully.
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Email Success.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                      OK
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            ) : (
              <div></div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
