import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageGalleryProps {
  images: { src: string; alt: string }[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [current, setCurrent] = useState(0)

  if (images.length === 0) return null

  return (
    <div className="relative overflow-hidden rounded-xl bg-muted">
      <img
        src={images[current].src}
        alt={images[current].alt}
        className="aspect-[16/9] h-full w-full object-cover lg:aspect-auto lg:h-full"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={() => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1))}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white transition-colors hover:bg-black/60"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1))}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white transition-colors hover:bg-black/60"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === current ? 'w-4 bg-white' : 'w-1.5 bg-white/60'
                }`}
              />
            ))}
          </div>

          <span className="absolute right-3 top-3 rounded-full bg-black/50 px-2 py-0.5 text-xs text-white">
            {current + 1}/{images.length}
          </span>
        </>
      )}
    </div>
  )
}
