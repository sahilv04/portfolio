import MainContainer from '@/components/layouts/main-container'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://kit.fontawesome.com/1e528c0130.js" crossOrigin='anonymous' />
      <MainContainer><Component {...pageProps} /></MainContainer>
    </>
  )
}
