import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

const Parent = () => {
  return (
    <div>
      <Child1 paragraph={"hello world"}/>
      <Child2 paragraph={"hello world child2"}/>
    
    </div>
  )
}

export default Parent