import HeroBanner from './components/HeroBanner';
import ProductCard from './components/ProductCard';
import NavBar from './components/NavBar';
import FooterBar from './components/FooterBar';

const products = [
  {
    id: 1,
    title: 'Serenity Spa',
    description: 'Soothing sets to pamper and relax.',
    image: '/images/Clips.jpeg'
  },
  {
    id: 2,
    title: 'Gourmet Delights',
    description: 'Exquisite edible treats for every palate.',
    image: '/images/Clips2.jpeg'
  },
  {
    id: 3,
    title: 'Tech Treasures',
    description: 'Innovative gadgets to delight tech enthusiasts.',
    image: '/images/Clips3.jpeg'
  },
  {
    id: 4,
    title: 'Artisan Crafts',
    description: 'Unique handmade gifts from local artisans.',
    image: '/images/pencilBag.jpeg'
  }
]

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <HeroBanner />
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-center mb-6">Featured Collections</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <FooterBar />
    </div>
  )
}
