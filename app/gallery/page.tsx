'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const images = [
  { src: "https://rdsfarm.com/image1.jpg?height=800&width=1200", alt: "Farm landscape" },
  { src: "https://rdsfarm.com/image2.jpg?height=800&width=1200", alt: "Wedding ceremony" },
  { src: "https://rdsfarm.com/image3.jpg?height=800&width=1200", alt: "Rustic barn interior" },
  { src: "https://rdsfarm.com/image4.jpg?height=800&width=1200", alt: "Farm-to-table dinner" },
  { src: "https://rdsfarm.com/image5.jpg?height=800&width=1200", alt: "Outdoor event space" },
  { src: "https://rdsfarm.com/image6.jpg?height=800&width=1200", alt: "Cozy accommodation" },
  { src: "https://rdsfarm.com/image7.jpg?height=800&width=1200", alt: "Farm animals" },
  { src: "https://rdsfarm.com/image8.jpg?height=800&width=1200", alt: "Scenic sunset view" },
  { src: "https://rdsfarm.com/image9.jpg?height=800&width=1200", alt: "Corporate retreat" },
  { src: "https://rdsfarm.com/image10.jpg?height=800&width=1200", alt: "Garden party" },
  { src: "https://rdsfarm.com/image11.jpg?height=800&width=1200", alt: "Autumn harvest festival" },
  { src: "https://rdsfarm.com/image12.jpg?height=800&width=1200", alt: "Winter wonderland event" },
]

export default function GalleryPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="container mx-auto px-4 py-20">
      <div className='flex flex-col-reverse justify-center items-center'>
      
      <h1 className="text-4xl font-bold text-center mb-12">RD&apos;s Farm Gallery</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`relative aspect-square overflow-hidden rounded-lg cursor-pointer group transform transition-all duration-500 ease-in-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-2"
            />
          </div>
        ))}
      </div>
    </div>
  )
}