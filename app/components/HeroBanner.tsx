import Link from 'next/link'

const HeroBanner = () => {
  return (
    <section className="relative bg-cover bg-center overflow-hidden h-96" style={{ backgroundImage: "url('/images/hero-banner.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <div className="text-center px-4 text-white max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Celebrate Every Moment with a Thoughtful Touch
          </h1>
          <p className="mb-6 text-sm md:text-base">
            Find the perfect return gifts for weddings, birthdays, and celebrations. Discover unique selections that add a personal touch to every occasion.
          </p>
          <Link href="/shop">
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded">
              Begin Your Selection
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
