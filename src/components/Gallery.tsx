"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Gallery image 1" },
  { id: 2, src: "https://images.unsplash.com/photo-1595437034774-4df383d9b7cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Gallery image 2" },
  { id: 3, src: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D", alt: "Gallery image 3" },
  { id: 4, src: "https://images.unsplash.com/photo-1601740982034-56bc80e986ee?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Gallery image 4" },
  { id: 5, src: "https://plus.unsplash.com/premium_photo-1687886026544-a07433c0ee2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJha2VyeXxlbnwwfHwwfHx8MA%3D%3D", alt: "Gallery image 5" },
  { id: 6, src: "https://plus.unsplash.com/premium_photo-1663050741659-6def151d907f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJha2VyeXxlbnwwfHwwfHx8MA%3D%3D", alt: "Gallery image 6" },
]

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const showPrevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === null ? null : (prev - 1 + images.length) % images.length
    )
  }

  const showNextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === null ? null : (prev + 1) % images.length
    )
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return

      switch (e.key) {
        case "ArrowLeft":
          showPrevImage()
          break
        case "ArrowRight":
          showNextImage()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImageIndex])

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index)
  }

  const handleDialogClose = () => {
    setSelectedImageIndex(null)
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={image.id} className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-all hover:scale-105 ease-in-out duration-500 cursor-pointer"
              onClick={() => handleImageClick(index)}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        ))}
      </div>
      <Dialog open={selectedImageIndex !== null} onOpenChange={handleDialogClose}>
        <DialogContent className="max-w-3xl w-full p-1">
          <DialogTitle>
            <VisuallyHidden>Image dialog</VisuallyHidden>
          </DialogTitle>
          {selectedImageIndex !== null && (
            <div className="flex flex-col items-center">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={images[selectedImageIndex].src || "/placeholder.svg"}
                  alt={images[selectedImageIndex].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                />
                
                {/* Navigation Arrows */}
                <button 
                  onClick={showPrevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={showNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Navigation Dots */}
              <div className="flex items-center justify-center gap-2 mt-4 mb-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === selectedImageIndex 
                        ? 'bg-blue-500 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}