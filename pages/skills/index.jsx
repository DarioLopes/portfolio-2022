import { getSkills } from '../../lib/api'
import Head from '../../components/head'
import Main from '../../components/main'
import Letters from '../../components/letters'
import { useState } from 'react'

export default function Skills(skills) {
  const [title] = useState('Skills')
  console.log(skills)
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
      <div className="container">
        <div className="row">
          {skills.data.map((skill) => (
            <div key={`${skill.icon}-${skill.id}`} className="col-12 col-lg-4 col-xl-3 card-skill">
              <img src={`${process.env.API}/assets/${skill.icon}`} alt="" />
              <h2 className="subtitle" style={{ opacity: 1 }}>
                {skill.skill}
              </h2>
              <p>{skill.content ? skill.content : null}</p>
            </div>
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
    revalidate: 43200, //43200, // Refresh every 43200 seconds => every 12 hours
  }
}
