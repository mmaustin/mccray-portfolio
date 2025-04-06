'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

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

const Navbar = () => {

  const pathName = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, i) => {
        return (
          <Link key={i} href={link.path} className={`${link.path === pathName && "text-accent/50 border-b-2 border-accent/50"} capitalize font-medium hover:text-accent/50`}>{link.name}</Link>
        )
      })}
    </nav>
  )
}
export default Navbar;