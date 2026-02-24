import React from 'react'
import { Link } from 'react-router-dom'

const NAVCONFIG = [
  { label:'home',
    link:"/home"
  },
  {
    label:"about",
    link:"/about"
  },
  {
    label:"products",
    link:"/products"
  },
  ,
  {
    label:"cart",
    link:"/cart"
  },
  ,
  {
    label:"wishlist",
    link:"/wishlist"
  },

]
const Navigation = () => {
  return (
    <div className='flex justify-between   bg-amber-300 w-full'>
      <div className=''>
        <h1>Shopsy</h1>
      </div>
      <div className='pr-4 flex gap-10 bg-amber-400 '>
      {
        NAVCONFIG.map((nav)=>{
          return <Link to={nav.link}>{nav.label}</Link>
        })
      }
      </div>
    </div>
  )
}

export default Navigation