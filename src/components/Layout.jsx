import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header />
        <Outlet />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Dolorum voluptas molestiae impedit numquam id ratione ab reiciendis aut
          quo minima error, nemo, illo sapiente excepturi suscipit architecto 
          voluptatum omnis mollitia tempore consequuntur, odit et. Cupiditate
          beatae aliquam natus ipsa voluptates! Modi excepturi saepe quibusdam
          esse eum inventore exercitationem magnam repellat?  
      <Footer />
    </>
  ) 
}

export default Layout