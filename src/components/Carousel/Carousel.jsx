import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

import Card from './Card'

const delay = 2500

export default function Carousel({ images }) {
  const [index, setIndex] = useState(0)
  const timeOutRef = useRef(null)

  const resetTimeOut = () => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current)
    }
  }

  useEffect(() => {
    resetTimeOut()
    timeOutRef.current = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, delay)

    return () => {
      resetTimeOut()
    }
  })

  return (
    <div className="overflow-hidden md:max-w-[auto] max-md:w-[100%] mt-8 max-md:my-2">
      <div
        style={{
          transition: 'ease 1000ms',
          transform: `translate3d(${-index * (images.length + 8)}%, 0, 0)`,
        }}
        className="whitespace-nowrap max-md:transform-none max-md:inline-flex max-md:gap-[0rem]">
        {images.map((img) => (
          <Card
            link={img.link}
            key={img.title}
            imgSrc={img.src}
            title={img.title}
          />
        ))}
      </div>
    </div>
  )
}
