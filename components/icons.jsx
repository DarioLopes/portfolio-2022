import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const Icons = (props) => {
  const controlsIcon = useAnimation()

  const paramsIcon = (i) => ({
    opacity: [0, 1],
    y: [20, 0],
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: (i + 50) * 0.05,
    },
  })

  useEffect(() => {
    controlsIcon.start((i) => paramsIcon(i))
  }, [])

  return (
    <div className="svg-container">
      {props.skills.map((skill, i) => (
        <motion.span key={`${i}-${skill.skills_id.icon}`} custom={i} animate={controlsIcon} className="icon-container">
          <img src={`${process.env.API}/assets/${skill.skills_id.icon}.svg`} alt={`${skill.skills_id.name}`} />
        </motion.span>
      ))}
    </div>
  )
}

export default Icons
