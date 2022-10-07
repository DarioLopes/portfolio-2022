import Letters from '../components/Letters'
import Button from '../components/Button'
import Background from '../components/Background'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function errorPage() {
  return (
    <>
      <div className="page-404">
        <Link href={'/'}>
          <a href={'/'} className={'logo-link on-page-404'}>
            <Image src={'/img/logo.svg'} width={200} height={200} priority={true} />
          </a>
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
