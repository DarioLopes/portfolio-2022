import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import Background from '../components/Background'
import Github from '../components/Github'
import Header from '../components/Header'
import Light from '../components/Light'
import Lines from '../components/Lines'
import '../styles/style.css'

const pageTransitions = {
  // Animations à l'entrée et à la sortie de la page
  pageInitial: {
    opacity: 0,
    display: 'block',
  },
  pageAnimate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
      delay: 0.4,
    },
  },
  pageExit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
    transitionEnd: {
      display: 'none',
    },
  },
}

const LineTransitions = {
  // Animations à l'entrée et à la sortie de la page
  pageInitial: {
    scaleX: 0.5,
    opacity: 0,
  },
  pageAnimate: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 1.8,
      ease: 'easeOut',
      delay: 1,
    },
  },
  pageExit: {
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    document.body.style.backgroundColor = '#0f0b23'
    document.getElementById('__next').style.backgroundColor = '#0f0b23'
  }, [])

  return (
    <>
      <Background />
      <AnimatePresence>
        <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={LineTransitions}>
          <Lines />
        </motion.div>
      </AnimatePresence>

      <Light>
        <Header />
        <AnimatePresence>
          <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={pageTransitions}>
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
        <Github />
      </Light>
    </>
  )
}

export default MyApp
