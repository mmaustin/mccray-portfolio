'use client';

import { SiJavascript, SiRedux, SiTailwindcss, SiPrisma, SiNextdotjs, SiPostman, SiMongodb, SiShadcnui, SiTypescript, SiReactquery, SiRubyonrails } from "react-icons/si";
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaStripe } from "react-icons/fa";
import { TabsList, Tabs, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const skills = {
  title: "My Skills",
  description: "In addition to the skills listed below, I'm currently working to improve my knowledge and abilities in other technologies and concepts including Dynamic Programming, Socket.io, and Swift Programming.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5"
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3"
    },
    {
      icon: <SiJavascript />,
      name: "javaScript"
    },
    {
      icon: <SiTypescript />,
      name: "typeScript"
    },
    {
      icon: <FaNodeJs />,
      name: "node"
    },
    {
      icon: <FaReact />,
      name: "react"
    },
    {
      icon: <SiReactquery />,
      name: "react-Query"
    },
    {
      icon: <SiRedux />,
      name: "redux"
    },
    {
      icon: <SiNextdotjs />,
      name: "next"
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
      name: "tailwindCSS"
    },
    {
      icon: <SiShadcnui />,
      name: "shadcnUI"
    },
    {
      icon: <FaStripe />,
      name: "stripe"
    },
    {
      icon: <SiRubyonrails />,
      name: "ruby"
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
                        <div className="w-full h-[150px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group gap-4">
                          <div className="text-4xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          <p className="capitalize text-accent/40">{skill.name}</p>
                        </div>
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