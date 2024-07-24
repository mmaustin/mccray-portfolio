'use client';

import { motion } from "framer-motion";
import Image from "next/image";


const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <div>
        <div
          className="w-[298px] h-[298px] mix-blend-lighten">
          <Image
            src="/photo.jpeg"
            fill
            alt="my photo"
            className="object-container rounded-xl border border-accent/60"
          />
        </div>
      </div>
    </div>
  )
}
export default Photo;