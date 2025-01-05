import Image from "next/image"

import { lobster } from "@/app/ui/fonts"

export default function Mindmap() {
  const programmingLanguages = [
    {
      name: "React",
      mainPosition: "top-20 left-1/2 transform -translate-x-1/2",
      pillPosition: "-translate-y-2",
      linePosition: "",
      colour: "bg-sky-800",
    },
    {
      name: "Typescript",
      mainPosition: "top-28 left-1/3 -translate-x-1/2",
      pillPosition: "translate-x-8",
      linePosition: "-rotate-45 translate-x-20",
      colour: "bg-sky-900",
    },
    {
      name: "Javascript",
      mainPosition: "top-28 right-1/3",
      pillPosition: "translate-x-8",
      linePosition: "rotate-45",
      colour: "bg-sky-900",
    },
    {
      name: "Apollo GraphQL",
      mainPosition: "top-56 left-1/3 -translate-x-28",
      pillPosition: "translate-y-16 -translate-x-20",
      linePosition: "-rotate-90 translate-x-20",
      colour: "bg-sky-950",
    },
    {
      name: "React Native",
      mainPosition: "top-56 right-1/3 translate-x-4",
      pillPosition: "translate-y-16 translate-x-36",
      linePosition: "rotate-90",
      colour: "bg-sky-950",
    },
    {
      name: "CSS",
      mainPosition: "bottom-28 left-1/3 -translate-x-28",
      pillPosition: "translate-y-36 translate-x-28",
      linePosition: "rotate-45 translate-x-44 -translate-y-4",
      colour: "bg-sky-900",
    },
    {
      name: "Styled components",
      mainPosition: "bottom-40 left-40 -translate-x-36 translate-y-8",
      pillPosition: "translate-y-36 translate-x-16",
      linePosition: "rotate-90 translate-x-60 translate-y-20",
      colour: "bg-blue-950",
    },
    {
      name: "Sass",
      mainPosition: "bottom-0 left-96 -translate-x-40 translate-y-8",
      pillPosition: "translate-y-36 translate-x-16",
      linePosition: "rotate-45 translate-x-28 -translate-y-2",
      colour: "bg-blue-900",
    },
    {
      name: "Scss",
      mainPosition: "bottom-0 left-96 -translate-x-36 translate-y-8",
      pillPosition: "translate-y-44 translate-x-56",
      linePosition: "-rotate-12 translate-x-52 translate-y-4",
      colour: "bg-blue-800",
    },
    {
      name: "SQL",
      mainPosition: "bottom-24 right-1/3 translate-x-2",
      pillPosition: "translate-y-28 translate-x-8",
      linePosition: "-rotate-45 -translate-x-12 -translate-y-8",
      colour: "bg-sky-900",
    },
    {
      name: "Ruby on Rails",
      mainPosition: "bottom-20 left-1/2 transform -translate-x-1/2",
      pillPosition: "translate-y-40",
      linePosition: "",
      colour: "bg-sky-800",
    },
  ]

  const generalSkills = [
    {
      name: "Problem-solving",
      mainPosition: "top-20 left-1/2 transform -translate-x-1/2",
      pillPosition: "-translate-y-2",
      linePosition: "",
      colour: "bg-indigo-800",
    },
    {
      name: "Multi-tasking",
      mainPosition: "top-28 left-1/3 -translate-x-1/2",
      pillPosition: "translate-x-8",
      linePosition: "-rotate-45 translate-x-20",
      colour: "bg-indigo-900",
    },
    {
      name: "Communication",
      mainPosition: "top-28 right-1/3",
      pillPosition: "translate-x-24",
      linePosition: "rotate-45 translate-x-8",
      colour: "bg-indigo-900",
    },
    {
      name: "Teamwork",
      mainPosition: "top-56 left-1/3 -translate-x-24",
      pillPosition: "translate-y-16 -translate-x-16",
      linePosition: "-rotate-90 translate-x-20",
      colour: "bg-indigo-950",
    },
    {
      name: "Attention to detail",
      mainPosition: "top-56 right-1/3 translate-x-12",
      pillPosition: "translate-y-16 translate-x-40",
      linePosition: "rotate-90",
      colour: "bg-indigo-950",
    },
    {
      name: "Leadership",
      mainPosition: "bottom-28 left-1/3 -translate-x-40",
      pillPosition: "translate-y-36 translate-x-28",
      linePosition: "rotate-45 translate-x-44 -translate-y-4",
      colour: "bg-indigo-900",
    },
    {
      name: "Cantonese",
      mainPosition: "bottom-24 right-1/3 translate-x-2",
      pillPosition: "translate-y-32 translate-x-12",
      linePosition: "-rotate-45 -translate-x-4 -translate-y-8",
      colour: "bg-indigo-900",
    },
    {
      name: "Customer service",
      mainPosition: "bottom-20 left-1/2 transform -translate-x-1/2",
      pillPosition: "translate-y-40",
      linePosition: "",
      colour: "bg-indigo-800",
    },
  ]

  const creativeSkills = [
    {
      name: "iMovie",
      mainPosition: "top-28 left-1/3 -translate-x-1/2",
      pillPosition: "translate-x-8",
      linePosition: "-rotate-45 translate-x-20",
      colour: "bg-violet-900",
    },
    {
      name: "Photoshop",
      mainPosition: "top-32 right-1/3 -translate-x-8",
      pillPosition: "translate-x-20",
      linePosition: "rotate-45 translate-x-8",
      colour: "bg-violet-900",
    },
    {
      name: "Photography",
      mainPosition: "bottom-28 left-1/3 -translate-x-40",
      pillPosition: "translate-y-36 translate-x-28",
      linePosition: "rotate-45 translate-x-44 -translate-y-4",
      colour: "bg-violet-900",
    },
    {
      name: "Creative writing",
      mainPosition: "bottom-24 right-1/3 translate-x-2",
      pillPosition: "translate-y-32 translate-x-12",
      linePosition: "-rotate-45 -translate-x-4 -translate-y-8",
      colour: "bg-violet-900",
    },
  ]

  return (
    <div>
      <div className="relative w-full h-[600px] mb-36">
        {/* Brain SVG icon from SVG Repo at https://www.svgrepo.com/svg/441585/brain */}
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
      <div className="relative w-full h-[600px] mb-4">
        {/* Brain SVG icon from SVG Repo at https://www.svgrepo.com/svg/441585/brain */}
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
      <div className="relative w-full h-[600px] mb-4">
        {/* Brain SVG icon from SVG Repo at https://www.svgrepo.com/svg/441585/brain */}
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
