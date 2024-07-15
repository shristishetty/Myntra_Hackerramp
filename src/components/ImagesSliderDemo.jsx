"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";

export function ImagesSliderDemo() {
  const images = [
    "https://images.pexels.com/photos/6567283/pexels-photo-6567283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",,
    "https://images.pexels.com/photos/5269621/pexels-photo-5269621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6765535/pexels-photo-6765535.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  return (
    <div className = "m-10">
    <ImagesSlider className="h-[40rem] rounded-3xl" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
        Wardrobe Essentials <br /> Chic, Bold, Unique.
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-pink-300/10 border-pink-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Get Started→</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-pink-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
    </div>
  );
}