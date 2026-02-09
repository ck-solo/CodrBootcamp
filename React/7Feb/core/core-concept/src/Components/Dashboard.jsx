import React from 'react'
import Content from './Content'

const Dashboard = ( {user} ) => {
  return (
    <div className='dashboard'>
      <h1>Content</h1>
        <Content user={user} />
    </div>
  )
}

export default Dashboard