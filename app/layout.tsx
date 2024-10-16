import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { Instagram } from 'lucide-react';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "RD's Farm",
  description: "Your perfect destination for celebrations, weddings, parties, and getaways.",
  openGraph: {
    title: "RD's Farm - Unforgettable Celebrations & Getaways",
    description: "Discover the perfect place for weddings, parties, and luxurious escapes at RD's Farm.",
    url: "https://www.rdsfarm.com",
    siteName: "RD's Farm",
    images: [
      {
        url: "https://rdsfarm.vercel.app/rdsfarm-og.png",
        width: 1200,
        height: 630,
        alt: "RD's Farm lush landscape",
      }
    ],
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear()
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
              <Navbar />
        {children}
        <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">RD&apos;s Farm</h3>
            <p className="text-sm text-gray-400">
            Your perfect destination for celebrations, weddings, parties and getaways. Experience the beauty of nature and the comfort of our facilities.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-400 hover:text-white transition duration-300">Home</Link></li>
              <li><Link href="#about" className="text-sm text-gray-400 hover:text-white transition duration-300">About Us</Link></li>
              <li><Link href="#review" className="text-sm text-gray-400 hover:text-white transition duration-300">Reviews</Link></li>
              <li><Link href="/gallery" className="text-sm text-gray-400 hover:text-white transition duration-300">Gallery</Link></li>
              <li><Link href="#contact" className="text-sm text-gray-400 hover:text-white transition duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Socials</h3>
            <div className="flex space-x-4">
              {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                <Facebook size={24} />
              </a> */}
              <a href="https://instagram.com/rd_farm_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                <Instagram size={24} />
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                <Twitter size={24} />
              </a> */}
            </div>
            <p className="mt-4 text-sm text-gray-400">
            RD&apos;s Farm <br/>

Near Laxmi Sky City, Dastan Circle, Kathwada, Ahmedabad - 382330
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} RD&apos;s Farm. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
      </body>
    </html>
  );
}
