import { Button } from "@/components/ui/button";
import { Fullscreen } from "lucide-react";
import { FiDownload } from "react-icons/fi"

const HomePage = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
          <div className="text-center lg:text-left">
            <span>CODER</span>
            <h1 className="h1">Hello, I'm <br />
              <span>McCray Austin.</span>
            </h1>
          </div>


          <div>
            pic
          </div>
        </div>
      </div>
    </section>
  )
}
export default HomePage;
