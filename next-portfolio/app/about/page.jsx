'use client';

import { MdWorkOutline } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";


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
    <div className="">lorem</div>
  )
}
export default About;