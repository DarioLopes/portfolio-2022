import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import axios from 'axios'

const Header = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [links, setLinks] = useState([])

  useEffect(() => {
    setLoading(true)
    axios.get(`${process.env.API}/items/pages`).then((response) => {
      setLinks(response.data.data)
      setLoading(false)
    })
  }, [])

  return (
    <div className="container-fluid header-container">
      <div className="row">
        <div className="col-12 col-lg-4 offset-lg-4 p-0">
          <header>
            <ul>
              {links.map((link, i) => (
                <motion.li
                  initial={{ y: -15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    ease: 'easeOut',
                    delay: (i + 8) * 0.2,
                    duration: 1,
                  }}
                  key={link.id}
                  className={`menu-item${router.pathname === link.url ? ' active' : ''}`}
                >
                  <Link href={link.url}>
                    <a>
                      <span>{link.name}</span>
                    </a>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </header>
        </div>
      </div>
    </div>
  )
}

export default Header
