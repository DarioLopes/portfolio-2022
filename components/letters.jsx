import { motion, useAnimation } from 'framer-motion'
import Atropos from 'atropos/react'
import 'atropos/css'
import { useEffect, useState } from 'react'

const Letters = (props) => {
  const letters = useAnimation()
  const [text, setText] = useState('')
  const [lettersAnim, setLettersAnim] = useState(
    props?.anim ? props.anim : letters //if not set, default is letters anim set
  )
  const lettersParams = (i) => ({
    y: [25, 0],
    opacity: [0, 1],
    skewX: [10, 0],
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: (props?.delay && typeof props.delay === 'number' ? i + props.delay : i + 0) * 0.05,
    },
  })

  const lettersOpacity = (i) => ({
    opacity: 0,
    transition: {
      duration: 0,
      delay: 0,
    },
  })

  const detectCapital = (ch) => {
    return ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90
  }

  useEffect(() => {
    !text || typeof text === undefined ? setText('no text provided') : setText(props.text)
    if (lettersAnim === 'letters') setLettersAnim(letters)

    letters.start((i) => lettersParams(i))
  })

  useEffect(() => {
    letters.start((i) => lettersOpacity(i))
  }, [])

  return (
    <span aria-label={text} role={text} className="title-anim">
      {text.split('').map((letter, index) => (
        <Atropos
          className={`flip-card-anim${detectCapital(letter) ? ` is-maj letter-${letter.toLocaleLowerCase()}` : ` no-maj`}`}
          rotateXMax={15}
          rotateYMax={45}
          duration={100}
          activeOffset={0}
          shadow={false}
          highlight={false}
          key={index}
        >
          <motion.span
            custom={index}
            animate={lettersAnim}
            aria-hidden="true"
            key={index}
            className={`${letter === ' ' ? 'letter-single space' : 'letter-single'}`}
          >
            {letter}
          </motion.span>
        </Atropos>
      ))}
    </span>
  )
}

export default Letters
