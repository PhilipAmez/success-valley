import { motion } from 'framer-motion'

export default function FeatureCard({ title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-lg transition"
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-200 text-sm leading-6">{description}</p>
    </motion.div>
  )
}
