export default function NavItem({ label, target, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(target)}
      className="text-sm font-medium text-gray-700 hover:text-rose-700 transition"
    >
      {label}
    </button>
  )
}
