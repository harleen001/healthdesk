import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            {/* INCREASED LOGO SIZE: Changed from w-8 h-8 to w-10 h-10 */}
            <div className="w-10 h-10 relative"> 
              <Image 
                src="/logo.png" 
                alt="Health Desk Logo"
                layout="fill" 
                objectFit="contain" 
              />
            </div>
            <span className="font-bold text-lg">Health Desk</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-gray-700 hover:text-blue-500 text-sm font-medium">
              Home
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-500 text-sm font-medium">
              Shop
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-500 text-sm font-medium">
              About Us
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-500 text-sm font-medium">
              FAQ
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-500 text-sm font-medium">
              Blog
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-500 text-sm font-medium">
              Contact Us
            </Link>
          </nav>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}