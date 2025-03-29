import Image from 'next/image'
import Link from 'next/link'

const ProductCard = ({product}) => {
  return (
    <div className="bg-white shadow-md overflow-hidden hover:shadow-lg transition">
      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <Link href={`/product/${product.id}`}>
          <button className="text-pink-500 font-semibold hover:underline">
            Get Your Quote
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
