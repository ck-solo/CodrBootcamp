import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './redux/slice'
 
const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> dispatch(increment())}>Increment</button>
    </div>
  )
}

export default App
