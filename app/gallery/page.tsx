'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const images = [
  { src: "/image2.jpg", alt: "Wedding ceremony" },
  { src: "/image1.jpg", alt: "Farm landscape" },
  { src: "/image3.jpg", alt: "Rustic barn interior" },
  { src: "/image4.jpg", alt: "Farm-to-table dinner" },
  { src: "/image5.jpg", alt: "Outdoor event space" },
  { src: "/image6.jpg", alt: "Cozy accommodation" },
  { src: "/image7.jpg", alt: "Farm animals" },
  { src: "/image8.jpg", alt: "Scenic sunset view" },
  { src: "/image9.jpg", alt: "Corporate retreat" },
  { src: "/image10.jpg", alt: "Garden party" },
  { src: "/image11.jpg", alt: "Autumn harvest festival" },
  { src: "/image12.jpg", alt: "Winter wonderland event" },
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