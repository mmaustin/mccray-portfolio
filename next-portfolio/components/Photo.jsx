'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import img from "@/public/photo.jpeg";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <div>
        <div
          className="w-[298px] h-[298px] mix-blend-lighten">
          <Image
            src={img}
            // width={192}
            // height={192}
            alt="my photo"
            className="object-cover rounded-xl border border-accent/60"
          />
        </div>
      </div>
    </div>
  )
}
export default Photo;