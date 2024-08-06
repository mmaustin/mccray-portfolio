import SocialMedia from "@/components/SocialMedia";
import { FaCopyright } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className="py-8 xl:py-12 text-white bg-[#27272c] lg:h-full flex justify-center items-center mt-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-full flex flex-col md:flex-row md:justify-between items-center">
          <div className="">
            <SocialMedia containerStyles="flex gap-6 mb-4 md:mb-0" iconStyles="w-6 h-6 border border-accent rounded-full flex justify-center items-center text-accent/55 text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
          </div>
          <div className="flex flex-row justify-center items-center gap-2 mb-4 md:mb-0">
            <FaCopyright className="rounded-lg" />
            <p className=" text-accent/55">{year}</p>
            <p className=" text-accent/55">McCray Austin</p>
          </div>
          <div className="text-accent/55 flex flex-row justify-center items-center gap-6">
            <p ><a href="mailto:mccrayaustin@ymail.com"><FaEnvelope /></a></p>
            <p><a href="tel:19736340148"><FaPhoneAlt /></a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer