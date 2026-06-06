import { Link } from 'react-router-dom'
import HeroSection from '../components/home/HeroSection'
import SpotCard from '../components/home/SpotCard'
import GalleryStrip from '../components/home/GalleryStrip'
import DestinationCard from '../components/DestinationCard'
import { experiences, featuredSpots } from '../data/japanSpots'
import { destinations } from '../data/destinations'

function Home() {
  return (
    <>
      <HeroSection />
      <GalleryStrip />

      <section className="border-b border-stone-200 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-vermillion">ガイド付き</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
                人気の目的地を詳しく
              </h2>
              <p className="mt-2 max-w-xl text-stone-600">
                富士山、東京、大阪… クリックして魅力と旅のヒントを読む
              </p>
            </div>
            <Link
              to="/portfolio"
              className="btn-ghost shrink-0 rounded-full border border-stone-300 px-5 py-2.5 text-sm font-semibold text-ink hover:bg-cream"
            >
              すべて見る →
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((d) => (
              <DestinationCard key={d.slug} destination={d} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-vermillion">必見スポット</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              忘れられない日本の名所
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-600">
              北海道の雪原から沖縄の海辺まで、21の厳選スポット。リンク付きカードは詳細ガイドへ。
            </p>
          </div>

          <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {featuredSpots.map((spot) => (
              <SpotCard key={spot.id} spot={spot} className={spot.span} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src={featuredSpots[3].image}
          alt="京都・嵐山の竹林"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-sakura-300">旅の体験</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                観光以上の、
                <br className="hidden sm:block" />
                文化との出会い
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/75">
                名所だけでなく、地元の儀式や季節の祭り、
                ガイドブックには載らない静かな時間も、旅の一部に。
              </p>
              <Link
                to="/services"
                className="btn-ghost mt-8 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-cream"
              >
                旅のスタイルを見る
              </Link>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {experiences.map((item) => (
                <li
                  key={item.title}
                  className="hover-lift group overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md hover:border-white/30 hover:bg-white/20"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="group relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl shadow-ink/10 transition duration-500 group-hover:shadow-[0_32px_64px_-16px_rgba(15,20,25,0.3)]">
                <img
                  src={featuredSpots[4].image}
                  alt="東京・目黒川の桜"
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden overflow-hidden rounded-2xl border-4 border-white shadow-xl transition duration-500 group-hover:-translate-y-2 group-hover:scale-105 group-hover:shadow-2xl sm:block sm:w-48">
                <img
                  src={featuredSpots[1].image}
                  alt="京都・伏見稲荷の千本鳥居"
                  className="aspect-square w-full object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-vermillion">四季の魅力</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
                春の桜、夏の祭り、
                <br className="hidden sm:block" />
                秋の紅葉、冬の雪景色
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-stone-600">
                日本は季節ごとに表情を変えます。
                花見、日光の紅葉、ニセコのパウダースノーなど、
                訪れる時期に合わせた旅をご提案します。
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  '3〜4月：桜の開花予報と川沿いの花見',
                  '7〜8月：夏祭り・花火と高原の避暑',
                  '10〜11月：紅葉の寺社ルート',
                  '12〜2月：温泉街と北の雪国',
                ].map((item) => (
                  <li
                    key={item}
                    className="group flex items-start gap-3 text-stone-700 transition duration-300 hover:translate-x-2 hover:text-ink"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 scale-100 rounded-full bg-vermillion transition duration-300 group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(224,62,47,0.6)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <img
          src={featuredSpots[5].image}
          alt="厳島神社の海上大鳥居"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            あなたの日本旅は、ここから始まる
          </h2>
          <p className="mt-4 text-lg text-white/75">
            日程、興味、旅のペースをお聞かせください。
            定番の名所と、静かな寄り道をバランスよく組み合わせた
            旅程をご提案します。
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center rounded-full bg-vermillion px-8 py-3.5 text-sm font-semibold text-white hover:bg-vermillion-dark"
            >
              旅の相談を始める
            </Link>
            <Link
              to="/about"
              className="btn-ghost inline-flex items-center rounded-full border border-white/25 px-8 py-3.5 text-sm font-semibold text-white hover:border-white/50 hover:bg-white/15"
            >
              私たちについて
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
