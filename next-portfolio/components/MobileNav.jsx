'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { Dialog } from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";


const links = [
  {
    name: "home",
    path: '/'
  },
  {
    name: "about",
    path: '/about'
  },
  {
    name: "projects",
    path: '/projects'
  },
  {
    name: "skills",
    path: '/skills'
  },
  {
    name: "contact",
    path: '/contact'
  },
];

const MobileNav = () => {

  const pathName = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle >
          <VisuallyHidden.Root>
            Mobile Menu Title
          </VisuallyHidden.Root>
        </SheetTitle>
        <SheetDescription>
          <VisuallyHidden.Root>
            Mobile Menu Description
          </VisuallyHidden.Root>
        </SheetDescription>
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h2 className="text-4xl font-semibold">
              McCray<span className="text-accent">.</span>
            </h2>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, i) => {
            return (
              <Link key={i} href={link.path} className={`${link.path === pathName && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>{link.name}</Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
export default MobileNav;