export default function FeatureCard({ title, description }) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-lg">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-200 text-sm leading-6">{description}</p>
    </div>
  )
}
