import Photo from "@/components/Photo";
import SocialMedia from "@/components/SocialMedia";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "973-634-0148"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mccrayaustin@ymail.com"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "5 Virginia Place, Brooklyn NY 11213"
  }
]

const ContactPage = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
          <div className="lg:w-[54%] text-center lg:text-left ">
            <div className="flex-1 flex flex-col items-center lg:justify-end mb-8">
              <ul className="flex flex-col gap-10">
                {info.map((item, i) => {
                  return (
                    <li key={i} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                  )
                })}
              </ul>
              {/* <div className="w-auto">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="mb-8 lg:mb-0 mt-6">
                    <SocialMedia containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className=" mb-8 lg:mb-0 rounded-xl border border-accent">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContactPage;