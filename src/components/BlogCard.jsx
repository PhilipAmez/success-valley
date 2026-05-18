export default function BlogCard({ post }) {
  return (
    <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
      <img src={post.image} alt={post.title} className="h-60 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4 text-slate-950">{post.title}</h3>
        <p className="text-gray-600 mb-6 leading-7">
          Learn more about our farming process, product quality, and how we serve businesses with fresh agricultural products.
        </p>
        <button className="bg-rose-700 hover:bg-rose-800 text-white px-5 py-3 rounded-2xl font-semibold transition">
          Read More
        </button>
      </div>
    </div>
  )
}
