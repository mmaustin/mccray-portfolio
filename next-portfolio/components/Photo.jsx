'use client';

import Image from "next/image";
import img from "@/public/photo.jpeg";

const Photo = () => {
  return (
    <div className="border w-full h-full">
      <div>
        <div
          className="border border-red-700 w-[298px] h-[298px] mix-blend-lighten">
          <Image
            src={img}
            // width={192}
            // height={192}
            alt="my photo"
            className="container rounded-xl border border-accent/60"
          />
        </div>
      </div>
    </div>
  )
}
export default Photo;