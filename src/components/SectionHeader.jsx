import { motion } from 'framer-motion'

export default function SectionHeader({ eyebrow, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-14"
    >
      <p className="uppercase tracking-widest text-rose-700 font-semibold">{eyebrow}</p>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mt-3">{title}</h2>
    </motion.div>
  )
}
