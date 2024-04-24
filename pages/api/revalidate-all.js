import { getWorksSlug } from '../../lib/api'

export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  const slugs = await getWorksSlug()

  const routes = ['/about', '/skills', '/works']

  for (const slug of slugs.data) {
    routes.push(`/works/${slug.slug}`)
  }

  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"

    await Promise.all(
      routes.map(async (route) => {
        try {
          await res.revalidate(route)
        } catch (e) {
          console.log(e)
        }
      })
    )

    return res.json({ revalidated: true, list: routes })
  } catch (err) {
    console.error(err)
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating')
  }
}
