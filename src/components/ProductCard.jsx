export default function ProductCard({ product, onOrder }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
      <img src={product.image} alt={product.name} className="h-64 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
        <p className="text-gray-600 mb-6 leading-7">{product.description}</p>
        <button
          type="button"
          onClick={() => onOrder(product.name)}
          className="w-full bg-rose-700 hover:bg-rose-800 text-white py-3 rounded-2xl font-semibold transition"
        >
          Order Now
        </button>
      </div>
    </div>
  )
}
