update state
import React, { useState } from 'react'

function App() {
const [oneadd, setoneadd] = useState(0)

const handleOne = () =>{
setoneadd(oneadd + 1)
}
const handleless = () =>{
setoneadd(oneadd - 1)
}
const handlemultiple = () =>{
setoneadd(oneadd + 50)
}

return (
<div>
<h1>value of oneadd : {oneadd}</h1>
<button onClick={handleOne}>Add 1</button>
<button onClick={handleless}>minu 1</button>
<button onClick={handlemultiple}>Add 5</button>
</div>
)
}

export default App
