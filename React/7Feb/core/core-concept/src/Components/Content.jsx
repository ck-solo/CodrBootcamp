import React from 'react'
import Sidebar from './SideBar' 

const Content = ({user}) => {
  return (
    <div className='content'>
      <h2>Sidebar</h2>
        <Sidebar user={user}/>
        
    </div>
  )
}

export default Content