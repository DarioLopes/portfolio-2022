import Image from 'next/image'

const Background = (props) => {
  return (
    <div className="bg-container-main">
      <span className="bg">
        <Image layout="fill" src={props.src ? props.src : '/img/bg-skill.jpg'} priority="true" alt={props.alt ? props.alt : 'Background image'} />
      </span>
    </div>
  )
}

export default Background
