import { Facebook, Instagram, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer style={{ backgroundImage: 'url("/footer-bg-image-2.png")' }}  className=" text-white py-12">
      <div className="container mx-auto px-4">
        {/* Logo Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div>
            <Image 
                    src="/logo4_copy.jpg"
                    alt="Vili Bakery Logo"
                    width={120} 
                    height={120}
            />
            <div>
              <h2 className="text-[#C4933F] text-xl mb-4">STAY CONNECTED</h2>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-[#C4933F] transition-colors">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link href="#" className="hover:text-[#C4933F] transition-colors">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="#" className="hover:text-[#C4933F] transition-colors">
                  <Youtube className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About Us */}
          {/* Brand Description */}
          <div className="max-w-2xl">
            <h2 className="text-2xl mb-4">
              <span className="bg-blue-600 px-2">HOUSE OF</span>
              <span className="ml-2">FRESHNESS</span>
            </h2>
            <p className="text-gray-300">
              Vili Bakery is your one-stop destination for freshly baked delights that combine tradition with
              innovation. Renowned for its wide range of cakes, bread, cookies, and snacks, Vili Bakery is committed to
              delivering high-quality products made with love and precision.
            </p>
          </div>
          <div>
            <h3 className="text-[#C4933F] text-xl mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-[#C4933F] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#C4933F] transition-colors">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#C4933F] transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#C4933F] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-[#C4933F] text-xl mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-[#C4933F] transition-colors">
                  Cakes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#C4933F] transition-colors">
                  Pastries
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#C4933F] transition-colors">
                  Cookies & Biscuits
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#C4933F] transition-colors">
                  Sweets & Chocolates
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#C4933F] transition-colors">
                  Gift Packs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#C4933F] transition-colors">
                  Namkeen & Khakhra
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#C4933F] transition-colors">
                  Savouries
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#C4933F] transition-colors">
                  Bread
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h3 className="text-[#C4933F] text-xl mb-4">Get in touch</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-[#C4933F] transition-colors">
                  Franchise Inquiry
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#C4933F] transition-colors">
                  Consumer Feedback
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-700">
          <p className="text-sm text-gray-400">Copyright 2025 Vili Food Pvt. Ltd</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-gray-400 hover:text-[#C4933F]">
              Privacy Policy
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="#" className="text-sm text-gray-400 hover:text-[#C4933F]">
              Terms of use
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="#" className="text-sm text-gray-400 hover:text-[#C4933F]">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

