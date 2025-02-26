"use client"

import Image from "next/image"

import { Carousel } from "flowbite-react"

export default function HomepageCarousel() {
  const carouselItems = [
    {
      title: "I'm a Software Engineer",
      img: "/profile.jpeg",
      imgAlt: "",
      descriptions: [
        "In 2017, whilst working at a tech startup named JustPark, I took an interest in web development and software engineering. It started off with learning HTML, tweaking some CSS here or there and practising bits of SQL.",
        "By 2019, I began taking it more seriously and was doing React courses and attending workshops. In Jan 2020, I began working as a Junior Frontend Engineer and have progressed to a Software Engineer since.",
      ],
    },
    {
      title: "I'm a Wife",
      img: "wife.jpg",
      imgAlt:
        "A photo of me and Adél, dressed up for our wedding dinner and looking at each other",
      descriptions: [
        "I matched with Adél on Tinder on the 7th August 2018 after spending almost a year on dating apps and on the verge of giving it up. Luckily, I didn't and I matched with the love of my life. We talked for hours on end, met up for several dates, and moved in together after 7 months of dating.",
        "In January 2023 we got engaged whilst on holiday in the Thailand (she beat me to proposing first) and we got married on the 7th August 2023, on our 5th year anniversary. During our time together so far, we've gone on countless amazing holidays, bought our own home, added a gorgeous little dog to our family unit, supported each other through difficult times, and encouraged each other to grow. I'm so grateful to have her in my life and I can't wait to see what the future holds for us.",
      ],
    },
    {
      title: "I'm a Dog Mum",
      img: "dog-mum.jpg",
      imgAlt:
        "A photo of me holding Donut's paw and smiling at her on a beach in Croatia",
      descriptions: [
        "In 2022, we added an adorable little Labrador puppy to our family and named her Donut. We first met Donut in July when she was just a teeny tiny 3 weeks old puppy. We fell in love with her and knew she was our fur baby. The puppy stages were tough - lots of training, cleaning up messes, and sleepless nights. But it was all worth it. ",
        "She's grown to become a very well-behaved, loving, playful and happy-go-lucky dog who loves cuddles, food, and playing all day every day. She's brought so much joy, fun and love into our lives. In 2024, we took her with us on a Europe road trip and it was so special to see her fascinated by everything we saw and did. She's our little adventurer and we can't wait to take her on more trips with us.",
      ],
    },
    {
      title: "I love to travel",
      img: "dog-mum.jpg",
      imgAlt: "",
      descriptions: [
        "As a child, I travelled to Hong Kong every 2 - 3 years to visit family. I adore the food and culture there, but above all I'm amazed by the country's landscape - that amongst all the skyscrapers you can still see the backdrop of mountains and nature. I've also enjoyed exploring other parts of Asia, including the Maldives, Thailand, South Korea, Singapore, Taiwan and Japan.",
        "Over the years, I've also seen more of Europe, including Portugal, Spain, Greece and Iceland. In 2024, my wife and I did our first Europe road trip together so we could bring our pup on holiday with us. We drove from the UK to Germany, Italy, Croatia, Hungary, and Austria. We absolutely loved being in the car together, watching the beautiful sights of nature along the way and listening to our favourite songs. I've found that travelling has really expanded my horizons and understanding of different cultures, and with each new destination I discover new flavours, experiences and sensations that makes our world beautifully colourful.",
      ],
    },
    {
      title: "I'm a Geek",
      img: "dog-mum.jpg",
      imgAlt: "",
      descriptions: [
        "Growing up, I felt like being geeky was seen as 'uncool', but that's exactly who I was and nowadays I'm proud to embrace my hobbies and interests. I love reading, video games, Dungeons and Dragons, Lego and board games. Fandom wise, talk to me about anything related to Pokémon, Marvel and Harry Potter.",
      ],
    },
  ]

  return (
    <div className="w-full h-[500px]">
      <Carousel slide={false}>
        {carouselItems.map(({ title, img, imgAlt, descriptions }) => (
          <div
            key={title}
            className="bg-sky-900 rounded-lg h-full flex items-center justify-center"
          >
            <Image
              src={`/homepage_carousel/${img}`}
              alt={imgAlt}
              width={800}
              height={800}
              className="w-auto h-full"
            />
            <div className="text-white p-16">
              <p className="text-4xl mb-8">{title}</p>
              {descriptions.map((description) => (
                <p key={description} className="mb-4">
                  {description}
                </p>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}
