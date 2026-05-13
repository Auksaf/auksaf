"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PerfumeBottleProps {
  image: string;
  name: string;
  subtitle: string;
}

export default function PerfumeBottle({
  image,
  name,
  subtitle,
}: PerfumeBottleProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        rotate: 1,
      }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className="relative group flex justify-center items-center"
    >

      {/* Ambient Glow */}
      <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] rounded-full bg-[#c6a972]/10 blur-3xl opacity-70 md:opacity-0 md:group-hover:opacity-100 transition duration-700" />

      {/* Bottle Container */}
      <div className="relative w-[180px] h-[360px] sm:w-[210px] sm:h-[420px] md:w-[240px] md:h-[480px] rounded-[2.5rem] md:rounded-[3rem] border border-white/10 bg-gradient-to-b from-zinc-900 to-black overflow-hidden shadow-[0_0_120px_rgba(198,169,114,0.12)]">

        {/* Reflection */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08),transparent)] z-10 pointer-events-none" />

        {/* Bottle Image */}
        <div className="relative w-full h-full flex items-center justify-center p-6 sm:p-8 md:p-10">

          <Image
            src={image}
            alt={name}
            width={260}
            height={460}
            priority
            sizes="(max-width: 640px) 180px, (max-width: 768px) 210px, 240px"
            className="object-contain transition duration-700 md:group-hover:scale-105"
          />

        </div>

        {/* Label Overlay */}
        <div className="absolute bottom-7 sm:bottom-8 md:bottom-10 left-0 w-full text-center z-20 px-4">

          <p className="uppercase tracking-[0.3em] text-zinc-500 text-[9px] sm:text-[10px] mb-2 sm:mb-3">
            AUKSAF
          </p>

          <h3 className="text-2xl sm:text-3xl tracking-[0.18em]">
            {name}
          </h3>

          <p className="uppercase tracking-[0.22em] text-zinc-500 text-[10px] sm:text-xs mt-2 sm:mt-3">
            {subtitle}
          </p>

        </div>

      </div>

    </motion.div>
  );
}