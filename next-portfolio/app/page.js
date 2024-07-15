import Photo from "@/components/Photo";
import SocialMedia from "@/components/SocialMedia";
import { Button } from "@/components/ui/button";
import { Fullscreen } from "lucide-react";
import { FiDownload } from "react-icons/fi";

const HomePage = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
          <div className="text-center lg:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">Hello, I'm <br />
              <span className="text-accent">McCray Austin.</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Think of something interesting to say about myself right here. Just a few more words will do.  Make it pithy!
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="mb-8 lg:mb-0">
                <SocialMedia containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>


          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  )
}
export default HomePage;
