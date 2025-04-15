import { useTranslations } from "next-intl"
import Link from "next/link"

export default function ColourProfile() {
  const t = useTranslations("home")
  const copyContext = "working_style_section.colour_profile"

  const colourTraits = [
    {
      key: "blue",
      textColour: "text-cool-blue",
    },
    {
      key: "green",
      textColour: "text-earth-green",
    },
    {
      key: "yellow",
      textColour: "text-sunshine-yellow",
    },
    {
      key: "red",
      textColour: "text-fiery-red",
    },
  ]

  const colourProfiles = [
    {
      behaviour: "natural",
      colour:
        "bg-[conic-gradient(#ffd146_5%,#11a832_5%,#11a832_49%,#01aee9_49%)]",
      percentages: [
        {
          percentage: 51,
          position: "top-[50%] left-[20%]",
        },
        {
          percentage: 5,
          position: "top-[15%] left-[52%]",
        },
        {
          percentage: 44,
          position: "top-[50%] right-[20%]",
        },
      ],
    },
    {
      behaviour: "adapted",
      colour:
        "bg-[conic-gradient(#ec5439_17%,#ffd146_17%,#ffd146_32%,#11a832_32%,#11a832_62%,#01aee9_62%)]",
      percentages: [
        {
          percentage: 38,
          position: "top-[40%] left-[20%]",
        },
        {
          percentage: 15,
          position: "top-[25%] right-[30%]",
        },
        {
          percentage: 17,
          position: "top-[50%] right-[15%]",
        },
        {
          percentage: 30,
          position: "bottom-[20%] left-[50%]",
        },
      ],
    },
  ]

  return (
    <div className="my-12">
      <p className="font-bold md:text-2xl mb-4">{t(`${copyContext}.title`)}</p>
      <p className="mb-4">
        {t.rich(`${copyContext}.description`, {
          url: (chunks) => (
            <Link
              href="https://www.colour-profiling.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 underline"
            >
              {chunks}
            </Link>
          ),
        })}
      </p>
      <div className="grid md:grid-cols-2 gap-4 md:mx-40 my-8">
        {colourTraits.map(({ key, textColour }) => (
          <div key={key} className="px-8">
            <p className={`font-bold ${textColour}`}>
              {t(`${copyContext}.colours.${key}.title`)}
            </p>
            <p className={`${textColour} mb-4`} key={key}>
              {t(`${copyContext}.colours.${key}.description`)}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center flex-wrap md:flex-nowrap gap-20 mt-4">
        {colourProfiles.map(({ behaviour, colour, percentages }) => (
          <div key={behaviour} className="flex justify-center flex-wrap">
            <p className="font-bold md:text-xl">
              {t(`${copyContext}.${behaviour}.title`)}
            </p>
            <p className="md:text-lg">
              {t(`${copyContext}.${behaviour}.description`)}
            </p>
            <div className="relative text-black md:text-xl font-bold ">
              <div
                className={`w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full ${colour} my-8`}
              />
              {percentages.map(({ percentage, position }) => (
                <p
                  key={percentage}
                  className={`absolute ${position} text-black`}
                >
                  {percentage}%
                </p>
              ))}
            </div>
            <p className="md:text-lg">
              {t(`${copyContext}.${behaviour}.analysis`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
