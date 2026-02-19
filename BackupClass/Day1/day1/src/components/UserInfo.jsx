import React from 'react'

function UserInfo({name , bio}) {
  return (
    <div className='flex flex-col items-center'>
         <h2>{name}</h2>
        <h4>{bio}</h4>
    </div>
  )
}

export default UserInfo