import React from 'react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black shadow-lg">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Tin Gods</h1>
          <ul className="hidden md:flex space-x-8">
            <li><a href="#gallery" className="hover:text-red-600 transition">Gallery</a></li>
            <li><a href="#bio" className="hover:text-red-600 transition">Bio</a></li>
            <li><a href="#music" className="hover:text-red-600 transition">Music</a></li>
            <li><a href="#gigs" className="hover:text-red-600 transition">Gigs</a></li>
            <li><a href="#contact" className="hover:text-red-600 transition">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
