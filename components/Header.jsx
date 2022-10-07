import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import axios from 'axios'
import _ from 'lodash'

const Header = () => {
  const controls = useAnimation()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [links, setLinks] = useState([])
  const [email, setEmail] = useState([])
  const [scrollY, setScrollY] = useState(0)
  const triggerScrollMenu = 400
  const params = (i) => ({
    opacity: [0, 1],
    y: [-15, 0],
    transition: {
      ease: 'easeOut',
      delay: (i + 8) * 0.2,
      duration: 1,
    },
  })

  useEffect(() => {
    // Get & animate
    axios.get(`${process.env.API}/items/pages`).then((response) => {
      setLinks(response.data.data)
      setLoading(false)
    })
    // Get & animate
    axios.get(`${process.env.API}/items/about?fields=email`).then((response) => {
      setEmail(response.data.data.email)
      setLoading(false)
    })

    // Scroll position
    const handleScroll = () => setScrollY(window.scrollY)

    handleScroll()

    window.addEventListener('scroll', _.throttle(handleScroll, 400))

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    controls.start((i) => params(i))
  }, [loading, controls])

  return (
    <div className="container-fluid header-container">
      <div className={`header-container-wrapper${scrollY > triggerScrollMenu ? ' fixed' : ''}`}>
        <div className="row">
          <div className="col-12 col-lg-4 offset-lg-4 p-0">
            <header>
              <Link href={'/'}>
                <motion.a href={'/'} custom={links.length / 2} animate={controls} className={'logo-link'}>
                  <Image src={'/img/logo.svg'} width={60} height={60} priority={true} alt="Dario Lopes | Front End Developer | UI/UX Designer" />
                </motion.a>
              </Link>
              <ul>
                {links.map((link, i) => (
                  <motion.li key={link.id} custom={i} animate={controls} className={`menu-item${router.pathname === link.url ? ' active' : ''}`}>
                    <Link href={link.url}>
                      <a>
                        <span>{link.name}</span>
                      </a>
                    </Link>
                  </motion.li>
                ))}

                <motion.li custom={links.length} animate={controls} className={`menu-item contact-button`} target="_blank">
                  <Link href={`mailto:${email}`}>
                    <a>
                      <span>Contact</span>
                    </a>
                  </Link>
                </motion.li>
              </ul>
            </header>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
