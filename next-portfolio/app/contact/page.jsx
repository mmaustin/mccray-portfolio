import EmailLink from "@/components/EmailLink";
import PhoneLink from "@/components/PhoneLink";
import Photo from "@/components/Photo";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: <PhoneLink />
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: <EmailLink />
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
              <ul className="flex flex-col gap-5 md:gap-10 my-6 justify-center items center">
                {info.map((item, i) => {
                  return (
                    <li key={i} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent/50 rounded-md flex items-center justify-center">
                        <div className="text-[28px]">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/70">{item.title}</p>
                        <h3 className="text-xl text-accent">{item.description}</h3>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className=" mb-8 lg:mb-0 rounded-xl">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContactPage;