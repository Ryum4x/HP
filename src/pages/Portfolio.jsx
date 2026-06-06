import PageHeader from '../components/PageHeader'
import DestinationCard from '../components/DestinationCard'
import { destinations } from '../data/destinations'

function Portfolio() {
  return (
    <>
      <PageHeader
        eyebrow="目的地"
        title="人気スポットを詳しく知る"
        description="クリックして、各目的地の魅力・見どころ・ベストシーズン・旅のヒントをご覧ください。"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.slug}
              destination={destination}
              large={index === 0}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Portfolio
