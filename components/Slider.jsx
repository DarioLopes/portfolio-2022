import Card from './Card.jsx'
import Atropos from 'atropos/react'
import { useWindowSize } from 'react-window-size-hook'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from 'framer-motion'
import 'atropos/css'
import 'swiper/css'
import Letters from './Letters'

const Slider = (props) => {
  const [width] = useWindowSize()

  return (
    <div className={`container-fluid ${props.cssClass}`}>
      <div className="row">
        <div className="main-title">
          <h1 className="title small">
            <Letters text={'Other Works'} custom={0} delay={15} />
          </h1>
        </div>
      </div>

      <div className="row">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={width < 768 ? 1 : width < 992 ? 2 : width < 1200 ? 3 : width < 1921 ? 5 : 6}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {props.works.data.map((work, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="col-12 flip-card eat-light">
                  <span className="line"></span>
                  <Atropos
                    className="flip-card-anim"
                    rotateXMax={6}
                    rotateYMax={12}
                    rotateXInvert={true}
                    rotateYInvert={true}
                    activeOffset={5}
                    shadow={false}
                    highlight={false}
                  >
                    <motion.div
                      initial={{ y: 15, opacity: 0, scale: 0.98 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      key={i}
                      transition={{
                        ease: 'easeOut',
                        delay: i <= 1 ? (i + 10) * 0.2 : (i + 3) * 0.2,
                        duration: 1,
                      }}
                    >
                      <Card cover={work.cover} href={work.slug ? work.slug : '#'} title={work.name} />
                    </motion.div>
                  </Atropos>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
export default Slider
