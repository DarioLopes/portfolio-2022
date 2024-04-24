import 'atropos/css'
import Atropos from 'atropos/react'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'

const Letters = (props) => {
  const letters = useAnimation()
  const [text, setText] = useState('')
  const [customLettersAnim, setCustomLettersAnim] = useState(
    props?.anim ? props.anim : letters //if not set, default is letters anim set
  )
  // Detect capital to correct CSS (different shape and size of the chosen font)
  const detectCapital = (ch) => ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90

  useEffect(() => {
    // Set default animation and speed (delay can be passed through props)
    const lettersAnim = (i) => ({
      y: [25, 0],
      opacity: [0, 1],
      skewX: [10, 0],
      transition: {
        duration: 1,
        ease: 'easeOut',
        delay: (props?.delay && typeof props.delay === 'number' ? i + props.delay : i + 0) * 0.05,
      },
    })

    // Handle no text
    !text || typeof text === undefined ? setText('no text provided') : setText(props.text)

    // Handle custom anim object
    if (customLettersAnim === 'letters') setCustomLettersAnim(letters)

    letters.start((i) => lettersAnim(i))
  }, [text, props.text, props.delay, customLettersAnim, letters])

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
          key={props.text + index + props.custom}
        >
          <motion.span
            custom={index}
            animate={customLettersAnim}
            aria-hidden="true"
            key={props.text + index}
            style={{ opacity: 0 }}
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
