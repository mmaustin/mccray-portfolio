"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import novelIdeas from "@/public/work-form.png";
import wfBig from "@/public/job-card-2.png";
import randomHistory from "@/public/manifest-8.png";

const projects = [
  {
    num: "01",
    category: "full stack",
    title: "novel ideas",
    description: "Despite its name, here's a notetaking app created for writers of fiction and non-fiction alike.",
    stack: [
      { name: "Next JS," },
      { name: "TailwindCss," },
      { name: "Daisy UI" }
    ],
    image: novelIdeas,
    live: "https://project-fb.vercel.app",
    github: "https://github.com/mmaustin/project-fb",
  },
  {
    num: "02",
    category: "full stack",
    title: "writers forum",
    description: "A space for you and your fellow writers to come together and collaborate. (Apologies for the slow loading time.)",
    stack: [
      { name: "React," },
      { name: "Express JS," },
      { name: "JWT" }
    ],
    image: wfBig,
    live: "https://writers-forum.onrender.com",
    github: "https://github.com/mmaustin/writers-forum",
  },
  {
    num: "03",
    category: "frontend",
    title: "random history",
    description: "History trivia that requires a certain depth of knowledge and dumb luck in equal measure.",
    stack: [
      { name: "React," },
      { name: "React Hooks," },
      { name: "Material UI" }
    ],
    image: randomHistory,
    live: "https://random-history.onrender.com",
    github: "https://github.com/mmaustin/random-history",
  },
];

const Projects = () => {

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = swiper => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  }

  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 lg:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8">
          <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-[30px] h-[50%] text-center">
              <div className="text-6xl leading-none text-white/50">{project?.num}</div>
              <h2 className="text-[42px] font-semibold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project?.title}</h2>
              <p className="text-white/50">{project?.description}</p>
              <ul className="flex flex-col md:flex-row md:justify-around">
                {project?.stack.map((item, i) => {
                  return (
                    <li key={i} className="text-lg text-accent">{item.name}</li>
                  )
                })}
              </ul>
              <div className="border border-white"></div>
              <div className="flex justify-center gap-4">
                <Link href={project?.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project?.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="my-5 w-[250px] h-[200px] sm:w-[350px] sm:h-[250px]">
            <Swiper spaceBetween={10} slidesPerView={1} className="lg:h-[250px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project, i) => {
                return (
                  <SwiperSlide key={i} className="w-full">
                    <Image
                      className="h-[200px] sm:h-[250px] w-[250px] sm:w-[350px]"
                      src={project.image}
                      alt={project.title}
                      priority
                      height={265}
                      width={198}
                    />
                  </SwiperSlide>
                )
              })}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0  bottom-0 z-20 w-full justify-between w-max justify-none" btnStyles="bg-accent hoover:bg-accent-hover text-primary text-[12px] w-[24px] h-[24px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Projects;