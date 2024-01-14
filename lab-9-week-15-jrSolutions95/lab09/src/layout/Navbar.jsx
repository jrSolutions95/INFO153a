import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {/* Choosed to use tha navbar instead of tabs felt this was cleaner */
  return (
    <nav className="bg-blue-900 p-5 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex">
            <Link to="/" className="btn btn-ghost btn-med rounded-btn text-lg text-white">Home</Link>
            <Link to="/about" className="btn btn-ghost btn-med rounded-btn  text-lg text-white">About</Link>
            <Link to="/projects" className="btn btn-ghost btn-med rounded-btn  text-lg text-white">Projects</Link>
            <Link to="/contact" className="btn btn-ghost btn-med rounded-btn text-lg text-white">Contact</Link>
        </div>
            <a href="https://www.ischool.berkeley.edu/courses/info/153a" className="text-white text-lg font-semibold" target='blank' >
                Lars Harald Aasheim INFO 153A
            </a>
      </div>
    </nav>
  )
}

export default Navbar
