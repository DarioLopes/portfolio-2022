import { getSkills } from '../../lib/api'
import Head from '../../components/head'
import Main from '../../components/main'
import Letters from '../../components/letters'
import { motion, useAnimation } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Skills(skills) {
  const [title] = useState('Skills')
  const controls = useAnimation()
  const params = (i) => ({
    opacity: [0, 1],
    y: [25, 0],
    scale: [0.98, 1],
    transition: {
      duration: 1.5,
      ease: 'easeOut',
      delay: (i + 15) * 0.15,
    },
  })

  useEffect(() => {
    controls.start((i) => params(i))
  })

  return (
    <Main>
      <Head title={title} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 main-title">
            <h1 className="title">
              <Letters text={title} anim={'letters'} delay={40} />
            </h1>
          </div>
        </div>
      </div>
      <div className="container-fluid container-skills">
        <div className="row">
          {skills.data.map((skill, i) => (
            <motion.div key={`${skill.icon}-${skill.id}`} custom={i} animate={controls} className="col-12 col-lg-6 col-xl-3 card-skill">
              <img src={`${process.env.API}/assets/${skill.icon}`} alt="" />
              <h2 className="subtitle" style={{ opacity: 1 }}>
                {skill.skill}
              </h2>
              <p>{skill.content ? skill.content : null}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Main>
  )
}

export async function getStaticProps() {
  const skills = await getSkills()
  return {
    props: skills,
  }
}
