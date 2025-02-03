import { lobster } from "@/app/ui/fonts"

type Props = {
  title: string
  subtitle?: string
}

export default function Hero({ title, subtitle }: Props) {
  return (
    <div className="text-center">
      <h1
        className={`${lobster.className} text-4xl text-white md:text-6xl md:leading-normal`}
      >
        <strong>{title}</strong>
      </h1>
      {subtitle && (
        <h2 className="text-base text-white md:leading-normal">{subtitle}</h2>
      )}
      <div className="border-b border-white m-8" />
    </div>
  )
}
