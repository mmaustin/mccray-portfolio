'use client';

import { MdWorkOutline } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { TabsList, Tabs, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TabsContent } from "@radix-ui/react-tabs";


const about = {
  title: "About Me",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum voluptas nam expedita dolorum delectus voluptatum, dolores illum, excepturi eligendi dignissimos, hic quisquam quis distinctio mollitia officia dolor earum harum ea.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "McCray Austin"
    },
    {
      fieldName: "Location",
      fieldValue: "Brooklyn, NY"
    },
    {
      fieldName: "Email",
      fieldValue: "mccrayaustin@ymail.com"
    },
    {
      fieldName: "Telephone",
      fieldValue: "973-634-0148"
    },
  ],
};

const experience = {
  icon: <MdWorkOutline />,
  title: "My Experience",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum voluptas nam expedita dolorum delectus voluptatum, dolores illum, excepturi eligendi dignissimos, hic quisquam quis distinctio mollitia officia dolor earum harum ea.",
  items: [
    {
      company: "Concorde Education",
      position: "Summer Scratch Coding Instructor",
      duration: "Summer 2023"
    },
    {
      company: "Concorde Education",
      position: "High School Web Development Instructor",
      duration: "Fall/Spring 2023-24"
    },
  ]
};

const education = {
  icon: <GiGraduateCap />,
  title: "My Education",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum voluptas nam expedita dolorum delectus voluptatum, dolores illum, excepturi eligendi dignissimos, hic quisquam quis distinctio mollitia officia dolor earum harum ea.",
  items: [
    {
      institution: "Flatiron School",
      field: "Software Engineering",
      completion: "Winter 2021"
    },
    {
      institution: "Skillcruch",
      field: "Front End Developer",
      completion: "2019"
    },
    {
      institution: "Udemy",
      field: "Software Engineering Classes",
      completion: "Continuous"
    },
    {
      institution: "Fordham Law School",
      field: "Law",
      completion: "May 2004"
    },
    {
      institution: "Seton Hall University",
      field: "English",
      completion: "May 2000"
    },
  ]
};


const About = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: .75, duration: 0.4, ease: "easeIn" } }} className="min-h-[80vh] flex items-center justify-center py-12 lg:py-0">
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col lg:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6" >
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul>
                    {experience.items.map((item, i) => {
                      return (
                        <li key={i}>
                          <span>{item.duration}</span>
                          <h3>{item.position}</h3>
                          <div className="">
                            <span></span>
                            <p>{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}
export default About;