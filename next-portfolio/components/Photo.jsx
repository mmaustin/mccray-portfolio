'use client';

import Image from "next/image";
import img from "@/public/photo.jpeg";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <div>
        <div
          className="w-[298px] h-[298px] mix-blend-lighten relative">
          <Image
            src={img}
            fill
            sizes="20vw"
            priority
            alt="my photo"
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  )
}
export default Photo;