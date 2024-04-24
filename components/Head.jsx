import Head from 'next/head'

const globalHead = (props) => {
  const titleHead = `Dario Lopes${props.title ? ` | ${props.title} | ` : ` | `}Front End Developer | UI/UX Designer`

  return (
    <Head>
      <title>{titleHead}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Portfolio of Dario Lopes a Front-end developer-UI/UX Designer based in Belgium." />
      <meta name="theme-color" content="#161032" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#161032" media="(prefers-color-scheme: dark)" />
      <link rel="shortcut icon" href={'/img/favicon.png'} type="image/x-icon" />
      {props.children}
    </Head>
  )
}

export default globalHead
