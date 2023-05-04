import {
  faArrowLeftRotate,
  faArrowRightRotate,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Gallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setSelectedImage(images[currentIndex])
  }, [currentIndex, images])

  return (
    <div className="grid gap-4 mt-8">
      <div className="relative">
        <Image
          width={1000}
          height={1000}
          className="h-[400px] max-md:h-[200px] w-full object-cover rounded-lg"
          src={selectedImage}
          alt=""
        />

        <div className="flex w-full text-white absolute top-[45%] justify-between">
          <button
            className={`cursor-pointer ${
              currentIndex === 0 ? 'text-[rgba(0,0,0,0.5)]' : ''
            } rounded-[50%] bg-[rgba(0,0,0,0.6)] p-2 max-md:bg-transparent ml-4 max-md:ml-2`}
            onClick={() => setCurrentIndex(currentIndex - 1)}
            disabled={currentIndex === 0}>
            <FontAwesomeIcon
              className={`${
                currentIndex === 0 ? 'text-gray-500' : 'text-white'
              } h-6 w-6 max-md:h-5 max-md:w-5 font-extrabold max-md:bg-black rounded-[50%]`}
              icon={faArrowLeftRotate}
            />
          </button>
          <button
            className={`cursor-pointer ${
              currentIndex === 0 ? 'text-[rgba(0,0,0,0.5)]' : ''
            } rounded-[50%] bg-[rgba(0,0,0,0.6)] p-2 max-md:bg-transparent mr-4 max-md:mr-2`}
            onClick={() => setCurrentIndex(currentIndex + 1)}
            disabled={currentIndex === images.length - 1}>
            <FontAwesomeIcon
              className={`${
                currentIndex === images.length - 1
                  ? 'text-gray-500'
                  : 'text-white'
              } h-6 w-6 max-md:h-5 max-md:w-5 font-extrabold max-md:bg-black rounded-[50%]`}
              icon={faArrowRightRotate}
            />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="grid grid-cols-5 max-md:grid-cols-3 grid-rows-1 gap-4">
          {images.map((img, index) => (
            <div key={index}>
              <Image
                onClick={() => setCurrentIndex(index)}
                width={1000}
                height={1000}
                className={`h-[200px] ${
                  index === currentIndex
                    ? 'brightness-50 pointer-events-none'
                    : ''
                } max-md:h-[100px] max-w-full cursor-pointer object-cover rounded-lg`}
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
