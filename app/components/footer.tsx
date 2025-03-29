import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12 py-6 text-sm text-center">
      <div className="max-w-6xl mx-auto px-4 space-y-4">
        <div className="flex justify-center gap-6">
          <Link href="/about-us" className="hover:text-pink-600">About Us</Link>
          <Link href="/faq" className="hover:text-pink-600">FAQ</Link>
          <Link href="/shipping" className="hover:text-pink-600">Shipping & Returns</Link>
          <Link href="/privacy" className="hover:text-pink-600">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-pink-600">Terms of Service</Link>
        </div>
        
        <div className="text-gray-500">© 2024 Giftopia. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
