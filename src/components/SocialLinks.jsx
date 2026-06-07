const socials = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/1FDcue7wQs/?mibextid=wwXIfr',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.3V12h2.3V9.7c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .1 2 .1v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.5l-.4 2.9h-2.1v7A10 10 0 0 0 22 12Z" />
      </svg>
    )
  },
  {
    name: 'X',
    url: 'https://x.com/SuccessValleyGh',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 6L18 18" />
        <path d="M6 18L18 6" />
      </svg>
    )
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@successvalleyfarms?_r=1&_t=ZS-96vGCHjvklJ',
    classes: 'bg-[#010101] hover:bg-[#111111] text-white ring-white/20',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M10 3.5v10.75a3.25 3.25 0 1 0 1.5 2.83V4.94h3.75V3.5H10zm.75 13.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5z" />
      </svg>
    )
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/SuccessValleyFarms',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10Zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm4.5-.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/success-valley-farms',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5A2.5 2.5 0 1 0 4.97 8a2.5 2.5 0 0 0 .01-4.5ZM3 9.75h3.96V21H3V9.75Zm7.5 0H15v1.52c.55-.99 1.77-1.74 3.18-1.74 3.4 0 4.04 2.24 4.04 5.16V21h-3.96v-5.4c0-1.29-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.84V21H10.5V9.75Z" />
      </svg>
    )
  }
]

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition duration-200 hover:bg-white hover:text-slate-900 shadow-sm ring-1 ring-white/10 hover:ring-rose-500 ${social.classes || ''}`}
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}
