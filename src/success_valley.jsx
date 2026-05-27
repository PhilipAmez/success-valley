import { useState, useEffect } from 'react'
import NavItem from './components/NavItem'
import FeatureCard from './components/FeatureCard'
import ProductCard from './components/ProductCard'
import BlogCard from './components/BlogCard'
import SectionHeader from './components/SectionHeader'
import client, { urlFor } from './lib/sanityClient'
import { productsQuery, blogPostsQuery } from './lib/queries'
import MapComponent from './components/MapComponent'
import fishCatfishImage from './img/fish-fresh-caught-catfish.jpg'
import logoImage from './img/logo.jpg'
import pigfarmImage1 from './img/pig-farm.jpg'
import poultryImage1 from './img/poultryfarm.jpg'
import fish24 from './img/fish24.jpg'
import meatfish1 from './img/meatfish1.webp'

const navLinks = [
  { label: 'Home', target: 'hero' },
  { label: 'About', target: 'about' },
  { label: 'Products', target: 'products' },
  { label: 'Blog', target: 'blog' },
  { label: 'Contact', target: 'contact' }
]

const features = [
  {
    title: 'Locally Produced Protein',
    description: 'Fresh fish and meat sourced nearby for fast delivery.'
  },
  {
    title: 'Reliable Delivery',
    description: 'Consistent schedules and safe handling for every order.'
  },
  {
    title: 'Trusted By Restaurants',
    description: 'Built for food service businesses that value quality and consistency.'
  },
  {
    title: 'Easy WhatsApp Ordering',
    description: 'Place orders quickly using direct WhatsApp communication.'
  }
]

const products = [
  {
    name: 'Fresh Fish',
    description: 'Wild-caught and carefully chilled for premium freshness.',
    image: fishCatfishImage
  },
  {
    name: 'Processed Meat',
    description: 'Hygienically prepared cuts and packaged for food service.',
    image:
          pigfarmImage1 
  },
  {
    name: 'Fresh Poultry',
    description: 'Premium poultry cuts prepared and packed for food service.',
    image: poultryImage1
  }
]

const blogPosts = [
  {
    title: 'How We Maintain Freshness in Our Products',
    image:
          meatfish1
  },
  {
    title: 'Benefits of Locally Produced Protein',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Supplying Restaurants With Quality Meat & Fish',
    image:
      'https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=1200&q=80'
  }
]

