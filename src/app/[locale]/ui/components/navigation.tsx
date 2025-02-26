"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"

import { Navbar } from "flowbite-react"

export default function Navigation() {
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Skills", href: "/skills" },
    { name: "Work", href: "/work" },
    { name: "Education", href: "/education" },
    { name: "Hobbies", href: "/hobbies" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <Navbar fluid className="bg-cyan-950">
      <Navbar.Brand href="/">
        <Image
          src="/profile.jpeg"
          width={100}
          height={100}
          className="size-10 rounded-full"
          alt="A photograph of Win San Pang"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {navigation.map((item) => (
          <Navbar.Link
            key={item.name}
            href={item.href}
            className={`text-white ${
              pathname === item.href ? "border-white border-1" : "" // Not sure why styling isn't working here
            }`}
          >
            {item.name}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  )
}
