import React, { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "",
    number: "",
    email: "",
  });
  console.log(user);

  let arr = [];
  arr.push();

  return (
    <div>
      <h1>Two Way Binding</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          arr.push(setUser)
          console.log("Hello")
        }}
      >
        Name -{" "}
        <input
          value={user.name}
          type="text"
          placeholder='"Enter Your name'
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
        />{" "}
        <br />
        Number -{" "}
        <input
          value={user.number}
          type="text"
          placeholder='"number'
          onChange={(e) => {
            setUser({ ...user, number: e.target.value });
          }}
        />{" "}
        <br />
        Email -{" "}
        <input
          value={user.email}
          type="text"
          placeholder='"Enter Your email'
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
        <button>Submit</button>
      </form>
      <h2>name - {user.name}</h2>
      <h2>number - {user.number}</h2>
      <h2>email - {user.email}</h2>
    </div>
  );
}

export default App;
