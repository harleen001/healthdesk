"use client"

import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">HD</span>
            </div>
            <span className="font-bold text-lg">Health Desk</span>
          </div>
          <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 font-semibold py-2 px-6 rounded-lg transition-colors mb-6">
            Follow Us
          </button>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600"
            >
              f
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500"
            >
              𝕏
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700"
            >
              ✈
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800"
            >
              in
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12 border-t border-gray-200">
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Have a Question?</h3>
            <p className="text-gray-600 text-sm mb-4">
              Check out our FAQs where we answer the most commonly asked questions
            </p>
            <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 font-semibold py-2 px-4 rounded-lg transition-colors">
              Read FAQs
            </button>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Connect With Us</h3>
            <p className="text-gray-600 text-sm mb-4">Enjoy free shipping for all orders.</p>
            <p className="font-bold text-gray-900 text-lg">1-800-822-7777</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4">We're Social</h3>
            <p className="text-gray-600 text-sm">Like us, love us, follow us!</p>
          </div>
        </div>

        <div className="bg-blue-600 text-white py-12 px-8 rounded-lg my-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Let's Grow Together</h2>
              <p className="text-blue-100">We'll keep it simple. Only the news and updates you need.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Please Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 md:flex-none px-4 py-3 rounded text-gray-900 placeholder-gray-500 focus:outline-none"
              />
              <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded hover:bg-gray-100 transition-colors">
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">HD</span>
                </div>
                <span className="font-bold text-lg text-gray-900">HEALTH DESK</span>
              </div>
              <div className="text-gray-600 text-sm space-y-2">
                <p>Address: 7823 Red Oak Trail, Austin, TX, 78745, United States</p>
                <p>Phone: (512) 555-2376</p>
                <p>Email: Ereforce@outlook.com</p>
              </div>
            </div>

            {/* Products Links */}
            <div>
              <h3 className="font-bold text-gray-900 mb-6">Our Products</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="space-y-2">
                  <a href="#" className="hover:text-blue-600">
                    Vita Renew
                  </a>
                  <a href="#" className="block hover:text-blue-600">
                    Testobites
                  </a>
                  <a href="#" className="block hover:text-blue-600">
                    Audizen
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="#" className="hover:text-blue-600">
                    Vita Renew
                  </a>
                  <a href="#" className="block hover:text-blue-600">
                    Testobites
                  </a>
                  <a href="#" className="block hover:text-blue-600">
                    Audizen
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="#" className="hover:text-blue-600">
                    Vita Renew
                  </a>
                  <a href="#" className="block hover:text-blue-600">
                    Testobites
                  </a>
                  <a href="#" className="block hover:text-blue-600">
                    Audizen
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="#" className="hover:text-blue-600">
                    Nerve Flow
                  </a>
                  <a href="#" className="block hover:text-blue-600">
                    Uro flow
                  </a>
                  <a href="#" className="block hover:text-blue-600">
                    Memof
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="#" className="hover:text-blue-600">
                    Nerve Flow
                  </a>
                  <a href="#" className="block hover:text-blue-600">
                    Derma care
                  </a>
                  <a href="#" className="block hover:text-blue-600">
                    TestoZen
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="#" className="hover:text-blue-600">
                    Nerve Flow
                  </a>
                  <a href="#" className="block hover:text-blue-600">
                    Derma care
                  </a>
                  <a href="#" className="block hover:text-blue-600">
                    True Fem
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-8 mt-8">
          <div className="text-center mb-6">
            <p className="text-gray-600 text-xs mb-2">
              These statements have not been evaluated by the Food and Drug Administration.
            </p>
            <p className="text-gray-600 text-xs">
              These products are not intended to diagnose, treat, cure or prevent any disease. Individual results may
              vary.
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <div className="w-12 h-8 bg-red-600 rounded flex items-center justify-center text-white text-xs font-bold">
              MC
            </div>
            <div className="w-12 h-8 bg-blue-700 rounded flex items-center justify-center text-white text-xs font-bold">
              DC
            </div>
            <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
              VS
            </div>
            <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">
              AE
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-gray-600 text-xs border-t border-gray-200 pt-6">
            <p>&copy; 2025, Health Desk Clinic. All Rights Reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-blue-600">
                Terms And Conditions
              </a>
              <a href="#" className="hover:text-blue-600">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-600">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
