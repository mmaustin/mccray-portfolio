import MiniInfo from "@/components/MiniInfo";
import Photo from "@/components/Photo";

const HomePage = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
          <div className="text-center lg:text-left order-2 lg:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">Hello, I'm <br />
              <span className="text-accent">McCray Austin.</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I love to code, create, and collaborate with dynamic individuals and institutions.  Let's excel together!
            </p>
          </div>
          <div className="border order-1 lg:order-none mb-8 lg:mb-0 rounded-xl">
            <Photo />
          </div>
        </div>
        <div className="">
          <MiniInfo />
        </div>
      </div>
    </section>
  )
}
export default HomePage;
