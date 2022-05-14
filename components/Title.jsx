import Letters from './Letters'
import Button from './Button'
import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import axios from 'axios'
import Image from 'next/image'
import Icons from './Icons'

export default function CoverTitle(props) {
  const controls = useAnimation()
  const [skills, setSkills] = useState([])
  const params = (i) => ({
    opacity: [0, 1],
    y: [25, 0],
    scale: [0.98, 1],
    transition: {
      duration: 1.5,
      ease: 'easeOut',
      delay: (i + 10) * 0.15,
    },
  })

  useEffect(() => {
    axios.get(`${process.env.API}/items/works/${props.id}?fields=project_skills.skills_id.icon`).then((response) => {
      setSkills(response.data.data.project_skills)
    })
  }, [])

  useEffect(() => {
    controls.start((i) => params(i))
  })

  return (
    <div className="content-slide">
      <div className="main-title">
        <h1 className="title">
          <Letters text={props.children} custom={0} delay={15} />
        </h1>
        <span className="line" />
      </div>

      <div className="button-container">
        <motion.span custom={1} animate={controls} className="subtitle">
          {props.subtitle && props.subtitle.length ? props.subtitle : 'Designed & Developed with'}
        </motion.span>

        <motion.span custom={2} animate={controls} className="icons-container">
          <Icons skills={skills} />
        </motion.span>

        {props?.button && props.button === true ? (
          <motion.span custom={3} animate={controls}>
            <Button href={`/works/${props.slug}`} line>
              See more
            </Button>
          </motion.span>
        ) : null}
      </div>
    </div>
  )
}
