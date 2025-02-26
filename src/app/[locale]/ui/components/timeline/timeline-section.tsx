import { lobster } from "@/src/app/[locale]/ui/fonts"

import Polaroid, { PolaroidProps } from "../polaroid"

type Props = {
  id: string
  companyName: string
  roles: {
    startDate: string
    endDate: string
    role: string
    responsibilities: {
      heading: string
      description: string
    }[]
    polaroids: PolaroidProps[]
  }[]
  summary: string
  colours: {
    background: string
    border: string
    title: string
    text: string
  }
  height: string
  isLast: boolean
}

export default function TimelineSection({
  id,
  companyName,
  summary,
  roles,
  colours,
  height,
  isLast,
}: Props) {
  return (
    <section id={id} className="flex">
      <div className="relative mt-8">
        <div className="rounded-full bg-white size-8"></div>
        {!isLast && (
          <div
            className={`absolute top-0.5 inset-1/2 bg-white w-[4px] ${height}`}
          />
        )}
      </div>
      <div
        className={`${colours.background} m-4 p-4 border-2 rounded-lg ${colours.border}`}
      >
        <h3
          className={`${lobster.className} ${colours.title} text-2xl md:text-4xl`}
        >
          {companyName}
        </h3>
        <p className={`${colours.text} pb-8`}>{summary}</p>
        {roles.map(
          (
            { startDate, endDate, role, responsibilities, polaroids },
            roleIndex
          ) => (
            <div key={`${startDate}-${endDate}-${role}`}>
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="col-span-2">
                  <h4
                    className={`${lobster.className} ${colours.title} text-xl md:text-2xl`}
                  >
                    {role}
                  </h4>
                  <p className={`${colours.text}`}>
                    <strong>
                      {startDate} - {endDate}
                    </strong>
                  </p>
                  <ul className={`list-disc ${colours.text} p-4`}>
                    {responsibilities.map((responsibility) => (
                      <li key={responsibility.heading} className="pb-4">
                        <strong>{responsibility.heading}</strong>
                        <p>{responsibility.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center items-center w-full flex-wrap">
                  {polaroids.map(({ img, alt, caption }) => (
                    <Polaroid key={img} img={img} alt={alt} caption={caption} />
                  ))}
                </div>
              </div>
              {roles.length > 1 && roleIndex < roles.length - 1 && (
                <div className="border-b border-black mb-8 mx-8" />
              )}
            </div>
          )
        )}
      </div>
    </section>
  )
}
