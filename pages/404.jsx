import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Background from '../components/Background'
import Button from '../components/Button'
import Letters from '../components/Letters'

export default function errorPage() {
  return (
    <>
      <div className="page-404">
        <Link href={'/'} className="logo-link on-page-404">
          <Image alt="404" src={'/img/logo.svg'} width={200} height={200} priority={true} />
        </Link>

        <h1 className="title">
          <Letters text="404 | Nothing here..." anim={'letters'} delay={0} />
        </h1>

        <motion.div
          className="back-home-button-container"
          initial={{ y: 15, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            ease: 'easeOut',
            delay: 1.5,
            duration: 1,
          }}
        >
          <Button href={'/'} line={true}>
            {'Back home'}
          </Button>
        </motion.div>
      </div>
      <Background src={`${process.env.API}/assets/216f18c8-da51-4cce-bea1-26eabe17d895`} alt="404" />
    </>
  )
}
