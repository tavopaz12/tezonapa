import Image from 'next/image'

export default function Card({ imgSrc, title, link }) {
  return (
    <div className="mr-4 inline-block w-[30%] rounded object-contain">
      <div className="grid place-content-center">
        <a href={link} target="_blank">
          <Image className="h-[200px] object-cover max-md:h-[50px] max-md:w-[150px] w-[300px]" src={imgSrc} alt={title} />
          <p className="text-xl mt-2 text-green-800 font-bold overflow-hidden max-md:text-[0.5rem] max-md:mt-0">{title}</p>
        </a>
      </div>
    </div>
  )
}
