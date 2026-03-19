import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

  const [userData, setuserData] = useState([])
  const [page,setPage] = useState(1)
  const getData = async ()=>{
   try {
    const response =  await axios.get('https://picsum.photos/v2/list',{
      params:{
        page:page,
        limit:15
      }
    })
   setuserData(response.data)
   console.log(response.data)
   } catch (error) {
    console.log(error.message)
   }
  }

  useEffect(()=>{
    getData();
  },[page])
  
  return (
    <div className='w-full min-h-screen bg-black p-10'>
     
    <div  className='w-full flex flex-wrap gap-12 mt-10'>
      {userData.map((item)=>(
        <div key={item.id} className='card w-60 h-60 rounded-md bg-amber-50'>
          <img className='h-40 w-full object-cover' src={item.download_url} alt="" />
          <h1 className='text-xl font-semibold text-center'>{item.author}</h1>
          </div>
      ))}
    </div>
   <div className='w-full mt-20 flex justify-center items-center gap-10'>
     <button onClick={()=>{page>1 && setPage(page-1)}} className='w-20 h-10 rounded-md bg-red-500'>prev</button>

    <button onClick={()=>setPage(page+1)} className='w-20 h-10 rounded-md bg-blue-500'>next</button>
   </div>
    </div>
  )
}

export default App