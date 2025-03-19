import Image from "next/image"

type Props = {
  img: string
  alt: string
  caption?: string
}

export default function Polaroid({ img, alt, caption }: Props) {
  return (
    <div className="bg-white relative w-[300px] h-[360px] rounded-lg p-4 shadow-lg border border-black mb-4">
      <Image
        className="absolute top-0 left-0 p-4"
        src={img}
        alt={alt}
        width={350}
        height={350}
      />
      <p className="absolute bottom-0 left-0 mb-4 px-2 text-center text-sm w-full">
        {caption}
      </p>
    </div>
  )
}
