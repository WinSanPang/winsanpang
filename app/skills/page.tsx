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
    </div>
  )
}
