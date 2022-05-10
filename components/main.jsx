import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Main(props) {
  const router = useRouter()
  const [cssClass, setCssClass] = useState('-generic')

  useEffect(() => {
    if (!router.isReady) return

    router.pathname === '/'
      ? setCssClass('-home')
      : router?.query?.pid
      ? setCssClass(`-${router.query.pid}`)
      : setCssClass(router.pathname.replace(/\//, '-'))
  }, [router.isReady])

  return <main className={`page${cssClass}${props.expendTo ? ' ' + props.expendTo : ''}`}>{props.children}</main>
}
