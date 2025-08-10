'use client'
import Link from 'next/link'

const Footer = () => (
  <footer className=" text-white border-t border-white/10 py-12 lg:py-16">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Studio Forma Logo" className="h-5 w-auto" />
      </div>
      <nav className="flex flex-wrap gap-6 text-sm font-light tracking-wider uppercase">
        <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
        <Link href="/about" className="hover:text-white/70 transition-colors">About</Link>
        <Link href="/projects" className="hover:text-white/70 transition-colors">Projects</Link>
        <Link href="/contact" className="hover:text-white/70 transition-colors">Contact</Link>
      </nav>
      <div className="text-white/70 text-xs text-center lg:text-right space-y-1">
        <div>hello@studioforma.com</div>
        <div>+1 234 567 890</div>
        <div>123 Forma Street, Design City</div>
      </div>
    </div>
    <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40 font-light tracking-wider">
      &copy; {new Date().getFullYear()} Studio Forma. All rights reserved.
    </div>
  </footer>
)

export default Footer
