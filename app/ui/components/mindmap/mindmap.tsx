import Image from "next/image"

import { lobster } from "@/app/ui/fonts"

import { creativeSkills, generalSkills, programmingLanguages } from "./data"

export default function Mindmap() {
  return (
    <div className="relative">
      <div className="relative w-full h-[600px] mb-36">
        <Image
          src="/icons/brain.svg"
          alt="An illustration icon of a brain's side profile"
          width={300}
          height={300}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <h3
          className={`${lobster.className} text-center text-4xl text-sky-900 font-bold mt-8 [text-shadow:_-1.0px_1.0px_2.0px_white,1.0px_1.0px_2.0px_white,1.0px_-1.0px_0_white,-1.0px_-1.0px_0_white]`}
        >
          Programming Languages
        </h3>
        {programmingLanguages.map(
          ({ name, mainPosition, pillPosition, linePosition, colour }) => (
            <div key={name} className={`absolute ${mainPosition}`}>
              <div
                className={`${colour} rounded-full px-4 py-2 border border-white ${pillPosition}`}
              >
                <p className="text-white text-xl">{name}</p>
              </div>
              <div className="flex justify-center">
                <div className={`bg-white w-[2px] h-[100px] ${linePosition}`} />
              </div>
            </div>
          )
        )}
      </div>
      <div className="border-b border-white mb-8 mx-28" />
      <div className="relative w-full h-[600px] mb-4">
        <Image
          src="/icons/brain.svg"
          alt="An illustration icon of a brain's side profile"
          width={300}
          height={300}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <h3
          className={`${lobster.className} text-center text-4xl text-indigo-800 font-bold mt-8 [text-shadow:_-1.0px_1.0px_2.0px_white,1.0px_1.0px_2.0px_white,1.0px_-1.0px_0_white,-1.0px_-1.0px_0_white]`}
        >
          General
        </h3>
        {generalSkills.map(
          ({ name, mainPosition, pillPosition, linePosition, colour }) => (
            <div key={name} className={`absolute ${mainPosition}`}>
              <div
                className={`${colour} rounded-full px-4 py-2 border border-white ${pillPosition}`}
              >
                <p className="text-white text-xl">{name}</p>
              </div>
              <div className="flex justify-center">
                <div className={`bg-white w-[2px] h-[100px] ${linePosition}`} />
              </div>
            </div>
          )
        )}
      </div>
      <div className="border-b border-white mb-8 mx-28" />
      <div className="relative w-full h-[600px] mb-4">
        <Image
          src="/icons/brain.svg"
          alt="An illustration icon of a brain's side profile"
          width={300}
          height={300}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <h3
          className={`${lobster.className} text-center text-4xl text-purple-800 font-bold mt-8 [text-shadow:_-1.0px_1.0px_2.0px_white,1.0px_1.0px_2.0px_white,1.0px_-1.0px_0_white,-1.0px_-1.0px_0_white]`}
        >
          Creative
        </h3>
        {creativeSkills.map(
          ({ name, mainPosition, pillPosition, linePosition, colour }) => (
            <div key={name} className={`absolute ${mainPosition}`}>
              <div
                className={`${colour} rounded-full px-4 py-2 border border-white ${pillPosition}`}
              >
                <p className="text-white text-xl">{name}</p>
              </div>
              <div className="flex justify-center">
                <div className={`bg-white w-[2px] h-[100px] ${linePosition}`} />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}
