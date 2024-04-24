import _ from 'lodash'
import { useRef, useState } from 'react'
import { useWindowSize } from 'react-window-size-hook'

const Light = (props) => {
  const [smaller, setSmaller] = useState(false)
  const [mousePosition, setmousePosition] = useState({
    left: 0,
    top: 0,
  })

  const [width] = useWindowSize()
  const circleWidth = 364
  const offsetToTurnOff = width - 200

  const getMouseMove = (e) => {
    e.target.classList.contains('eat-light') || e.target.parentElement.classList.contains('eat-light') ? setSmaller(true) : setSmaller(false)
    setmousePosition({
      left: e.pageX,
      top: e.pageY,
    })
  }

  const throttleGetMouseMove = useRef(_.throttle(getMouseMove, 100, { trailing: true }))

  const setMouseMove = (e) => {
    throttleGetMouseMove.current(e)
  }

  return (
    <>
      <div className={`light-container${smaller ? ' smaller' : ''}`} onMouseMove={setMouseMove}>
        <span
          className="light"
          style={{
            transform: `translate3d(${mousePosition.left - circleWidth}px, ${mousePosition.top - circleWidth}px, 0)${smaller ? 'scale(0)' : ''}`,
            opacity: mousePosition.left > offsetToTurnOff || mousePosition.left < 200 || mousePosition.top < 150 ? 0 : 0.6,
          }}
        ></span>
        {props.children}
      </div>
    </>
  )
}

export default Light
