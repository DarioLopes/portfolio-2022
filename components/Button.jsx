import Link from 'next/link'

const Button = (props) => {
  return (
    <>
      <Link
        href={props.href}
        className={`${props.transparent ? 'transparent ' : ''}${props.line ? 'has-line ' : ''}button eat-light`}
        target={props.blank ? '_blank' : ''}
      >
        {props.line ? <span className="line"></span> : null}
        <span>{props.children}</span>
      </Link>
    </>
  )
}

export default Button
