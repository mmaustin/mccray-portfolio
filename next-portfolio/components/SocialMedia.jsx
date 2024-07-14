import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/mmaustin" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/mccray-austin" }
]


const SocialMedia = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>{
      socials.map((media, i) => {
        return <a href={media.path} key={i} className={iconStyles} target="_blank" >{media.icon}</a>
      })
    }</div>
  )
}
export default SocialMedia