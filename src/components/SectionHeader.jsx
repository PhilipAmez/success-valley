export default function SectionHeader({ eyebrow, title }) {
  return (
    <div className="text-center mb-14">
      <p className="uppercase tracking-widest text-rose-700 font-semibold">{eyebrow}</p>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mt-3">{title}</h2>
    </div>
  )
}
