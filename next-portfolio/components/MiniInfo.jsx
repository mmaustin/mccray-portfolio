'use client'

const information = [
  {
    header: "Years Coding",
    info: "Six"
  },
  {
    header: "Coding Advocate",
    info: "Hundreds Tutored"
  },
  {
    header: "Github Commits",
    info: "Over 4500"
  }
];

const MiniInfo = () => {
  return (
    <section className="border pt-4 pb-12 lg:pt-0 lg:pb-8">
      <div className=" border border-blue-600 container mx-auto">
        {/* flex flex-col justify-center items-center */}
        <div className="border flex flex-col items-center md:flex-row md:justify-around md:items-center gap-6 ">
          {information.map((obj, i) => {
            return (
              <div key={i} className="">
                <p className="text-xl lg:text-xl font-extrabold">{obj.header}:</p>
                <p className={`${obj.info.length ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-accent/50`}>{obj.info}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default MiniInfo;