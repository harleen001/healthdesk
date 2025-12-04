"use client"

import { useState } from "react"
import { Facebook, Twitter, Send, Linkedin } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Logo + Social */}
               {/* Top Logo + Social */}
        <div className="text-center mb-12">

          {/* LOGO */}
          <div className="inline-flex items-center gap-2 mb-3">
            <img 
              src="/logo.png" 
              alt="Health Desk Logo" 
              className="w-20 h-20 object-contain"
            />

           
          </div>

          {/* FOLLOW US (exactly below logo) */}
          <div className="mt-5 mb-6">
            <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 font-semibold py-2 px-6  transition-colors">
              Follow Us
            </button>
          </div>

          {/* SOCIAL ICONS */}
{/* SOCIAL ICONS */}
<div className="flex justify-center gap-4">
  <a href="#" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600">
    <Facebook size={20} />
  </a>

  <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500">
    <Twitter size={20} />
  </a>

  <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700">
    <Send size={20} />
  </a>

  <a href="#" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800">
    <Linkedin size={20} />
  </a>
</div>


        </div>

        {/* Three Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12 border-t border-gray-200">
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Have a Question?</h3>
            <p className="text-gray-600 text-md mb-4">
              Check out our FAQs where we answer the most commonly asked questions
            </p>
            <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 font-semibold py-2 px-4  transition-colors">
              Read FAQs
            </button>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Connect With Us</h3>
            <p className="text-gray-600 text-md mb-4">Enjoy free shipping for all orders.</p>
            <p className="font-bold text-gray-900 text-lg">1-800-822-7777</p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">We're Social</h3>
            <p className="text-gray-600 text-md">Like us, love us, follow us!</p>
          </div>
        </div>

       {/* Email Subscribe Banner */}
<div className="bg-blue-600 text-white py-12 px-8 rounded-lg my-12 
                -mx-4 sm:-mx-6 lg:-mx-8">
  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
    <div>
      <h2 className="text-3xl font-medium mb-2">Let's Grow Together</h2>
      <p className="text-blue-100">We'll keep it simple. Only the news and updates you need.</p>
    </div>

    <div className="flex gap-2 w-full md:w-auto">
  <input
    type="email"
    placeholder="Please Enter Your Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="flex-1 md:flex-none px-6 py-4 
               border-2 border-white bg-transparent 
               text-white placeholder-white 
               rounded-md focus:outline-none"
  />

  <button className="bg-white text-black font-bold 
                     px-8 py-4 rounded-md 
                     hover:bg-gray-100 transition-colors">
    Submit
  </button>
</div>
  </div>
</div>


        {/* Company Info Section */}
        <div className="border-t border-gray-200 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <img 
                  src="/logo.png" 
                  alt="Health Desk Logo" 
                  className="w-10 h-10 object-contain"
                />
                <span className="font-bold text-lg text-gray-900">HEALTH DESK</span>
              </div>

              <div className="text-gray-600 text-sm space-y-2">
                <p>Address: 7823 Red Oak Trail, Austin, TX, 78745, United States</p>
                <p>Phone: (512) 555-2376</p>
                <p>Email: Ereforce@outlook.com</p>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-bold text-gray-900 mb-6">Our Products</h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-600">

                {/* Column 1 */}
                <div className="space-y-2">
                  <a href="#" className="hover:text-blue-600">Vita Renew</a>
                  <a href="#" className="block hover:text-blue-600">Testobites</a>
                  <a href="#" className="block hover:text-blue-600">Audizen</a>
                   <a href="#" className="block hover:text-blue-600">UroFlow</a>
                    <a href="#" className="block hover:text-blue-600">Nerve Flow</a>
                  
                </div>

                {/* Column 2 */}
                <div className="space-y-2">
                  <a href="#" className="hover:text-blue-600">Vita Renew</a>
                  <a href="#" className="block hover:text-blue-600">Testobites</a>
                  <a href="#" className="block hover:text-blue-600">Audizen</a>
                   <a href="#" className="block hover:text-blue-600">UroFlow</a>
                    <a href="#" className="block hover:text-blue-600">Nerve Flow</a>
                </div>

                {/* Column 3 */}
                <div className="space-y-2">
                  <a href="#" className="hover:text-blue-600">Nerve Flow</a>
                  <a href="#" className="block hover:text-blue-600">Uro Flow</a>
                  <a href="#" className="block hover:text-blue-600">Memof</a>
                   <a href="#" className="block hover:text-blue-600">UroFlow</a>
                    <a href="#" className="block hover:text-blue-600">Nerve Flow</a>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="border-t border-gray-200 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-8 mt-8">

          <div className="text-center mb-6">
            <p className="text-gray-600 text-xs mb-2">
              These statements have not been evaluated by the Food and Drug Administration.
            </p>
            <p className="text-gray-600 text-xs">
              These products are not intended to diagnose, treat, cure or prevent any disease. Individual results may vary.
            </p>
          </div>

          {/* Payment Icons */}
<div className="flex justify-center gap-4 mb-8">
  {/* Mastercard */}
  <div className="bg-white border border-gray-200 rounded-md p-2 w-12 h-8 flex items-center justify-center">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
      alt="Mastercard"
      className="w-full h-full object-contain"
    />
  </div>

  {/* Diners Club */}
  <div className="bg-white border border-gray-200 rounded-md p-2 w-12 h-8 flex items-center justify-center">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Diners_Club_Logo3.svg"
      alt="Diners Club"
      className="w-full h-full object-contain"
    />
  </div>

  {/* Visa */}
  <div className="bg-white border border-gray-200 rounded-md p-2 w-12 h-8 flex items-center justify-center">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
      alt="Visa"
      className="w-full h-full object-contain"
    />
  </div>

  {/* American Express */}
  <div className="bg-white border border-gray-200 rounded-md p-2 w-12 h-8 flex items-center justify-center">
    <img
      src="https://commons.wikimedia.org/wiki/File:American_Express_logo_(2018).svg"
      alt="American Express"
      className="w-full h-full object-contain"
    />
  </div>
</div>


          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-gray-600 text-xs border-t border-gray-200 pt-6">
            <p>&copy; 2025, Health Desk Clinic. All Rights Reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-blue-600">Terms And Conditions</a>
              <a href="#" className="hover:text-blue-600">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600">Contact Us</a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  )
}
