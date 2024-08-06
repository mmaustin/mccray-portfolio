import SocialMedia from "@/components/SocialMedia";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className="py-8 xl:py-12 text-white bg-[#27272c] lg:h-full flex justify-center items-center mt-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center ">
          <div className="mb-8 lg:mb-0">
            <SocialMedia containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent/55 text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
          </div>
          <div className="flex flex-row justify-center items-center gap-2">
            <FaCopyright className="rounded-lg" />
            <p className=" text-accent/55">{year}</p>
            <p className=" text-accent/55">McCray Austin</p>
          </div>
          <div className="text-accent/55">
            <p>Software Developer</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer