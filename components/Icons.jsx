import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'

const Icons = (props) => {
  const controlsIcon = useAnimation()

  const paramsIcon = (i) => ({
    opacity: [0, 1],
    y: [15, 0],
    scale: [0.98, 1],
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: (i + 10) * 0.05,
    },
  })

  useEffect(() => {
    controlsIcon.start((i) => paramsIcon(i))
  })

  return (
    <div className="svg-container">
      {props.skills.map((skill, i) => (
        <motion.span className="svg-container-wrapper" custom={i} animate={controlsIcon} key={`${i}-${skill.skills_id.icon}-${Math.random()}`}>
          <span className="icon-container">
            <Image width={44} height={44} src={`${process.env.API}/assets/${skill.skills_id.icon}.svg`} alt={skill.skills_id.skill} />
          </span>
          <p className="tooltip">
            <span>{skill.skills_id.skill}</span>
          </p>
        </motion.span>
      ))}
    </div>
  )
}

export default Icons
