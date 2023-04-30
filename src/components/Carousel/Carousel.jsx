import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

import Card from './Card'

const delay = 2500

export default function Carousel({images}) {
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
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      )
    }, delay)

    return () => {
      resetTimeOut()
    }
  },)

  return (
    <>
      <div className="overflow-hidden md:max-w-[auto] max-md:w-full mt-8 max-md:my-2">
        <div
        className='whitespace-nowrap max-md:flex max-md:gap-[0.5rem]'
          style={{
            transition: 'ease 1000ms',
            transform: `translate3d(${-index * (images.length + 8)}%, 0, 0)`,
          }}>
          {images.map((img) => (
            <Card link={img.link} key={img.title} imgSrc={img.src} title={img.title} />
          ))}
        </div>
      </div>
    </>
  )
}
