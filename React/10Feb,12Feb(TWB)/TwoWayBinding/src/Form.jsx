import React, { useState } from "react";

function Form() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  }); 
  const [newuser, setNewuser] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click");
    setNewuser([...newuser, user]);
    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  const handlechange = (e) => {
    console.log(e.target.value);
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <h1>TWB</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={user.name}
          placeholder="Enter Your name"
          name="name"
          onChange={handlechange}
        />
        <input
          type="text"
          value={user.email}
          placeholder="Enter Your email"
          name="email"
          onChange={handlechange}
        />
        <input
          type="text"
          value={user.password}
          placeholder="Enter Your password"
          name="password"
          onChange={handlechange}
        />
        <button>Submit</button>
      </form>

      {newuser.map((elem, index) => {
        return (
          <div key={index}>
            <p>name = {elem.name}</p>
            <p>email ={elem.email}</p>
            <p>password ={elem.password}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Form;
