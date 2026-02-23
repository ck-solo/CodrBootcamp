import React from 'react'

const NAVCONFIG = [
  {label:'home',
    link:"/"
  },
  {
    label:"about",
    link:"/about"
  },
  {
    label:"Products",
    link:"/products"
  },

]
const Navigation = () => {
  return (
    <div>
      {
        NAVCONFIG.map((nav)=>{
          <Link to={nav.link}>{nav.label}</Link>
        })
      }
    </div>
  )
}

export default App