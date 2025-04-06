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
        <CiMenuFries className="text-[32px] text-accent" />
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
              <Link key={i} href={link.path} className={`${link.path === pathName && "text-accent border-b-2 border-accent text-lg"} m-0 text-base capitalize hover:text-accent transition-all`}>{link.name}</Link>
            </SheetClose>
          )
        })}
        {/* <ScrollArea className="h-32 w-48 rounded-md border border-accent mt-10">
          <nav className="mt-2 flex flex-col justify-center items-center gap-8">
            {links.map((link, i) => {
              return (
                <SheetClose key={i} asChild>
                  <Link key={i} href={link.path} className={`${link.path === pathName && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>{link.name}</Link>
                </SheetClose>
              )
            })}
          </nav>
        </ScrollArea> */}
      </SheetContent>
    </Sheet>
  )
}
export default MobileNav;