import { Link } from 'react-router-dom'

function DestinationCard({ destination, large = false }) {
  return (
    <Link
      to={`/destinations/${destination.slug}`}
      className={[
        'group hover-lift block overflow-hidden rounded-2xl border border-stone-200 bg-white',
        'hover:border-vermillion/40',
        large ? 'sm:col-span-2' : '',
      ].join(' ')}
    >
      <div className={`overflow-hidden ${large ? 'aspect-[21/9]' : 'aspect-[4/3]'}`}>
        <img
          src={destination.cardImage}
          alt={destination.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-105"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700 transition group-hover:bg-vermillion group-hover:text-white">
            {destination.tag}
          </span>
          <span className="text-xs text-stone-500">{destination.region}</span>
        </div>
        <h3 className="mt-2 font-display text-xl font-bold text-ink transition group-hover:text-vermillion">
          {destination.name}
        </h3>
        <p className="mt-1 text-sm text-stone-600">{destination.subtitle}</p>
        <p className="mt-3 flex items-center gap-1 text-xs font-semibold text-vermillion opacity-0 transition duration-300 group-hover:opacity-100">
          詳しく読む
          <span className="transition group-hover:translate-x-1">→</span>
        </p>
      </div>
    </Link>
  )
}

export default DestinationCard
