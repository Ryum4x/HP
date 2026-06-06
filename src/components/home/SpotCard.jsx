import { Link } from 'react-router-dom'

function SpotCard({ spot, className = '' }) {
  const content = (
    <>
      <img
        src={spot.image}
        alt={spot.name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.15] group-hover:brightness-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-ink/10 transition duration-500 group-hover:from-ink/90 group-hover:via-ink/30" />

      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-vermillion/10 mix-blend-overlay" />
      </div>

      <div className="relative flex h-full min-h-[220px] flex-col justify-end p-5 sm:p-6">
        <span className="mb-2 w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm transition duration-300 group-hover:scale-105 group-hover:bg-vermillion group-hover:shadow-lg group-hover:shadow-vermillion/40">
          {spot.tag}
        </span>
        <p className="text-xs font-medium tracking-wider text-sakura-300 transition duration-300 group-hover:text-white">
          {spot.region}
        </p>
        <h3 className="mt-1 font-display text-xl font-bold text-white transition duration-300 group-hover:translate-x-1 sm:text-2xl">
          {spot.name}
        </h3>
        <p className="mt-2 translate-y-4 text-sm leading-relaxed text-white/90 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          {spot.description}
        </p>
        {spot.destinationSlug && (
          <p className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-sakura-300 opacity-0 transition duration-500 delay-75 group-hover:opacity-100">
            詳しく見る
            <span
              aria-hidden="true"
              className="inline-block transition duration-300 group-hover:translate-x-1.5"
            >
              →
            </span>
          </p>
        )}
      </div>
    </>
  )

  const classNames = [
    'group relative overflow-hidden rounded-3xl',
    'ring-2 ring-transparent ring-offset-2 ring-offset-cream',
    'transition-all duration-500 ease-[cubic-bezier(0.34,1.35,0.64,1)]',
    'hover:-translate-y-3 hover:scale-[1.02]',
    'hover:shadow-[0_28px_56px_-14px_rgba(15,20,25,0.45)]',
    'hover:ring-vermillion/70',
    spot.destinationSlug ? 'cursor-pointer' : 'cursor-default',
    className,
  ].join(' ')

  if (spot.destinationSlug) {
    return (
      <Link to={`/destinations/${spot.destinationSlug}`} className={classNames}>
        {content}
      </Link>
    )
  }

  return <article className={classNames}>{content}</article>
}

export default SpotCard
