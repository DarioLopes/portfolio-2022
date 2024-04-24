import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Head from '../../components/Head'
import Letters from '../../components/Letters'
import Main from '../../components/Main'
import { getSkills } from '../../lib/api'

export default function Skills(skills) {
  const [title] = useState('Skills')
  const controls = useAnimation()

  const params = (i) => ({
    opacity: [0, 1],
    y: [25, 0],
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: (i + 10) * 0.15,
    },
  })

  useEffect(() => {
    controls.start((i) => params(i))
  }, [controls])

  return (
    <Main>
      <Head title={title} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 main-title">
            <h1 className="title">
              <Letters text={title} anim={'letters'} delay={15} />
            </h1>
          </div>
        </div>
      </div>
      <div className="container-fluid container-skills">
        <div className="row">
          {skills.data.map((skill, i) => (
            <motion.div key={`${skill.icon}-${skill.id}`} custom={i} animate={controls} className="col-12 col-lg-6 card-skill" style={{ opacity: 0 }}>
              <div className="card-skill-wrapper">
                <Image
                  src={`${process.env.API}/assets/${skill.icon}.svg`}
                  width="44"
                  height="44"
                  alt={skill.skill}
                  className="img"
                  priority={i < 8 ? true : false}
                />
                <h2 className="subtitle" style={{ opacity: 1 }}>
                  {skill.skill}
                </h2>

                {skill.content ? <p className="details">{skill.content}</p> : null}
              </div>
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
