'use client';

import { motion } from "framer-motion";
import Image from "next/image";


const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div>
        <div className="w-[298px] h-[298px] lg:w-[350px] lg:h-[350px]">
          <Image
            src="/photo.jpeg"
            priority
            fill
            quality={100}
            // width={100}
            // height={100}
            alt="my photo"
            className="object-container"
          />
        </div>
      </motion.div>
    </div>
  )
}
export default Photo;