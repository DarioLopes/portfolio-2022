import Image from 'next/image'

const Background = (props) => {
  return (
    <div className="bg-container-main">
      <span className="bg" style={{ opacity: 0.2 }}>
        <Image layout="fill" src={props.src ? props.src : '/img/bg-skill.jpg'} alt={props.alt ? props.alt : 'Background image'} priority="true" />
      </span>
    </div>
  )
}

export default Background
