import { motion, useAnimation } from 'framer-motion'
import Parser from 'html-react-parser'
import { useEffect } from 'react'

const Content = (props) => {
  const controlsContent = useAnimation()

  const paramsContent = () => ({
    opacity: [0, 1],
    y: [5, 0],
    scale: [0.98, 1],
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: 0.8,
    },
  })

  useEffect(() => {
    controlsContent.start(() => paramsContent())
  })

  return (
    <motion.div className="p-container content-wrapper" animate={controlsContent} key={`content-${Math.random()}`}>
      {Parser(props.children)}
    </motion.div>
  )
}

export default Content
