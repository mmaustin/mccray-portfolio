'use client';

import { motion } from "framer-motion";
import Image from "next/image";


const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: .75, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" }
          }}
          className="w-[298px] h-[298px] mix-blend-lighten">
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
        </motion.div>
      </motion.div>
    </div>
  )
}
export default Photo;