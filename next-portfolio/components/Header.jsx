import Link from "next/link";
import { Button } from "./ui/button";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h2 className="text-4xl font-semibold">
            McCray<span className="text-accent">.</span>
          </h2>
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          <Navbar />
          <Link href="/contact">
            <button className="">Connect</button>
          </Link>
        </div>
        <div className="flex lg:hidden">
        </div>
      </div>
    </header>
  )
}
export default Header;