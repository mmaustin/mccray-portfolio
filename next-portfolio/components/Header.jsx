import Link from "next/link";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex flex-col items-center md:flex-row justify-between">
        <Link href="/">
          <h2 className="text-4xl font-semibold">
            McCray<span className="text-accent">.</span>
          </h2>
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          <Navbar />
        </div>
        <div className="lg:hidden mt-6 md:mt-0">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
export default Header;