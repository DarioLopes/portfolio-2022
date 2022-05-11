import { getWorks } from '../../lib/api'
import Image from 'next/image'
import Head from '../../components/head'
import Main from '../../components/main'
import Letters from '../../components/letters'
import Button from '../../components/button'
import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Icons from '../../components/icons'
import _ from 'lodash'

export default function Works(works) {
  const [title] = useState('Works')
  const [opacity, setOpacity] = useState(0)
  const [delayTitle, setDelayTitle] = useState(15)
  const [active, setActive] = useState(works.data[0])
  const [position, setPosition] = useState(1)
  const controls = useAnimation()
  const controlsToRestart = useAnimation()
  const params = (i) => ({
    opacity: [0, 1],
    y: [20, 0],
    scale: [0.98, 1],
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: (i + 10) * 0.2,
    },
  })

  const switchSlider = (direction) => {
    direction === 'next' ? setPosition((p) => p + 1) : setPosition((p) => p - 1)
    if (position === 1 && direction === 'prev') setPosition(works.data.length)
    if (position === works.data.length && direction === 'next') setPosition(1)

    // ! BUG
    // console.log(works.data);
    // console.log(position);
    // console.log(active);

    // setPrevBackground(works.data[position].cover);
    // setOpacity(0.3);
    setDelayTitle(0)
    setActive(works.data[position - 1])
  }
  useEffect(() => {
    controls.start((i) => params(i))
  })
  useEffect(() => {
    controlsToRestart.start((i) => params(i))
  }, [])

  return (
    <Main expendTo="margin-66">
      <Head title={title} />
      <div className="slider-container">
        <div className="slider-container-page">
          <div className="navigation eat-light">
            <motion.button custom={0} animate={controlsToRestart} className="prev eat-light" onClick={() => switchSlider('prev')}>
              <span className="arrow">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <span className="circle"></span>
            </motion.button>

            <motion.div custom={1} animate={controlsToRestart} className="position">
              {position}/{works.data.length}
            </motion.div>

            <motion.button custom={2} animate={controlsToRestart} className="next eat-light" onClick={() => switchSlider('next')}>
              <span className="arrow">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <span className="circle"></span>
            </motion.button>
          </div>

          {/* 
                        <motion.span style={{ opacity }} className="bg bg-prev">
                          <Image
                            layout="fill"
                            src={`${process.env.API}/assets/${prevBackground}`}
                            priority="true"
                          />
                        </motion.span>
                      */}

          <motion.span className="bg">
            <Image layout="fill" src={`${process.env.API}/assets/${active.cover}`} priority="true" onLoadingComplete={() => setOpacity(0.3)} />
          </motion.span>

          <div className="content-slide">
            <div className="main-title">
              <h1 className="title">
                <Letters text={active.name} delay={delayTitle} />
              </h1>
            </div>

            <div className="button-container">
              <motion.span custom={1} animate={controlsToRestart} className="subtitle">
                Designed & Developed with
              </motion.span>

              <Icons />

              <motion.span custom={5} animate={controlsToRestart}>
                <Button href={`/works/${active.id}`} line>
                  See more
                </Button>
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </Main>
  )
}

export async function getStaticProps() {
  const works = await getWorks()

  return {
    props: works,
    revalidate: 5, //43200, // Refresh every 43200 seconds => every 12 hours
  }
}
