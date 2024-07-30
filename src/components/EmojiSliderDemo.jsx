"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import image1 from "../assets/emoji1.jpg"
import image2 from "../assets/emoji2.jpg"
// import image3 from "../assets/emoji3.jpeg"

export function EmojiSliderDemo({ onParticipateClick }) {
  const images = [image1, image2];
  return (
    <div className="m-10">
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
          <button 
            className="px-4 py-2 backdrop-blur-sm border bg-pink-300/10 border-pink-500/20 text-white mx-auto text-center rounded-full relative mt-4"
            onClick={onParticipateClick}
          >
            <span>Participate Now→</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-pink-500 to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>
    </div>
  );
}