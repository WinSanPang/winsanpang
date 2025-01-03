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
          className="rounded-full"
          alt="A photograph of Win San Pang"
        />
        <h1
          className={`${lobster.className} text-xl text-white md:text-6xl md:leading-normal`}
        >
          <strong>Win San Pang</strong>
        </h1>
      </div>
      <p className="text-white">
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
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" />
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
        </div>
      </div>
    </>
  )
}
