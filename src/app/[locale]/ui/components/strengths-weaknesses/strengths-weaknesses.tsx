import { useTranslations } from "next-intl"

export default function StrengthsWeaknesses() {
  const t = useTranslations("home")
  const copyContext = "working_style_section.strengths_weaknesses"

  const strengths = ["reliable", "problem_solving", "detail"]
  const weaknesses = ["risk", "critical", "networking"]

  return (
    <div className="mb-12">
      <p className="font-bold md:text-2xl mb-4">{t(`${copyContext}.title`)}</p>
      <p className="mb-12">{t.rich(`${copyContext}.description`)}</p>
      <div className="grid grid-cols-1 md:grid-cols-[10fr,1fr,10fr] gap-4">
        <div>
          <p className="font-bold md: text-xl mb-8">
            {t(`${copyContext}.strengths.title`)}
          </p>
          <div className="flex justify-center">
            <ul className="text-left pl-5">
              {strengths.map((strength) => (
                <div key={strength} className="mb-8">
                  <li className="font-bold text-lg before:content-['💪'] before:mr-2 mb-2">
                    {t(`${copyContext}.strengths.list.${strength}.title`)}
                  </li>
                  <p>
                    {t(`${copyContext}.strengths.list.${strength}.description`)}
                  </p>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-white w-[1px] h-full m-auto hidden md:block" />
        <div>
          <p className="font-bold md: text-xl mb-8">
            {t(`${copyContext}.weaknesses.title`)}
          </p>
          <div className="flex justify-center">
            <ul className="text-left pl-5">
              {weaknesses.map((weakness) => (
                <div key={weakness} className="mb-8">
                  <li className="font-bold text-lg before:content-['⚠️'] before:mr-2 mb-2">
                    {t(`${copyContext}.weaknesses.list.${weakness}.title`)}
                  </li>
                  <p>
                    {t(
                      `${copyContext}.weaknesses.list.${weakness}.description`
                    )}
                  </p>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
