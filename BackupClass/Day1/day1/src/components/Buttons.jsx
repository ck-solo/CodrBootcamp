import React from 'react'

function Buttons({increase , decrease}) {
  return (
   <div className="btns text-xl flex gap-4">
        <button
          onClick={increase}
          className="border  px-4 py-1 rounded-xl flex items-center  "
        >
          Like
        </button>
        <button
          onClick={decrease}
          className="border  px-4 py-1 rounded-xl flex items-center  "
        >
          Dislike
        </button>
      </div>
  )
}

export default Buttons