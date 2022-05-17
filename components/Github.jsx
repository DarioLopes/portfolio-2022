import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const Github = () => {
  return (
    <motion.span
      animate={{
        y: [-25, 0],
        opacity: [0, 1],
        transition: {
          ease: 'easeOut',
          duration: 1,
          delay: 5,
        },
      }}
      style={{ opacity: 0 }}
    >
      <Link href="https://github.com/DarioLopes/portfolio-2022/">
        <a className="github-link" title="Github Portfolio page" target="_blank">
          <Image src={`${process.env.API}/assets/23e5f1cc-3cad-4074-91f1-03843979328b.svg`} width={22} height={22} />
          <span>Github</span>
        </a>
      </Link>
    </motion.span>
  )
}

export default Github
