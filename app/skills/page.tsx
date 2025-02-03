import Hero from "@/app/ui/components/hero"
import Mindmap from "@/app/ui/components/mindmap/mindmap"

export default function Page() {
  return (
    <div>
      <Hero
        title="Skills 💻"
        subtitle="Here you can see my current skillset in the form of a mindmap, broken down into Programming Languages, General and Creative"
      />
      <Mindmap />
      <p className="text-center text-gray-500 mt-4 text-xs">
        Vectors and icons by{" "}
        <a href="https://www.svgrepo.com" target="_blank">
          SVG Repo
        </a>
      </p>
    </div>
  )
}
