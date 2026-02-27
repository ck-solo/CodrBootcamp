import React from 'react'

function child2({paragraph}) { 
  console.log("child2 is rendering")
  return (
    <div>child2 {paragraph}</div>
  )
}

export default child2