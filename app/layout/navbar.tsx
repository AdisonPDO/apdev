import React from 'react'

export default function NavBar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-mint text-black p-4">
      <div className="container mx-auto">
        <nav className="flex">
          <a href="#APDev" className="mr-10 font-bold">APDev</a>
          <a href="#Projets" className="mr-10">Projets</a>
          <a href="#Contact">Contact</a>
        </nav>
      </div>
    </div>
  )
}
