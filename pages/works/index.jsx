import { getWorks } from '../../lib/api'
import Image from 'next/image'
import Head from '../../components/Head'
import Main from '../../components/Main'
import Title from '../../components/Title'
import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Navigation, Pagination, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'

export default function Works(works) {
  const [title] = useState('Works')
  const [position, setPosition] = useState(0)
  const [visibleSlides, setVisibleSlides] = useState([1])
  const controls = useAnimation()
  const totalWorks = works.data.length
  const sliderRef = useRef(null)
  const params = (i) => ({
    opacity: [0, 1],
    y: [10, 0],
    scale: [0.98, 1],
    transition: {
      duration: 1.5,
      ease: 'easeOut',
      delay: (i + 5) * 0.15,
    },
  })

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }, [])

  const handleActive = (swiper) => {
    setPosition(swiper.realIndex)
    console.log(swiper.realIndex)
    console.log(swiper)
  }

  useEffect(() => {
    controls.start((i) => params(i))
  }, [])

  return (
    <Main>
      <Head title={title} />
      <div className="slider-works">
        <div className="navigation eat-light">
          <motion.button custom={0} animate={controls} className="prev eat-light" onClick={handlePrev}>
            <span className="arrow">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span className="circle"></span>
          </motion.button>{' '}
          <motion.div custom={1} animate={controls} className="position">
            {position + 1}/{totalWorks}
          </motion.div>
          <motion.button custom={2} animate={controls} className="next eat-light" onClick={handleNext}>
            <span className="arrow">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span className="circle"></span>
          </motion.button>
        </div>
        <Swiper
          ref={sliderRef}
          modules={[Navigation, Pagination, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          effect="fade"
          // onSwiper={(swiper) => console.log(swiper)}
          onRealIndexChange={(swiper) => handleActive(swiper)}
        >
          {works.data.map((work, i) => {
            return (
              <SwiperSlide key={i}>
                <span className="bg">
                  <Image layout="fill" src={`${process.env.API}/assets/${work.cover}`} priority="true" style={{ opacity: 0.3 }} />
                </span>

                <Title slug={work.slug} id={work.id} skills={work.project_skills} button={true}>
                  {work.name}
                </Title>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </Main>
  )
}

export async function getStaticProps() {
  const works = await getWorks()
  return {
    props: works,
    revalidate: 43200, //43200, // Refresh every 43200 seconds => every 12 hours
  }
}
