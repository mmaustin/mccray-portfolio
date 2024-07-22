import SocialMedia from "@/components/SocialMedia";

const Footer = () => {
  return (
    <footer className="py-8 xl:py-12 text-white bg-[#27272c] lg:h-full flex justify-center items-center mt-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="mb-8 lg:mb-0">
            <SocialMedia containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer