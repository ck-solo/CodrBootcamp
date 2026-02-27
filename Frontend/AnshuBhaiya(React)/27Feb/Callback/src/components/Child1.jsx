import React, { memo } from 'react'

const Child1 = memo(({paragraph}) => {
  console.log("child1 is rendering", paragraph)
  return (
    <div>{paragraph}</div>
  )
})

export default Child1