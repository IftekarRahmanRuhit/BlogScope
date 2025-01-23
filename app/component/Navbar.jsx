import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-700 p-4 shadow-lg">
      <div className="container w-11/12 mx-auto flex justify-between items-center relative">
        <Link href="/" className="text-2xl font-bold text-white tracking-wider">
          MyApp
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-white hover:text-blue-200 transition-colors">
            Home
          </Link>
          <Link href="/profile" className="text-white hover:text-blue-200 transition-colors">
            Profile
          </Link>
          
          <div className="flex space-x-3">
            <Link href="/signin" className="btn btn-outline btn-sm border-white text-white hover:bg-white hover:text-blue-600">
              Sign In
            </Link>
            <Link href="/signup" className="btn btn-sm btn-ghost bg-white text-blue-600 hover:bg-blue-50">
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div className="dropdown dropdown-end md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/profile">Profile</Link></li>
            <li><Link href="/signin">Sign In</Link></li>
            <li><Link href="/signup">Sign Up</Link></li>
            <li><Link href="/logout">Logout</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;