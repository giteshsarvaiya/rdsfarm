'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Bride",
    image: "/review pfp1.jpeg",
    content: "Our wedding at RDs Farm was absolutely magical. The staff went above and beyond to make our day perfect. The scenic views provided a stunning backdrop for our photos!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Corporate Event Planner",
    image: "/review pfp2.jpeg",
    content: "We hosted our annual company retreat at RDs Farm and it exceeded all expectations. The facilities were top-notch and the team-building activities were engaging and fun.",
    rating: 5
  },
  {
    id: 3,
    name: "Sand Thompson",
    role: "Family Reunion Organizer",
    image: "/review pfp4.jpeg",
    content: "RDs Farm was the perfect setting for our family reunion. The accommodations were comfortable, the food was delicious, and there were activities for all ages. We'll definitely be back!",
    rating: 4
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Birthday Celebrant",
    image: "/review pfp3.jpeg",
    content: "I celebrated my 50th birthday at RDs Farm and it was unforgettable. The farm-to-table dinner was exquisite and the ambiance was just what I wanted. Highly recommend!",
    rating: 5
  }
]

export default function ReviewsSection() {
  const [currentReview, setCurrentReview] = useState(0)

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  useEffect(() => {
    const timer = setInterval(nextReview, 10000) // Auto-advance every 10 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="review" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Guests Say</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentReview * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="flex items-center mb-4">
                      <Image
                        src={review.image}
                        alt={review.name}
                        width={60}
                        height={60}
                        className="rounded-full mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-lg">{review.name}</h3>
                        <p className="text-gray-600">{review.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">&ldquo;{review.content}&rdquo;</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button 
            onClick={prevReview}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition duration-300"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button 
            onClick={nextReview}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition duration-300"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  )
}