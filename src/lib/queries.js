export const productsQuery = `*[_type == "product"] | order(name asc) {
  _id,
  name,
  description,
  image,
  publishedAt
}`

export const blogPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  mainImage,
  publishedAt,
  excerpt,
  body
}`
