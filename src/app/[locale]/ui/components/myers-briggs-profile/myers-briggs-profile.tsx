import { useTranslations } from "next-intl"
import Link from "next/link"

export default function MyersBriggsProfile() {
  const t = useTranslations("home")
  const copyContext = "working_style_section.myers_briggs"

  const traits = [
    {
      key: "energy",
      colour: "bg-blue-500",
      percentage: 67,
      position: "left-[67%]",
    },
    {
      key: "mind",
      colour: "bg-yellow-500",
      percentage: 75,
      position: "left-[75%]",
    },
    {
      key: "nature",
      colour: "bg-green-500",
      percentage: 58,
      position: "left-[42%]",
    },
    {
      key: "tactics",
      colour: "bg-purple-500",
      percentage: 96,
      position: "left-[4%]",
    },
    {
      key: "identity",
      colour: "bg-red-500",
      percentage: 60,
      position: "left-[40%]",
    },
  ]

  return (
    <div className="mb-12">
      <p className="font-bold md:text-2xl mb-4">{t(`${copyContext}.title`)}</p>
      <p className="mb-12">
        {t.rich(`${copyContext}.description`, {
          url: (chunks) => (
            <Link
              href="https://www.16personalities.com/profiles/istj-a/f/bpqiavouj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 underline"
            >
              {chunks}
            </Link>
          ),
        })}
      </p>
      {traits.map(({ key, colour, percentage, position }) => (
        <div key={key} className="relative mb-4 md:mx-24">
          <p className="font-bold mb-12 md:text-lg">
            {t(`${copyContext}.traits.${key}.title`)}
          </p>
          <div className={`absolute top-[38%] ${position}`}>
            <p className="font-bold">
              {t(`${copyContext}.traits.${key}.percentage`, { percentage })}
            </p>
            <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[25px] border-t-white" />
          </div>
          <div className={`h-[15px] w-full rounded-lg ${colour}`}></div>
          <div className="flex justify-between mt-2">
            <p>{t(`${copyContext}.traits.${key}.trait_start`)}</p>
            <p>{t(`${copyContext}.traits.${key}.trait_end`)}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