export default function SuccessValleyFarmsPreview() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [orderSummary, setOrderSummary] = useState(null)
  const [orderNote, setOrderNote] = useState('')
  const [productsData, setProductsData] = useState(products)
  const [blogData, setBlogData] = useState(blogPosts)

  useEffect(() => {
    if (!import.meta.env.VITE_SANITY_PROJECT_ID) return

    Promise.all([
      client.fetch(productsQuery),
      client.fetch(blogPostsQuery)
    ])
      .then(([productsResult, blogPostsResult]) => {
        if (Array.isArray(productsResult) && productsResult.length > 0) {
          setProductsData(
            productsResult.map((item) => ({
              ...item,
              image: item.image ? urlFor(item.image).width(800).url() : ''
            }))
          )
        }

        if (Array.isArray(blogPostsResult) && blogPostsResult.length > 0) {
          setBlogData(
            blogPostsResult.map((item) => ({
              ...item,
              image: item.mainImage ? urlFor(item.mainImage).width(800).url() : ''
            }))
          )
        }
      })
      .catch((error) => {
        console.warn('Sanity fetch failed', error)
      })
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileMenuOpen(false)
  }

  const handleWhatsApp = (message = 'Hello Success Valley Farms, I would like to place an order.') => {
    const phone = '0556078858'
    const encoded = encodeURIComponent(message)
    window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank')
  }

  const handleCall = () => {
    window.location.href = 'tel:+1234567890'
  }

  const handleOrder = (itemName, quantity = 1) => {
    setOrderSummary({ itemName, quantity })
    setOrderNote('')
  }

  const confirmOrder = () => {
    if (!orderSummary) return

    const noteText = orderNote.trim()
    const orderMessage = noteText
      ? `Hello, I would like to order ${orderSummary.quantity} x ${orderSummary.itemName} from Success Valley Farms. Note: ${noteText}`
      : `Hello, I would like to order ${orderSummary.quantity} x ${orderSummary.itemName} from Success Valley Farms.`

    handleWhatsApp(orderMessage)
    setOrderSummary(null)
    setOrderNote('')
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="Success Valley Farms logo" className="h-12 w-12 rounded-full object-cover border border-gray-200" />
            <div>
              <h1 className="text-2xl font-bold text-rose-900">SUCCESS VALLEY FARMS</h1>
              <p className="text-xs text-gray-500 uppercase tracking-[0.3em]">Fresh • Trusted • Local</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavItem key={link.target} {...link} onClick={scrollToSection} />
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              onClick={() => handleWhatsApp()}
              className="bg-rose-700 hover:bg-rose-800 text-white px-5 py-3 rounded-2xl shadow-lg transition"
            >
              Order on WhatsApp
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="md:hidden rounded-full border border-gray-200 p-3 text-gray-700 hover:bg-gray-100"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Toggle navigation</span>
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-gray-200 bg-white/95 px-6 py-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  type="button"
                  onClick={() => scrollToSection(link.target)}
                  className="text-left text-gray-700 hover:text-rose-700 font-medium py-2"
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => handleWhatsApp()}
                className="mt-3 rounded-2xl bg-rose-700 px-5 py-3 text-white font-semibold shadow-lg hover:bg-rose-800"
              >
                Order on WhatsApp
              </button>
            </div>
          </div>
        )}
      </header>

      <main>
        <section
          id="hero"
          className="relative h-[75vh] sm:h-[80vh] flex items-center"
          style={{
            backgroundImage: `url(${fishCatfishImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
            <img src={logoImage} alt="" className="h-48 w-48 object-contain" />
          </div>
          <div className="relative z-10 mx-auto max-w-3xl px-6 text-white">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Fresh Meat & Fish Delivered With Quality
            </h2>
            <p className="text-base sm:text-xl text-gray-100 mb-8 leading-8">
              Success Valley Farms supplies premium meat and fish products to restaurants and food service institutions.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => scrollToSection('products')}
                className="bg-rose-700 hover:bg-rose-800 px-6 py-4 rounded-2xl text-lg font-semibold shadow-xl transition"
              >
                View Products
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="bg-white text-gray-900 px-6 py-4 rounded-2xl text-lg font-semibold shadow-xl hover:bg-gray-100 transition"
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>

        <section className="grid gap-6 px-6 py-14 md:grid-cols-4 md:px-8 bg-slate-950 text-white">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </section>

        <section id="about" className="max-w-7xl mx-auto grid gap-10 px-6 py-20 md:grid-cols-2 md:px-8">
          <img
            src={fish24}
            alt="Fish display"
            className="rounded-3xl shadow-2xl h-[360px] w-full object-cover"
          />
          <div className="flex flex-col justify-center">
            <p className="uppercase tracking-widest text-rose-700 font-semibold mb-3">
              About Success Valley Farms
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-950">
              Growing Quality, Supplying Trust
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-8 mb-8">
              We are committed to producing high-quality meat and fish products that meet local demand while maintaining freshness, hygiene, and reliability.
            </p>
            <button
              type="button"
              onClick={() => scrollToSection('blog')}
              className="bg-rose-700 hover:bg-rose-800 text-white px-6 py-4 rounded-2xl shadow-lg transition"
            >
              Learn More
            </button>
          </div>
        </section>

        <section id="products" className="bg-gray-50 py-20 px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <SectionHeader eyebrow="Our Products" title="Fresh Meat & Fish Products" />
            <div className="grid gap-8 md:grid-cols-3">
              {productsData.map((product) => (
                <ProductCard key={product.name} product={product} onOrder={handleOrder} />
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="py-20 px-6 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <SectionHeader eyebrow="Latest Updates" title="From Our Farm Blog" />
            <div className="grid gap-8 md:grid-cols-3">
              {blogData.map((post) => (
                <BlogCard key={post.title} post={post} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-6 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Order?</h2>
              <p className="text-base md:text-lg text-gray-200 leading-8 mb-8">
                Contact Success Valley Farms today for bulk orders of meat and fish products, restaurant supply partnerships, and reliable deliveries.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl">
                  <p className="text-xs uppercase tracking-[0.3em] text-rose-300 mb-3">Our location</p>
                  <p className="text-lg font-semibold">West Legon, Accra, Ghana</p>
                  <p className="mt-3 text-sm text-gray-300 leading-6">
                    Pop-up farm sales, restaurant pickup, and reliable local delivery available.
                  </p>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl">
                  <p className="text-xs uppercase tracking-[0.3em] text-rose-300 mb-3">Get in touch</p>
                  <p className="text-lg font-semibold">Phone</p>
                  <p className="mt-2 text-sm text-gray-300">+233 556 078 858</p>
                  <p className="mt-4 text-lg font-semibold">WhatsApp</p>
                  <p className="mt-2 text-sm text-gray-300">Tap the button to start a conversation.</p>
                </div>
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-start">
                <button
                  type="button"
                  onClick={handleCall}
                  className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-gray-100 transition"
                >
                  Call Now
                </button>
                <button
                  type="button"
                  onClick={() => handleWhatsApp()}
                  className="bg-rose-700 px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-rose-800 transition"
                >
                  WhatsApp Us
                </button>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
              <MapComponent />
              <div className="bg-slate-950 px-4 py-3 text-xs text-gray-400">
                Map data © OpenStreetMap contributors
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-gray-400 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3 text-white">
            <img src={logoImage} alt="Success Valley Farms logo" className="h-10 w-10 rounded-full border border-gray-700 object-cover" />
            <span className="text-sm font-semibold">Success Valley Farms</span>
          </div>
          <p className="text-sm">© 2026 Success Valley Farms. All Rights Reserved.</p>
        </div>
      </footer>

      {orderSummary && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4 py-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-5 shadow-2xl sm:p-6">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-rose-700 font-semibold">Order summary</p>
            <h2 className="mt-3 text-xl sm:text-2xl font-bold text-slate-950">Confirm your order</h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Review your order and add any extra details before sending to WhatsApp.
            </p>
            <div className="mt-4 rounded-2xl bg-gray-50 p-4 text-gray-800">
              <p className="text-lg font-semibold">{orderSummary.itemName}</p>
              <p className="mt-2 text-sm text-gray-600">Quantity: {orderSummary.quantity}</p>
            </div>
            <label className="mt-4 block text-sm font-semibold text-slate-800">
              Order note
              <textarea
                value={orderNote}
                onChange={(event) => setOrderNote(event.target.value)}
                placeholder="Add delivery time, size, packaging, or any other instructions"
                rows={4}
                className="mt-2 w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-rose-500 focus:outline-none"
              />
            </label>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setOrderSummary(null)}
                className="w-full rounded-2xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 sm:w-auto"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmOrder}
                className="w-full rounded-2xl bg-rose-700 px-5 py-3 text-sm font-semibold text-white hover:bg-rose-800 sm:w-auto"
              >
                Continue to WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
