import Head from 'next/head'

function globalHead(props) {
  return (
    <Head>
      <title>Dario Lopes{props.title ? ` | ${props.title} | ` : ` | `}Front End Developer | UI/UX Designer</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Portfolio of Dario Lopes a Front-end developer-UI/UX Designer based in Belgium." />
      <meta name="theme-color" content="#161032" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#161032" media="(prefers-color-scheme: dark)" />
      <link rel="shortcut icon" href={'/img/favicon.png'} type="image/x-icon" />
      {props.children}
    </Head>
  )
}

export default globalHead
