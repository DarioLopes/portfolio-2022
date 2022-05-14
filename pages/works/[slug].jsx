import { getWorks, getSingleWorks } from '../../lib/api'
import { useEffect } from 'react'
import Main from '../../components/Main'
import Slider from '../../components/Slider'
import Title from '../../components/Title'
import Head from '../../components/Head'
import Image from 'next/image'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'

const pageTransitions = {
  // Animations à l'entrée et à la sortie de la page
  pageInitial: {
    opacity: 0,
    display: 'block',
    transition: {
      delay: 1.6,
    },
  },
  pageAnimate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: 1,
    },
  },
  pageExit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
    transitionEnd: {
      display: 'none',
    },
  },
}

export default function WorksSingle({ single, works }) {
  const work = single.data[0]
  const cover = useAnimation()
  useEffect(() => {
    cover.start(() => ({
      opacity: [0, 1],
      y: [25, 0],
      scale: [0.98, 1],
      transition: {
        duration: 1,
        ease: 'easeOut',
        delay: 3,
      },
    }))
  })
  //* console.log(work.content) // "<p> bla...bla...bla </p>"
  //* console.log(work.content_title) // Beaucartel is an audio...
  //* console.log(work.cover)
  //* console.log(work.id) // 6
  //* console.log(work.name) // Beaucartel
  //* console.log(work.project_skills) // [1,6,7,13]
  //* console.log(work.side_image)
  //* console.log(work.slug) // slug-project

  return (
    <>
      <Head title={`Work - ${work.name}`} />
      <AnimatePresence>
        <motion.div key={work.slug} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={pageTransitions}>
          <Main expendTo={`single-work full ${work.slug}`}>
            <div className="bg-container">
              <motion.span className="bg">
                <Image layout="fill" src={`${process.env.API}/assets/${work.cover}`} priority="true" style={{ opacity: 0.3 }} />
              </motion.span>
            </div>

            <div className="container-fluid">
              <Title slug={work.slug} id={work.id} subtitle={work.content_title}>
                {work.name}
              </Title>
              <motion.div className="mockup-design" animate={cover}>
                <img src={`${process.env.API}/assets/${work.mockup}`} alt={work.name} />
              </motion.div>
            </div>

            <div className="container datas-container">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="subtitle" style={{ opacity: 1, fontWeight: '400' }}>
                    <p>The Challenge</p>
                  </div>
                  <div className="p-container" dangerouslySetInnerHTML={{ __html: work.content }} />
                </div>
              </div>
            </div>

            <div className="container-fluid">
              <div className="mockup-design">
                {/* <Image layout="fill" src=`${process.env.API}/assets/${work.mockup}` alt={work.name} /> */}
                <img src={`${process.env.API}/assets/${work.side_image}`} alt={work.name} />
              </div>
            </div>
          </Main>
          <Slider works={works} cssClass="single-work" />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export async function getStaticProps({ params }) {
  const single = await getSingleWorks(params.slug)
  const works = await getWorks()

  return {
    props: { single, works },
  }
}

export async function getStaticPaths() {
  const works = await getWorks()
  const paths = works.data.map((work) => {
    return { params: { slug: work.slug } }
  })

  return {
    paths,
    fallback: false,
  }
}
