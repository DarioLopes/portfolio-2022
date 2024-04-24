import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'
import Background from '../../components/Background'
import Head from '../../components/Head'
import Main from '../../components/Main'
import Slider from '../../components/Slider'
import Title from '../../components/Title'
import { getSingleWorks, getWorks } from '../../lib/api'

const contentTransitions = {
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
      scale: [0.96, 1],
      transition: {
        duration: 1.5,
        ease: 'easeOut',
        delay: 2,
      },
    }))
  })

  return (
    <>
      <Head title={`Work - ${work.name}`} />
      <AnimatePresence>
        <motion.div key={work.slug} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={contentTransitions}>
          <Main expendTo={`single-work full ${work.slug}`}>
            <Background src={`${process.env.API}/assets/${work.cover}`} alt={work.name} />

            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <Title
                    slug={work.slug}
                    id={work.id}
                    content={work.content}
                    subtitle={work.content_title}
                    skills={work.project_skills}
                    websiteLink={work.website_link}
                    hoverStyle={true}
                    delayTitle={15}
                  >
                    {work.name}
                  </Title>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <motion.div className="mockup-design eat-light" animate={cover}>
                    <Image src={`${process.env.API}/assets/${work.mockup}`} layout="fill" alt={work.name} priority={true} quality={90} />
                  </motion.div>
                </div>
              </div>
            </div>
          </Main>
          <Slider works={works} currentWork={work.id} cssClass="single-work" />
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
