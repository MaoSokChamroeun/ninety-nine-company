import React from 'react'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="w-full mt-10 p-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Left */}
          <div>
            <h1 className="text-2xl font-bold"><Link to = {'/'}><img src={logo} alt="logo" width={100} className='rounded-2xl' /></Link>Ninety Nine & Media</h1>
            <p className="mt-2 text-gray-600">
              តួលេខ B67 ផ្លូវ B បុរីពិភពថ្មី ហេង សំឡេង
            </p>

            {/* Email */}
            <div className="flex items-center gap-3 mt-4">
              <span>📧</span>
              <a href="mailto:anachakdigital@gmail.com" className="text-blue-500 uppercase text-decoration-none">
                NINETYNINEME99@GMAIL.COM
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 mt-2">
              <span>📞</span>
              <p className="text-gray-700">+855 96 969 6725</p>
            </div>
          </div>

          {/* Middle */}
          <div className="md:text-center">
            <p className="font-bold text-lg">Information</p>

            <ul className="mt-3 space-y-2 text-gray-700">
              <li className=''><a href="#" className="hover:text-pink-500 font-semibold  text-decoration-none ">About Company</a></li>
              <li><a href="#" className="hover:text-pink-500 font-semibold text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* Right */}
          <div className="md:text-right">
            <h2 className="font-bold text-lg">Contact</h2>

            <div className="mt-3 space-y-2 text-gray-700">
              <p className="font-semibold">+855 96 969 6725</p>
              <p className="font-semibold">ninetynine99@gmail.com</p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-300"></div>

        {/* Bottom Social + Copy */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* Social Icons */}
          <div className="flex gap-5 text-3xl mx-auto md:mx-0">
            <a href="#" className="text-blue-600"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-pink-600"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-black"><i className="fab fa-tiktok"></i></a>
            <a href="#" className="text-blue-400"><i className="fab fa-telegram"></i></a>
          </div>

          {/* Copyright */}
          <p className="text-center text-gray-600 text-sm">
            © 2025 Anachak Digital. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
