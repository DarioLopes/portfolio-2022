import { getAbout } from '../../lib/api'
import Head from '../../components/Head'
import Main from '../../components/Main'
import Letters from '../../components/Letters'
import Button from '../../components/Button'
import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

export default function About(about) {
  const [title] = useState('About')
  const controls = useAnimation()

  controls.start((i) => ({
    opacity: [0, 1],
    y: [20, 0],
    scale: [0.98, 1],
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: (i + 10) * 0.2,
    },
  }))

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

        <div className="row">
          <div className="big-card-about-container">
            <motion.div custom={0} animate={controls} className="big-card-about">
              <div className="big-card-about-counter">
                {about.data?.points.map((point, i) => (
                  <motion.div key={i} className="counter" custom={i} animate={controls}>
                    <div className="counter-title">{point.years}</div>
                    <span className="counter-content">{point.experience}</span>
                  </motion.div>
                ))}
              </div>

              <div className="big-card-about-content">
                <motion.span className="subtitle" custom={2} animate={controls}>
                  {about.data.content_title}
                </motion.span>
                <motion.div className="content-wrapper" custom={3} animate={controls} dangerouslySetInnerHTML={{ __html: about.data.content }} />

                <div className="button-container">
                  <motion.span custom={4} animate={controls}>
                    <Button href={`mailto:${about.data.email}`} line>
                      Contact me
                    </Button>
                  </motion.span>

                  <motion.span className="sep" custom={5} animate={controls}>
                    or
                  </motion.span>

                  <motion.span custom={6} animate={controls}>
                    <Button href={`${process.env.API}/assets/${about.data.CV}`} blank transparent>
                      Check my resume
                    </Button>
                  </motion.span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Main>
  )
}

export async function getStaticProps() {
  const about = await getAbout()
  return {
    props: about,
  }
}
