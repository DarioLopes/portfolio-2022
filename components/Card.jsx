import Image from 'next/image'
import Link from 'next/link'

const Card = (props) => {
  return (
    <Link href={!props.href ? '#' : `/works/${props.href}`}>
      <div className="flip-card-wrapper" data-atropos-offset="1">
        <span className="flip-card-wrapper-bg">
          <Image
            layout="fill"
            src={!props.cover ? '/img/chefatable-430x600.png' : `${process.env.API}/assets/${props.cover}&w=430&h=640&f=crop&q=75`}
            alt={!props.children ? props.title : ''}
          />
        </span>

        <span className="flip-card-wrapper-button">
          <span data-atropos-offset="5">
            <span className="flip-card-wrapper-button-undertitle">{!props.children ? props.title : ''}</span>

            <h2 data-atropos-offset="5">
              <span>{!props.children ? props.title : ''}</span>
            </h2>
          </span>
        </span>
      </div>
    </Link>
  )
}

export default Card
