import Image from "next/image"

import { lobster } from "@/src/app/[locale]/ui/fonts"

import Hero from "@/src/app/[locale]/ui/components/hero"

export default function Page() {
  const portfolioSections = [
    {
      id: "the-cerberus-affair",
      name: "The Cerberus Affair",
      description: [
        {
          text: "The Cerberus Affair website was built bespoke to complement my neighbour's book launch in May 2020 and provide an interactive and engaging experience to potential readers and fans, allowing them to find out a bit more about the story, characters and the author. I was solely responsible for the entire creation of the website, from the design through to building and deploying it to production.",
        },
        {
          text: "The website was built using React and my inspiration for the design came from reading the book as research for the project. This ensured that the website would be an accurate representation of the story and enhance readers' interest in the book. You can view the website and find out more about The Cerberus Affair by visiting:",
        },
      ],
      url: "https://www.thecerberusaffair.com/",
      colours: {
        from: "from-red-700",
        to: "to-black",
        background: "bg-black",
        border: "border-red-700",
        title: "text-red-700",
      },
      images: [
        {
          img: "https://media.giphy.com/media/mPwWv1uCki3h1QhesM/giphy.gif",
          alt: "The Cerberus Affair website homepage",
        },
        {
          img: "https://media.giphy.com/media/GOR4ECNgO4kqHzfLep/giphy.gif",
          alt: "The Cerberus Affair website read the book page",
        },
        {
          img: "https://media.giphy.com/media/82P20AjnIQl3B5BYOh/giphy.gif",
          alt: "The Cerberus Affair website about page",
        },
      ],
      skills: [
        {
          name: "React",
        },
        {
          name: "React Hooks",
        },
        {
          name: "SCSS",
        },
        {
          name: "Photoshop",
        },
      ],
    },
    {
      id: "connected-learning",
      name: "Connected Learning",
      description: [
        {
          text: "Connected Learning was born out of the #UKvsCOVID 2020 Hackathon, which was organised by Women Driven Development to help tackle some of the core problems created by the impact of coronavirus and the national lockdown. The education sector was one of many hit by lockdown restrictions, as it meant traditional learning in the classroom was no longer possible and the pressure shifted onto parents, who were overwhelmed by the range of online learning resources, not knowing where to start or how to use them.",
        },
        {
          text: "On the Hackthon, I took the lead in forming the ConnectEducate team and together, with a group of eight other women, we created Connected Learning, a user-friendly online learning platform designed to provide parents with a focused platform of resources and, most importantly, make it possible for them to connect with vetted mentors who could support their children's educational needs. The platform was built using React and Ruby on Rails.",
        },
      ],
      url: "",
      colours: {
        from: "from-[#07686a]",
        to: "to-[#e68d05]",
        background: "bg-[#07686a]",
        border: "border-[#e68d05]",
        title: "text-[#e68d05]",
      },
      images: [
        {
          img: "https://media.giphy.com/media/9nWJVIHiYBGmMShHnF/giphy.gif",
          alt: "The Connected Learning website homepage",
        },
        {
          img: "https://media.giphy.com/media/fII4THRTpB2hAwlPYz/giphy.gif",
          alt: "The Connected Learning website resources page",
        },
        {
          img: "https://media.giphy.com/media/eqSaqpXPVFqvAAckp5/giphy.gif",
          alt: "The Connected Learning website about page",
        },
      ],
      skills: [
        {
          name: "React",
        },
        {
          name: "Ruby on Rails",
        },
        {
          name: "SCSS",
        },
        {
          name: "Photoshop",
        },
      ],
    },
  ]

  return (
    <div>
      <Hero
        title="Portfolio 📂"
        subtitle="Here you can find some projects I've participated in and the websites that have been subsequently built."
      />
      <div className="md:flex justify-center gap-2">
        {portfolioSections.map(({ id, name, colours }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`${colours.background} rounded-full p-2 m-2 border-2 ${colours.border}`}
          >
            <strong>
              <span className={colours.title}>{name}</span>
            </strong>
          </a>
        ))}
      </div>
      {portfolioSections.map(
        ({ id, name, description, url, images, colours }) => (
          <section
            id={id}
            key={name}
            className={`bg-gradient-to-r ${colours.from} ${colours.to} m-12 p-12 border-2 rounded-lg text-center`}
          >
            <h3
              className={`${lobster.className} text-white text-2xl md:text-4xl mb-8`}
            >
              {name}
            </h3>
            {description.map(({ text }) => (
              <p key={text} className="text-white pb-4">
                {text}
              </p>
            ))}
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <strong>{url}</strong>
              </a>
            )}
            <div className="flex justify-center gap-4 mt-8 flex-wrap">
              {images.map(({ img, alt }) => (
                <Image key={img} src={img} alt={alt} width={350} height={300} />
              ))}
            </div>
          </section>
        )
      )}
    </div>
  )
}
