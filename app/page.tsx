import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

import "@/app/ui/global.css"
import { lobster } from "@/app/ui/fonts"

export default function Page() {
  return (
    <>
      <div className="flex items-center justify-center p-6 md:px-28 md:py-12">
        <Image
          src="/profile.jpeg"
          width={150}
          height={150}
          className="rounded-full mr-4"
          alt="A photograph of Win San Pang"
        />
        <h1
          className={`${lobster.className} text-xl text-white md:text-6xl md:leading-normal`}
        >
          <strong>Win San Pang</strong>
        </h1>
      </div>
      <p className="text-white text-center">
        Hello and welcome to my personal website👋 Please feel free to navigate
        your way around and find out more about my career as a Software
        Engineer, educational experience, skills, portfolio and personal
        interests. If you'd prefer to just take a look at my CV, click{" "}
        <a
          href="/win-san-pang-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-500 underline"
        >
          here
        </a>{" "}
        to view it in PDF format.
      </p>
    </>
  )
}
