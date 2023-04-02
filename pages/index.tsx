import Head from 'next/head'
import Calculator from '../components/Calculator'
import Page from '../components/Page'

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Mortgage Rate Calculator</title>
        <meta name="description" content="Mortgage Rate Calculator" />
        <link rel="icon" href="/images/avatar.png" />
      </Head>
      <Calculator />
    </Page>
  )
}
