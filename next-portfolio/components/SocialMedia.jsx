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
        return <Link href={media.path} key={i} className={iconStyles} target="_blank" >{media.icon}</Link>
      })
    }</div>
  )
}
export default SocialMedia;