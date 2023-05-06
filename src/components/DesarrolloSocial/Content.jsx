import Image from 'next/image'
import Link from 'next/link'

export default function Content({ content }) {
  return (
    <section className="px-10 mb-4 flex gap-4 flex-wrap justify-around">
      {content?.map((content, index) => (
        <div
          key={index}
          class="w-full h-min max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <Image
            src={content.img}
            alt="rotoplas"
            className="p-4 max-md:px-2 max-md:h-[250px] object-cover"
            loading="lazy"
          />
          <p className="text-left pb-2 px-5 font-bold text-gray-500">
            {content.fecha}
          </p>
          <div class="px-5 pb-5">
            <p class="text-lg first-letter:uppercase lowercase font-semibold tracking-tight text-gray-900">
              {content.title}
            </p>
          </div>
          <div className="flex justify-center items-center pb-2 px-5 text-gray-500">
            {content.link && (
              <Link
                href="/"
                className="bg-blue-700 w-full text-center text-white font-bold rounded-2xl px-5 py-2">
                {content.titleLink}
              </Link>
            )}
          </div>
        </div>
      ))}
    </section>
  )
}
