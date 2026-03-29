import React, { useState, useEffect } from 'react'

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Sample images - replace with your band images
  const images = [
    {
      id: 1,
      title: 'Steve performing live',
      src: './steve.png',
      alt: 'Tin Gods'
    },
    {
      id: 2,
      title: 'At the ferret',
      src: './ferretBand.jpg',
      alt: 'Tin Gods'
    },

        {
      id: 3,
      title: 'Tin Gods',
      src: './f1.jpg',
      alt: 'Tin Gods'
    },
            {
      id: 4,
      title: 'Tin Gods',
      src: './f2.jpg',
      alt: 'Tin Gods'
    },
            {
      id: 5,
      title: 'Tin Gods',
      src: './f3.jpg',
      alt: 'Tin Gods'
    },
            {
      id: 6,
      title: 'Tin Gods',
      src: './f4.jpg',
      alt: 'Tin Gods'
    },
            {
      id: 7,
      title: 'Tin Gods',
      src: './f5.jpg',
      alt: 'Tin Gods'
    },
            {
      id: 8,
      title: 'Tin Gods',
      src: './f6.jpg',
      alt: 'Tin Gods'
    },
            {
      id: 9,
      title: 'Tin Gods',
      src: './f7.jpg',
      alt: 'Tin Gods'
    },
            {
      id: 10,
      title: 'Tin Gods',
      src: './f8.jpg',
      alt: 'Tin Gods'
    },
            {
      id: 11,
      title: 'Tin Gods',
      src: './f9.jpg',
      alt: 'Tin Gods'
    },
            {
      id: 12,
      title: 'Tin Gods',
      src: './f10.jpg',
      alt: 'Tin Gods'
    },
            {
      id: 13,
      title: 'Tin Gods',
      src: './f11.jpg',
      alt: 'Tin Gods'
    },
            {
      id: 14,
      title: 'Tin Gods',
      src: './f12.jpg',
      alt: 'Tin Gods'
    },
      

  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [images.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-slate-900 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
          Gallery
        </h2>
        
        <div className="relative bg-black rounded-lg overflow-hidden">
          {/* Carousel Container */}
          <div className="relative h-80 sm:h-96 md:h-[500px]">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <p className="text-white text-lg font-semibold">{image.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={previousSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black hover:bg-black-700 text-white p-2 rounded-full transition z-10"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black hover:bg-black-700 text-white p-2 rounded-full transition z-10"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex gap-2 justify-center mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide ? 'bg-black' : 'bg-slate-500 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
