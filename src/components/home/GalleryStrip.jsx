import { galleryStrip } from '../../data/japanSpots'

function GalleryStrip() {
  const items = [...galleryStrip, ...galleryStrip]

  return (
    <section className="overflow-hidden bg-ink py-6">
      <div className="flex animate-marquee gap-4 whitespace-nowrap">
        {items.map((item, index) => (
          <figure
            key={`${item.name}-${index}`}
            className={[
              'group relative h-44 w-64 shrink-0 cursor-pointer overflow-hidden rounded-2xl',
              'ring-2 ring-transparent transition-all duration-500 ease-[cubic-bezier(0.34,1.35,0.64,1)]',
              'hover:-translate-y-2 hover:scale-105 hover:shadow-[0_20px_40px_-10px_rgba(224,62,47,0.5)]',
              'hover:ring-vermillion/80 hover:ring-offset-2 hover:ring-offset-ink',
              'sm:h-52 sm:w-80',
            ].join(' ')}
          >
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-ink/0 transition duration-300 group-hover:bg-ink/20" />
            <figcaption className="absolute inset-x-0 bottom-0 translate-y-1 bg-gradient-to-t from-ink/90 to-transparent px-4 py-3 text-sm font-semibold text-white transition duration-300 group-hover:translate-y-0 group-hover:py-4">
              {item.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default GalleryStrip
