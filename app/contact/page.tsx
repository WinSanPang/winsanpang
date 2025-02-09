import Hero from "@/app/ui/components/hero"
import BusinessCard from "../ui/business-card"

export default function Page() {
  return (
    <div>
      <Hero
        title="Contact 📱"
        subtitle="Please feel free to get in touch with me via the contact details below. Whether it's a job opportunity, a collaboration project, or even just some general feedback about my website, I'd love to hear from you!"
      />
      <BusinessCard />
      <p className="text-center text-gray-500 mt-4 text-xs">
        Vectors and icons by{" "}
        <a href="https://www.svgrepo.com" target="_blank">
          SVG Repo
        </a>
      </p>
    </div>
  )
}
