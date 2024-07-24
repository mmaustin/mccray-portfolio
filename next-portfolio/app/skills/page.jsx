'use client';

import { SiDaisyui, SiJavascript, SiRedux, SiTailwindcss, SiPrisma, SiNextdotjs, SiPostman, SiMongodb } from "react-icons/si";
import { FaHtml5, FaCss3, FaReact, FaNodeJs } from "react-icons/fa";
import { TabsList, Tabs, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const skills = {
  title: "My Skills",
  description: "In addition to the skills listed below, I'm currently working to improve my knowledge and abilities in Typescript, Websockets/Socket.io, Shadcn/ui, and Dynamic Programming, in addition to other technologies and concepts.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5"
    },
    {
      icon: <FaCss3 />,
      name: "css 3"
    },
    {
      icon: <SiJavascript />,
      name: "javascript"
    },
    {
      icon: <FaNodeJs />,
      name: "node.js"
    },
    {
      icon: <FaReact />,
      name: "react.js"
    },
    {
      icon: <SiRedux />,
      name: "redux.js"
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js"
    },
    {
      icon: <SiMongodb />,
      name: "mongodb"
    },
    {
      icon: <SiPostman />,
      name: "postman"
    },
    {
      icon: <SiPrisma />,
      name: "prisma"
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css"
    },
    {
      icon: <SiDaisyui />,
      name: "daisy.ui"
    },
  ]
};


const SkillsPage = () => {
  return (
    <div
      className="min-h-[80vh] flex items-center justify-center py-12 lg:py-0">
      <div className="container mx-auto">
        <Tabs
          defaultValue="skills"
          className="flex flex-col lg:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6" >
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="skills" className="w-full h-full" >
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, i) => {
                    return (
                      <li key={i}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-4xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
}
export default SkillsPage