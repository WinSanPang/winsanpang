import Image from "next/image"

import Hero from "@/src/app/[locale]/ui/components/hero"

export default function Mindmap() {
  return (
    <div>
      <Hero
        title="Hobbies 🏊"
        subtitle="Here you can find out about some my hobbies and interests"
      />
      {/* <Image
        src="https://images.unsplash.com/photo-1735598417949-d22e9f8092ea"
        alt="test"
        width={1000}
        height={636}
        className="absolute w-full top-0 left-0 opacity-20 h-full"
      /> */}
    </div>
  )
}
