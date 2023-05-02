import Image from 'next/image'

import basquet1 from '@/assets/images/Comude/basquet1.jpg'
import basquet2 from '@/assets/images/Comude/basquet2.jpg'
import basquet3 from '@/assets/images/Comude/basquet3.jpg'
import basquet4 from '@/assets/images/Comude/basquet4.jpg'
import basquet5 from '@/assets/images/Comude/basquet5.jpg'
import basquet6 from '@/assets/images/Comude/basquet6.jpg'

export default function Slider() {
  const slides = [
    { id: 1, src: basquet1, alt: '' },
    { id: 2, src: basquet2, alt: '' },
    { id: 3, src: basquet3, alt: '' },
    { id: 4, src: basquet4, alt: '' },
    { id: 5, src: basquet5, alt: '' },
    { id: 6, src: basquet6, alt: '' },
  ]

  return (
    <div className="slider">
      <div className="slide-track">
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <Image src={slide.src} height="100" width="250" alt={slide.alt} />
          </div>
        ))}
      </div>
    </div>
  )
}
