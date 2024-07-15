'use client'

const information = [
  {
    header: "Years Coding",
    info: "Six"
  },
  {
    header: "Coding Advocate",
    info: "Tutored 100s of Students"
  },
  {
    header: "Github Commits",
    info: "Over 4500"
  },
  {
    header: "Latest Challenge",
    info: "Typescript"
  }
];

const MiniInfo = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div>
          {information.map((obj, i) => {
            return (
              <div key={i} className="">
                <p>{obj.header}</p>
                <p>{obj.info}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default MiniInfo