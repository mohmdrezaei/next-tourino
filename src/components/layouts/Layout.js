import React from 'react'
import Header from './Header'

function Layout({children}) {
  return (
   <>
   <Header />
   <div>{children}</div>
   </>
  )
}

export default Layout