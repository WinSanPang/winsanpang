import Hero from "@/app/ui/components/hero"
import Timeline from "@/app/ui/components/timeline"

export default function Page() {
  return (
    <div>
      <Hero
        title="Work"
        subtitle="I'm an accomplished Full Stack Software Engineer with a strong emphasis on frontend development. I have 4+ years experience in creating high-quality user interfaces that enhance conversion rates and user engagement.
I transitioned from customer service background to web development, demonstrating commitment, self-motivation, and initiative. Below you'll find a timeline of my career journey so far :)"
      />
      <Timeline />
    </div>
  )
}
