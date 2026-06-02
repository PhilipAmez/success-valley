import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 't32lmt6n',
  dataset: 'production',
  apiVersion: '2026-05-27',
  useCdn: true,
  perspective: 'published'
})

async function check() {
  try {
    const products = await client.fetch(`*[_type == \"product\"] | order(name asc){_id, name, description, image, publishedAt}`)
    const posts = await client.fetch(`*[_type == \"post\"] | order(publishedAt desc){_id, title, mainImage, publishedAt}`)
    console.log('products:', JSON.stringify(products, null, 2))
    console.log('posts:', JSON.stringify(posts, null, 2))
  } catch (err) {
    console.error(err)
  }
}

check()
