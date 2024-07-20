"use client";

import { useState } from "react";
import { Swiper, SwiperSlide, } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "full stack",
    title: "novel ideas",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic amet ipsum id sapiente aliquam autem inventore",
    stack: [
      { name: "Next JS" },
      { name: "TailwindCss" },
      { name: "Daisy UI" }
    ],
    image: '/novel-ideas.png',
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "full stack",
    title: "writers forum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic amet ipsum id sapiente aliquam autem inventore",
    stack: [
      { name: "React" },
      { name: "Express JS" },
      { name: "JWT" }
    ],
    image: '/writers-forum.png',
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "random history",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic amet ipsum id sapiente aliquam autem inventore",
    stack: [
      { name: "React" },
      { name: "React Hooks" },
      { name: "Material UI" }
    ],
    image: '/novel-ideas.png',
    live: "",
    github: "",
  },
];

const Projects = () => {
  return (
    <div>Projects</div>
  )
}
export default Projects;