import { useTranslations } from "next-intl"

import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

import "@/src/app/[locale]/ui/global.css"
import { lobster } from "@/src/app/[locale]/ui/fonts"
import Carousel from "@/src/app/[locale]/ui/components/carousel"

export default function Page() {
  const t = useTranslations("homepage")

  return (
    <>
      <div className="flex items-center justify-center p-6 md:px-28 md:py-12">
        <Image
          src="/profile.jpeg"
          width={150}
          height={150}
          className="rounded-full mr-4 h-auto w-[150px]"
          alt="A photograph of Win San Pang"
        />
        <h1
          className={`${lobster.className} text-xl text-white md:text-6xl md:leading-normal`}
        >
          <strong>{t("title")}</strong>
        </h1>
      </div>
      <p className="text-white text-center">
        Hello, my name is Win San Pang and welcome to my personal website 👋
        Please feel free to navigate your way around and find out more about my
        career as a Software Engineer, educational experience, skills, portfolio
        and personal interests. If you'd prefer to just take a look at my CV,
        click{" "}
        <Link
          href="/win-san-pang-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-500 underline"
        >
          here
        </Link>{" "}
        to view it in PDF format.
      </p>
      <div className="border-b border-white m-8" />
      <div className="p-6 md:px-28 md:pb-12">
        <h2
          className={`${lobster.className} text-lg text-white text-center md:text-4xl md:leading-normal md:mb-8`}
        >
          <strong>Who am I?</strong>
        </h2>
        <Carousel />
      </div>
    </>
  )
}
