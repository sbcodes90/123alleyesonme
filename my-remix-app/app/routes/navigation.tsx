import { Link } from '@remix-run/react'
import React from 'react'

function Navigation() {
  return (
<nav className="flex items-center justify-between flex-wrap bg-black p-6">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span className="font-regular text-xl tracking-tight">
      <Link to="/home/welcome">123AllEyesOnMe LLC</Link></span>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full block flex-row lg:flex lg:items-center lg:w-auto">
    <div className="text-sm font-semibold lg:flex-row">
      <Link to="/home/about" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
        About
      </Link>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
        Programs
      </a>
        <Link to="/home/signup" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">Become a Bee</Link>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
        Donate
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
        Contact Us
      </a>
    </div>
  </div>
</nav>  )
}

export default Navigation