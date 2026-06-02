import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ProductCard({ product, onOrder }) {
  const [quantity, setQuantity] = useState(1)

  const decreaseQuantity = () => setQuantity((current) => Math.max(1, current - 1))
  const increaseQuantity = () => setQuantity((current) => Math.min(99, current + 1))
  const imageSrc = product.image || 'https://via.placeholder.com/800x600?text=Fresh+Product'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg transition duration-300"
    >
      <img src={imageSrc} alt={product.name} className="h-64 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
        <p className="text-gray-600 mb-6 leading-7">{product.description}</p>
        <div className="mb-5 flex items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-3 text-sm text-slate-700">
          <button
            type="button"
            onClick={decreaseQuantity}
            className="aspect-square h-10 rounded-2xl border border-gray-300 bg-white text-lg font-bold text-slate-900 transition hover:bg-slate-100"
          >
            −
          </button>
          <span className="flex-1 text-center text-lg font-semibold">{quantity}</span>
          <button
            type="button"
            onClick={increaseQuantity}
            className="aspect-square h-10 rounded-2xl border border-gray-300 bg-white text-lg font-bold text-slate-900 transition hover:bg-slate-100"
          >
            +
          </button>
        </div>
        <button
          type="button"
          onClick={() => onOrder(product.name, quantity)}
          className="w-full bg-rose-700 hover:bg-rose-800 text-white py-3 rounded-2xl font-semibold transition"
        >
          Order Now
        </button>
      </div>
    </motion.div>
  )
}
