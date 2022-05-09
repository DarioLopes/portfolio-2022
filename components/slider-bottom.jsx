import Card from './card.jsx'
import Atropos from 'atropos/react'
import { useWindowSize } from 'react-window-size-hook'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from 'framer-motion'

import 'atropos/css'
import 'swiper/css'
const SliderBottom = (props) => {
  const [width] = useWindowSize()
  return (
    <div className="container-fluid">
      <div className="row">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={
            width < 768
              ? 1
              : width < 992
              ? 2
              : width < 1200
              ? 3
              : width < 1921
              ? 5
              : 5
          }
          loop={true}
          navigation
          pagination={{ clickable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {props.works.map((work, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="col-12 flip-card">
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
                      <Card
                        image={work.image}
                        href={work.href ? work.href : '#'}
                        title={work.title}
                      />
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
export default SliderBottom
