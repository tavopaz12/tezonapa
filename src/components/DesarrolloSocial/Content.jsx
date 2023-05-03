import Image from 'next/image'
import Link from 'next/link'

export default function Content({ content }) {
  return (
    <section className="px-10 mb-4 flex gap-4 justify-between flex-wrap">
      {content?.map((content, index) => (
        <div
          key={index}
          class="w-full h-min max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <Image
            src={content.img}
            alt="rotoplas"
            className="p-4"
            loading="lazy"
          />
          <p className="text-left pb-2 px-5 font-bold text-gray-500">
            {content.fecha}
          </p>
          <div class="px-5 pb-5">
            <h5 class="text-lg first-letter:uppercase lowercase font-semibold tracking-tight text-gray-900">
              {content.title}
            </h5>
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
