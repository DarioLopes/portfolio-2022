import Link from 'next/link'

const Button = (props) => {
  return (
    <>
      <Link href={props.href}>
        <a
          className={`${props.transparent ? 'transparent ' : ''}${props.line ? 'has-line ' : ''}button eat-light`}
          target={props.blank ? '_blank' : ''}
        >
          {props.line ? <span className="line"></span> : null}
          <span>{props.children}</span>
        </a>
      </Link>
    </>
  )
}

export default Button
