import { getTranslations } from "next-intl/server"
import Link from "next/link"
import Image from "next/image"

import { lobster } from "@/app/[locale]/ui/fonts"

import localeToCharCount from "@/app/[locale]/lib/utils"

import Hero from "@/app/[locale]/ui/components/hero"

import { portfolioSections } from "@/app/[locale]/portfolio/data"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const t = await getTranslations({
    locale,
    namespace: "metadata",
  })

  return {
    title: t("portfolio.title"),
    description: t("portfolio.description"),
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const t = await getTranslations({
    locale,
    namespace: "portfolio",
  })

  return (
    <div>
      <Hero
        title={t("title")}
        subtitle={t("subtitle")}
        emoji={{ icon: "📁", animation: "animate-spin" }}
        charCount={localeToCharCount({
          locale,
          charCounts: { en: 7, "zh-HK": 6, hu: 7 },
        })}
      />
      <div className="flex flex-wrap justify-center md:gap-2">
        {portfolioSections.map(({ id, colours }) => (
          <Link
            key={id}
            href={`#${id}`}
            className={`${colours.background} rounded-full p-2 m-2 border-2 ${colours.border} animate-bounce`}
          >
            <strong>
              <span className={colours.title}> {t(`${id}.title`)}</span>
            </strong>
          </Link>
        ))}
      </div>
      {portfolioSections.map(
        ({ id, descriptions, url, images, colours, skills }) => (
          <section
            id={id}
            key={id}
            className={`bg-gradient-to-r ${colours.from} ${colours.to} mt-8 md:m-12 p-4 md:p-12 border-2 rounded-lg text-center`}
          >
            <h3
              className={`${lobster.className} text-white text-2xl md:text-4xl mb-4 md:mb-8`}
            >
              {t(`${id}.title`)}
            </h3>
            {descriptions.map((description) => (
              <p key={description} className="text-white pb-4">
                {t(`${id}.${description}`)}
              </p>
            ))}
            {url && (
              <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <strong>{url}</strong>
              </Link>
            )}
            <div className="md:flex justify-center gap-2 flex-wrap my-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className={`${colours.background} rounded-full p-2 m-2 border-2 ${colours.border}`}
                >
                  <p className={colours.title}>{t(`${id}.skills.${skill}`)}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4 flex-wrap">
              {images.map(({ img, alt }) => (
                <Image key={img} src={img} alt={alt} width={350} height={300} />
              ))}
            </div>
          </section>
        )
      )}
    </div>
  )
}
