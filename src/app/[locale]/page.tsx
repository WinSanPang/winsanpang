import { useTranslations } from "next-intl"
import Link from "next/link"

import { ArrowRightIcon } from "@heroicons/react/24/outline"

import "@/src/app/[locale]/ui/global.css"
import { lobster } from "@/src/app/[locale]/ui/fonts"
import Hero from "@/src/app/[locale]/ui/components/hero"
import Carousel from "@/src/app/[locale]/ui/components/carousel"
import CarbonBadge from "@/src/app/[locale]/ui/components/carbon-badge"

export default function Page() {
  const t = useTranslations("home")

  return (
    <>
      <Hero
        title={t("title")}
        subtitle={t.rich("subtitle", {
          cv: (chunks) => (
            <Link
              href="/win-san-pang-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 underline"
            >
              {chunks}
            </Link>
          ),
        })}
      />
      <div className="md:px-28 md:pb-12">
        <h2
          className={`${lobster.className} text-lg text-white text-center md:text-4xl md:leading-normal md:mb-8`}
        >
          <strong>{t("carousel_section.title")}</strong>
        </h2>
        <p className="text-white text-center md:mb-8">
          {t("carousel_section.subtitle")}{" "}
          <ArrowRightIcon className="h-5 w-5 inline-block text-sky-500" />
        </p>
        <Carousel />
      </div>
      <CarbonBadge />
    </>
  )
}
