'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription, SheetClose } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { cn } from "@/lib/utils";


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
    <Sheet className={cn('bg-slate-300')}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent/50" />
      </SheetTrigger>
      <SheetContent className="flex items-center flex-col mt-0 border">
        <SheetTitle >
          <VisuallyHidden.Root>
            Mobile Menu Title
          </VisuallyHidden.Root>
        </SheetTitle>
        <SheetDescription >
          <VisuallyHidden.Root>
            Mobile Menu Description
          </VisuallyHidden.Root>
        </SheetDescription>
        {links.map((link, i) => {
          return (
            <SheetClose key={i} asChild>
              <Link key={i} href={link.path} className={`${link.path === pathName && "text-accent/50 border-b-2 border-accent/50 text-base"} text-xs capitalize hover:text-accent/50`}>{link.name}</Link>
            </SheetClose>
          )
        })}
      </SheetContent>
    </Sheet>
  )
}
export default MobileNav;