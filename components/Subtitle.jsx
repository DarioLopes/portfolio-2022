import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const Subtitle = (props) => {
  const controlsSub = useAnimation()

  const paramsSub = () => ({
    opacity: [0, 1],
    y: [5, 0],
    scale: [0.98, 1],
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: 0.5,
    },
  })

  useEffect(() => {
    controlsSub.start(() => paramsSub())
  })

  return (
    <motion.span className="subtitle-container-wrapper" animate={controlsSub} key={`sub-${Math.random()}`}>
      <span>{props.children}</span>
    </motion.span>
  )
}

export default Subtitle
