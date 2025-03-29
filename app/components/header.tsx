'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-900">
          Giftopia
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/shop" className="hover:text-pink-600">Shop</Link>
          <Link href="/occasions" className="hover:text-pink-600">Occasions</Link>
          <Link href="/bulk-orders" className="hover:text-pink-600">Bulk Orders</Link>
          <Link href="/inspiration" className="hover:text-pink-600">Inspiration</Link>
          <Link href="/contact" className="hover:text-pink-600">Contact</Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">Login</button>
          <button className="text-gray-700 hover:text-pink-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
            </svg>
          </button>
          <button className="text-gray-700 hover:text-pink-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6.4A1 1 0 007 21h10a1 1 0 001-.8L19 13M7 13L5.4 5M19 13l1.2-6.4A1 1 0 0019 5H6" />
            </svg>
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 text-sm">
          <Link href="/shop" className="block">Shop</Link>
          <Link href="/occasions" className="block">Occasions</Link>
          <Link href="/bulk-orders" className="block">Bulk Orders</Link>
          <Link href="/inspiration" className="block">Inspiration</Link>
          <Link href="/contact" className="block">Contact</Link>
          <Link href="#" className="block mt-2">Login</Link>
        </div>
      )}
    </header>
  )
}

export default Header