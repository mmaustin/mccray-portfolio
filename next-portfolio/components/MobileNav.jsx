'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription, SheetClose } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
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
        <nav className="mt-32 flex flex-col justify-center items-center gap-8">
          {links.map((link, i) => {
            return (
              <SheetClose key={i} asChild>
                <Link key={i} href={link.path} className={`${link.path === pathName && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>{link.name}</Link>
              </SheetClose>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
export default MobileNav;