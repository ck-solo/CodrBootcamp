 import React, { useState } from 'react'
 import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset , addbyamount} from './features/counter/counterSlic'

 const App = () => {
   const count = useSelector(state => state.counter.value)
   const dispatch = useDispatch()
   const [num, setNum] = useState(0)

   return (
     <div className="App">
      
      <h1>{count}</h1>
        <button  onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <input type="number" value={num} onChange={(e) => setNum(Number(e.target.value))} />
        <button onClick={() => dispatch(addbyamount(num))}>Add by amount</button>
     </div>
   )
 }
 
 export default App