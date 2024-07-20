"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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

  const [project, setProject] = useState(projects[0]);

  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 lg:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[30px">
          <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="">
              <div className="text-6xl leading-none ">{project.num}</div>
              <h2 className="text-[42px] font-semibold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
            </div>
          </div>
          <div className="w-full">slider</div>
        </div>
      </div>
    </div>
  )
}
export default Projects;