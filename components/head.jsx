import Head from 'next/head'

function globalHead(props) {
  return (
    <Head>
      <title>
        Dario Lopes{props.title ? ` | ${props.title} | ` : ` | `}Front End
        Developer | UI/UX Designer
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href={'/img/favicon.png'} type="image/x-icon" />
      {props.children}
    </Head>
  )
}

export default globalHead
