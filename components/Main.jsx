import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import slugify from 'slugify'

export default function Main(props) {
  const router = useRouter()
  const [cssClass, setCssClass] = useState('-generic')

  useEffect(() => {
    if (!router.isReady) return

    // If there is a slug in the path use it, if there is a '/' it's home, else slugify whatever you get
    router.query?.slug?.length ? setCssClass(router.query.slug) : router.asPath === '/' ? setCssClass('home') : setCssClass(slugify(router.asPath))
  }, [router.isReady])

  return <main className={`page-${cssClass}${props.expendTo ? ' ' + props.expendTo : ''}`}>{props.children}</main>
}
