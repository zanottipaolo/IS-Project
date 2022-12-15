import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Dashboard from '../components/Dashboard'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <link rel="icon" href="/images/website_icon.ico" />
      </Head>

      <Dashboard />

      <Component {...pageProps} />
    </>
  )
}
