'use client';

import { MdWorkOutline } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { TabsList, Tabs, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const about = {
  title: "About Me",
  description: "I'm passionate about everything that I pursue.  Whether I'm brainstorming my way through a book chapter, applying facts to law, or trying to understand dynamic programming, there's no other percentage but one hundred.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "McCray Austin"
    },
    {
      fieldName: "Email",
      fieldValue: "mccrayaustin@ymail.com"
    },
    {
      fieldName: "Location",
      fieldValue: "Brooklyn, NY"
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
  description: "Six years as a coder, Twenty years as an attorney, Nearly two decades as an amateur author. I combine the creative and analytical, the practical and aspirational. ",
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
  description: "I'm the beneficiary of amazing instruction at the secondary, post-secondary, and technical levels. Most important, the learning never stops!",
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
      institution: "Fordham Law",
      field: "Law",
      completion: "May 2004"
    },
    {
      institution: "Seton Hall",
      field: "English",
      completion: "May 2000"
    },
  ]
};




const About = () => {
  return (
    <div
      className="min-h-[80vh] flex items-center justify-center py-12 lg:py-0">
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
                <ScrollArea className="h-[200px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, i) => {
                      return (
                        <li key={i} className="bg-[#232329] h-[185px] lg:h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent/50">{item.duration}</span>
                          <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="">
                            <span></span>
                            {/* <p>{item.company}</p> */}
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[200px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, i) => {
                      return (
                        <li key={i} className="bg-[#232329] h-[185px] lg:h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent/50">{item.completion}</span>
                          <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left">{item.field}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p>{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, i) => {
                    return (
                      <li key={i} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>

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
export default About;