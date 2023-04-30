import Image from 'next/image'

export default function Card({ imgSrc, title, link }) {
  return (
    <div className="mr-4 max-md:mr-8 inline-block w-[30%] rounded object-contain">
      <div className="grid place-content-center">
        <a href={link} target="_blank">
          <Image className="h-[200px] object-cover max-md:object-cover max-md:h-[150px] max-md:w-[200px] w-[300px]" src={imgSrc} alt={title} />
          <p className="text-xl mt-2 text-green-800 font-bold truncate max-md:w-[10rem] max-md:text-[1rem] max-md:mt-0">{title}</p>
        </a>
      </div>
    </div>
  )
}
