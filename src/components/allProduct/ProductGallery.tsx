"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProductGalleryProps {
  images: string[]
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = React.useState(0)

  return (
    <div className="flex flex-col gap-4">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={images[selectedImage] || "/placeholder.svg"}
          alt="Product image"
          width={600}
          height={600}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "relative aspect-square w-20 overflow-hidden rounded-lg bg-gray-100",
              selectedImage === index && "ring-2 ring-black",
            )}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt="Product thumbnail"
              fill
              className="object-cover object-center"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

