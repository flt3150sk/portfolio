import { Global } from '@emotion/react'
import type { AppProps } from 'next/app'
import { globalStyle } from '../shared/styles/GlobalStyle'
import { Layout } from '~/components/layouts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyle} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
