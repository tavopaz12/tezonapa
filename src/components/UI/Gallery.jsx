import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Gallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <div className="grid gap-4 mt-8">
      <div>
        <Image
          width={1000}
          height={1000}
          className="h-[400px] max-md:h-[200px] w-full object-cover rounded-lg"
          src={selectedImage}
          alt=""
        />
      </div>

      <div className="overflow-x-auto">
        <div className="grid grid-cols-5 max-md:grid-cols-3 grid-rows-1 gap-4">
          {images.map((img, index) => (
            <div key={index}>
              <Image
                onClick={() => setSelectedImage(img)}
                width={1000}
                height={1000}
                className="h-[200px] max-md:h-[100px] max-w-full cursor-pointer object-cover rounded-lg"
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
