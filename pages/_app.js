import Navbar from '@/components/Navbar'
import '@/components/Navbar.css'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps}>
      <Navbar/>
      <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}
