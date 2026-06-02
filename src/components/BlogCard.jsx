export default function BlogCard({ post, onReadMore }) {
  const imageSrc = post.image || 'https://via.placeholder.com/800x600?text=Farm+Blog'
  
  const getPreviewText = () => {
    if (post.excerpt) return post.excerpt
    if (post.body) {
      if (Array.isArray(post.body)) {
        return post.body
          .map((block) => block.children?.map((child) => child.text).join('') || '')
          .join(' ')
          .slice(0, 150) + '...'
      }
      return typeof post.body === 'string' ? post.body.slice(0, 150) + '...' : 'Read more...'
    }
    return 'Learn more about our farming process, product quality, and how we serve businesses with fresh agricultural products.'
  }

  return (
    <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
      <img src={imageSrc} alt={post.title} className="h-60 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4 text-slate-950">{post.title}</h3>
        <p className="text-gray-600 mb-6 leading-7">
          {getPreviewText()}
        </p>
        <button type="button" onClick={onReadMore} className="bg-rose-700 hover:bg-rose-800 text-white px-5 py-3 rounded-2xl font-semibold transition">
          Read More
        </button>
      </div>
    </div>
  )
}
