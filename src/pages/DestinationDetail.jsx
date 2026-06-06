import { Link, useParams } from 'react-router-dom'
import { getDestination, destinations } from '../data/destinations'

function DestinationDetail() {
  const { slug } = useParams()
  const destination = getDestination(slug)

  if (!destination) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-32 text-center sm:px-6">
        <h1 className="font-display text-3xl font-bold text-ink">目的地が見つかりません</h1>
        <p className="mt-4 text-stone-600">お探しのページは存在しないか、移動した可能性があります。</p>
        <Link
          to="/portfolio"
          className="btn-primary mt-8 inline-flex rounded-full bg-vermillion px-6 py-3 text-sm font-semibold text-white"
        >
          目的地一覧へ
        </Link>
      </section>
    )
  }

  const others = destinations.filter((d) => d.slug !== slug).slice(0, 4)

  return (
    <>
      <section className="relative min-h-[55vh] overflow-hidden sm:min-h-[65vh]">
        <img
          src={destination.heroImage}
          alt={destination.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <div className="relative mx-auto flex min-h-[55vh] max-w-4xl flex-col justify-end px-4 pb-12 pt-28 sm:min-h-[65vh] sm:px-6 sm:pb-16 lg:px-8">
          <Link
            to="/portfolio"
            className="mb-6 inline-flex w-fit items-center gap-1 text-sm text-white/70 transition hover:text-white"
          >
            ← 目的地一覧
          </Link>
          <span className="w-fit rounded-full bg-vermillion/90 px-3 py-1 text-xs font-semibold text-white">
            {destination.tag}
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            {destination.name}
          </h1>
          <p className="mt-3 text-lg text-white/85 sm:text-xl">{destination.subtitle}</p>
          <p className="mt-2 text-sm text-sakura-300">{destination.region}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">概要</h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-700">{destination.intro}</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {destination.galleryImages.map((src, index) => (
              <div
                key={src}
                className={`overflow-hidden rounded-2xl ${index === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'}`}
              >
                <img
                  src={src}
                  alt={`${destination.name} ${index + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">行くべき理由</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <ul className="space-y-4">
              {destination.whyVisit.map((reason) => (
                <li
                  key={reason}
                  className="group flex items-start gap-4 rounded-2xl border border-stone-200 bg-white p-5 transition duration-300 hover:border-vermillion/30 hover:shadow-md"
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-vermillion text-sm font-bold text-white transition duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <p className="leading-relaxed text-stone-700">{reason}</p>
                </li>
              ))}
            </ul>
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src={destination.cardImage}
                alt={`${destination.name}の風景`}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover lg:aspect-auto lg:h-full lg:min-h-[420px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">見どころ</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {destination.highlights.map((spot) => (
            <article
              key={spot.title}
              className="group hover-lift overflow-hidden rounded-2xl border border-stone-200 bg-white"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={spot.image}
                  alt={spot.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-ink">{spot.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{spot.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-stone-200">
        <img
          src={destination.seasonImage}
          alt={`${destination.name}のベストシーズン`}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            ベストシーズン
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/90">{destination.bestTime}</p>

          <h2 className="mt-12 font-display text-2xl font-bold text-white sm:text-3xl">
            旅のヒント
          </h2>
          <ul className="mt-6 space-y-3">
            {destination.tips.map((tip) => (
              <li key={tip} className="flex items-start gap-3 text-white/85">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sakura-300" />
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink px-4 py-16 sm:px-6 lg:px-8">
        <img
          src={destination.heroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          loading="lazy"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            {destination.name}を含む旅を計画する
          </h2>
          <p className="mt-4 text-white/70">
            日程やご希望をお聞かせください。オーダーメイドの旅程をご提案します。
          </p>
          <Link
            to="/contact"
            className="btn-primary mt-8 inline-flex rounded-full bg-vermillion px-8 py-3.5 text-sm font-semibold text-white hover:bg-vermillion-dark"
          >
            無料相談する
          </Link>
        </div>
      </section>

      {others.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-ink">他の目的地</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((d) => (
              <Link
                key={d.slug}
                to={`/destinations/${d.slug}`}
                className="group hover-lift overflow-hidden rounded-2xl border border-stone-200 bg-white"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={d.cardImage}
                    alt={d.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-medium text-vermillion">{d.tag}</p>
                  <h3 className="mt-1 font-semibold text-ink group-hover:text-vermillion">
                    {d.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  )
}

export default DestinationDetail
