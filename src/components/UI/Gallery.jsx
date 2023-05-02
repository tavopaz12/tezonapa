import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Gallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <div class="grid gap-4 mt-8">
      <div>
        <Image
          width={1000}
          height={1000}
          class="h-[400px] max-md:h-[200px] w-full object-cover rounded-lg"
          src={selectedImage}
          alt=""
        />
      </div>

      <div class="overflow-x-auto">
        <div class="grid grid-cols-5 max-md:grid-cols-3 grid-rows-1 gap-4">
          {images.map((img) => (
            <div key={img}>
              <Image
                onClick={() => setSelectedImage(img)}
                width={1000}
                height={1000}
                class="h-[200px] max-md:h-[100px] max-w-full cursor-pointer object-cover rounded-lg"
                src={img}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
