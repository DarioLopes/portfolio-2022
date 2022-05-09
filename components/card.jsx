import Image from 'next/image'
import Link from 'next/link'

const Card = (props) => {
    return (
        <Link href={!props.href ? '#' : `/works/${props.href}`}>
            <a>
                <div className="flip-card-wrapper" data-atropos-offset="1">
                    <span className="flip-card-wrapper-bg">
                        <Image
                            layout="fill"
                            src={!props.image ? '/img/chefatable-430x600.png' : props.image}
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
            </a>
        </Link>
    )
}

export default Card
