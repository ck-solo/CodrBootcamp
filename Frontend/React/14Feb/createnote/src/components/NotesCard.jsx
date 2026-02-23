import React from 'react'

function NotesCard({selectedNote}) {
    console.log(selectedNote)
    
  return (
    <div className='bg-gray-400 w-screen h-screen flex border-2 items-center justify-center flex-col'>
        <div className='border-2 w-[60%] h-[40%] p-10 gap-8 flex flex-col rounded'>
        <h2 className='text-3xl'>Title : {selectedNote.title}</h2>
        <h2  className='text-3xl'>Description : {selectedNote.description}</h2>
        </div>
    </div>
  )
}

export default NotesCard