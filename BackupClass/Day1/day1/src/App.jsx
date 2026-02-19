 import React from 'react' 
import Card from './components/Card'
 
 function App() {

   return (
     <div className='h-screen bg-blue-200 p-10 gap-2 flex items-center justify-center flex-col'>
      <h2 className='text-5xl'>Card</h2>
      <Card />
     </div>
   )
 }
 
 export default App