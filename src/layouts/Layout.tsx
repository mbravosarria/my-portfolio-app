import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

interface Props {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
