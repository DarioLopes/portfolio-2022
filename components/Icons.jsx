import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import Image from 'next/image'

const Icons = (props) => {
  const controlsIcon = useAnimation()

  const paramsIcon = (i) => ({
    opacity: [0, 1],
    y: [20, 0],
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: (i + 0) * 0.05,
    },
  })

  useEffect(() => {
    controlsIcon.start((i) => paramsIcon(i))
  })

  return (
    <div className="svg-container">
      {props.skills.map((skill, i) => (
        <span className="svg-container-wrapper" key={`${i}-${skill.skills_id.icon}`}>
          <motion.span key={`${i}-${skill.skills_id.icon}`} custom={i} animate={controlsIcon} className="icon-container">
            <Image width={44} height={44} src={`${process.env.API}/assets/${skill.skills_id.icon}.svg`} alt={skill.skills_id.skill} />
          </motion.span>
          <p className="tooltip">
            <span>{skill.skills_id.skill}</span>
          </p>
        </span>
      ))}
    </div>
  )
}

export default Icons
