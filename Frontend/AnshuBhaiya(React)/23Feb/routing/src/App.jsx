import React from 'react'
import {useRef} from "react"

const App = () => {
const inputRef = useRef(null);

  const focusInput = () =>{
    inputRef.current.focus()
  }
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default App