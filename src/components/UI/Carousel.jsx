import {
  faArrowLeftLong,
  faArrowRightLong,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Carousel({ images, autoPlay, showButtons, delay }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(images[0])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (autoPlay || !showButtons) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, images)
      }, delay)
      return () => clearInterval(interval)
    }
  })

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false)
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1
      setSelectedImage(images[nextIndex])
      setSelectedIndex(nextIndex)
    }, 500)
  }

  const selectImage = (index) => {
    if (index !== selectedIndex) {
      setLoaded(false)
      setTimeout(() => {
        setSelectedImage(images[index])
        setSelectedIndex(index)
      }, 500)
    }
  }

  const previous = () => {
    selectNewImage(selectedIndex, images, false)
  }

  const next = () => {
    selectNewImage(selectedIndex, images)
  }

  return (
    <div className={`w-full px-10 max-md:px-4 h-[400px] max-md:h-[180px] relative`}>
      <Image
        width={2000}
        height={2000}
        loading='lazy'
        src={selectedImage.src}
        alt="Gentleman"
        className={`w-full object-cover h-[400px] max-md:h-[180px] opacity-0 duration-[1s] ${
          loaded && 'opacity-[1] translate-x-1 max-md:translate-x-0'
        }`}
        onLoad={() => setLoaded(true)}
      />

      {selectedImage.title && (
        <div
          className={`absolute grid place-content-center opacity-0 p-4 left-[3.2%] max-md:left-[4.5%] w-[94%] max-md:w-[91.2%] h-full text-white top-0 bg-[rgba(0,0,0,0.5)] duration-[1s] ${
            loaded && 'opacity-[1] bottom-[9%]'
          }`}>
          <h2 className="font-extrabold text-4xl max-md:text-lg overflow-hidden text-center">
            {selectedImage.title}
          </h2>
          <div className="w-full flex justify-center">
            <p className="text-lg max-md:text-sm max-md:truncate max-md:w-[15rem] mt-4 max-md:mt-1 font-semibold bg-[rgba(0,0,0,0.3)] p-2 text-center rounded w-2/4">
              {selectedImage.desc}
            </p>
          </div>

          {selectedImage.link && (
            <div className="flex justify-center mt-4">
              <Link
                className="bg-red-400 capitalize max-md:text-sm font-bold rounded-2xl px-6 py-2 max-md:py-1"
                href={selectedImage.link}>
                {selectedImage.titleLink}
              </Link>
            </div>
          )}
        </div>
      )}

      <div className="flex absolute bottom-0 pb-2 w-[94%] justify-center gap-4">
        {images.map((img, index) => (
          <div
            onClick={() => selectImage(index)}
            key={img.src}
            className={`${
              index === selectedIndex ? 'bg-[#4cd384]' : 'bg-gray-500'
            }  px-5 rounded cursor-pointer h-[5px]`}></div>
        ))}
      </div>

      <div className="">
        {showButtons && (
          <>
            <button
              className="text-white absolute top-[50%]  bg-[#2D974B] p-2 m-1 max-md:hidden"
              onClick={previous}>
              <FontAwesomeIcon className="h1-4 w-4" icon={faArrowLeftLong} />
            </button>
            <button
              className="absolute text-white top-[50%] right-8 bg-[#2D974B] p-2 m-1 max-md:hidden"
              onClick={next}>
              <FontAwesomeIcon className="h1-4 w-4" icon={faArrowRightLong} />
            </button>
          </>
        )}
      </div>
    </div>
  )
}
