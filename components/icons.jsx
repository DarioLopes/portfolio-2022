import Directus from '../public/img/svg/directus.svg'
import Docker from '../public/img/svg/docker.svg'
import Figma from '../public/img/svg/figma.svg'
import Github from '../public/img/svg/github.svg'
import Html from '../public/img/svg/html5.svg'
import Illustrator from '../public/img/svg/illustrator.svg'
import Jquery from '../public/img/svg/jquery.svg'
import Json from '../public/img/svg/json.svg'
import Nextjs from '../public/img/svg/nextjs.svg'
import Nginx from '../public/img/svg/nginx.svg'
import Photoshop from '../public/img/svg/photoshop.svg'
import Php from '../public/img/svg/php.svg'
import Reactjs from '../public/img/svg/reactjs.svg'
import Sass from '../public/img/svg/sass.svg'
import Woocommerce from '../public/img/svg/woocommerce.svg'
import Wordpress from '../public/img/svg/wordpress.svg'
import Xd from '../public/img/svg/xd.svg'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const Icons = (props) => {
  const controlsIcon = useAnimation()

  const paramsIcon = (i) => ({
    opacity: [0, 1],
    y: [20, 0],
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: (i + 50) * 0.05,
    },
  })

  useEffect(() => {
    controlsIcon.start((i) => paramsIcon(i))
  }, [])

  return (
    <div className="svg-container">
      {props.skills.map((skill, i) => (
        <motion.span key={`${props.slug}-${props.id}-${skill.skills_id.icon}`} custom={i} animate={controlsIcon} className="icon-container">
          <img src={`${process.env.API}/assets/${skill.skills_id.icon}.svg`} />
        </motion.span>
      ))}
    </div>
  )
}

export default Icons
