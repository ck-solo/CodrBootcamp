import { useState } from "react"

const App = () => {

    var  [user , setUser  ] = useState({
         name:"Anshu",
         role:true    })
      
    const changeRole = ()=> {
    //   user.role="user"
    //   setUser(user)

    setUser({...user, role:!user.role})
    }    

  return (
    <div>
       <button>
        <p>{user.role ? "Admin":"user"} </p>
        <button className="outline p-2 m-12" onClick={changeRole}>change role</button>
       </button>
    </div>
  )
}

export default App