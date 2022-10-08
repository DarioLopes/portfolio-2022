import Letters from './Letters'
import Button from './Button'
import Content from './Content'
import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Icons from './Icons'
import Link from 'next/link'
import Subtitle from './Subtitle'

const Title = (props) => {
  const texts = useAnimation()
  const params = (i) => ({
    opacity: [0, 1],
    y: [25, 0],
    scale: [0.98, 1],
    transition: {
      duration: 1.5,
      ease: 'easeOut',
      delay: (i + 10) * 0.15,
    },
  })

  useEffect(() => {
    texts.start((i) => params(i))
  }, [texts])

  return (
    <div className="content-slide">
      <div className="main-title">
        <h1 className="title">
          <Letters text={props.children} custom={0} delay={props.delayTitle} />
        </h1>
        <span className="line" />
      </div>

      <div className="button-container">
        <motion.span custom={1} animate={texts} className="subtitle">
          <Subtitle>{props.subtitle}</Subtitle>
        </motion.span>

        <motion.span custom={3} animate={texts} className="icons-container">
          <Icons skills={props.skills} />
        </motion.span>

        <motion.span custom={2} animate={texts} className="content">
          <Content>{props.content}</Content>
        </motion.span>

        {props?.button && props.button === true ? (
          <motion.span custom={4} animate={texts}>
            <Button href={`/works/${props.slug}`} line>
              See sketch
            </Button>
          </motion.span>
        ) : null}

        {props?.websiteLink ? (
          <motion.span custom={5} animate={texts}>
            <Link href={props.websiteLink}>
              <a className={`button transparent eat-light visit-website ${props.hoverStyle ? 'hover-style' : null}`} target="_blank">
                <span>Visit website</span>
              </a>
            </Link>
          </motion.span>
        ) : null}
      </div>
    </div>
  )
}

export default Title
