import { lobster } from "@/app/ui/fonts"

type Props = {
  companyName: string
  roles: {
    date: string
    role: string
    responsibilities: {
      heading: string
      description: string
    }[]
  }[]
  summary: string
  backgroundColour: string
  textColour: string
}

export default function TimelineSection({
  companyName,
  summary,
  roles,
  backgroundColour,
  textColour,
}: Props) {
  return (
    <div className="flex">
      <div className="relative">
        <div className="rounded-full bg-white size-8"></div>
        <div className="absolute top-2 inset-1/2 h-[2000px]  bg-white w-[4px]"></div>
      </div>
      <div className={`pl-4 bg-${backgroundColour}`}>
        <h3 className={`${lobster.className} text-white text-2xl md:text-4xl`}>
          {companyName}
        </h3>
        <p className="text-white pb-8">{summary}</p>
        {roles.map(({ date, role, responsibilities }) => (
          <div key={`${date}-${role}`}>
            <h4
              className={`${lobster.className} text-${textColour} text-xl md:text-2xl`}
            >
              {date} - {role}
            </h4>
            <ul className="list-disc text-white pb-20">
              {responsibilities.map((responsibility) => (
                <li key={responsibility.heading} className="pb-4">
                  <strong>{responsibility.heading}</strong>
                  <p>{responsibility.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
