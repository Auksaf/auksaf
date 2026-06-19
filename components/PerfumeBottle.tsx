"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  image: string;
  name: string;
}

export default function PerfumeBottle({ image, name }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full bg-[#c6a972]/10 blur-3xl" />

      <Image
        src={image}
        alt={name}
        width={420}
        height={700}
        className="w-[280px] md:w-[340px] lg:w-[380px] h-auto object-contain transition duration-500 hover:scale-105"

      />
    </motion.div>
  );
}