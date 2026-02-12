import React, { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "",
    number: "",
    email: "",
  });

  const [users, setUsers] = useState([]);  

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, user]);

    setUsers(e.target.reset)
 
  };

  return (
    <div>
      <h1>Two Way Binding</h1>

      <form onSubmit={handleSubmit}>
        Name -
        <input
          value={user.name}
          type="text"
          onChange={(e) =>
            setUser({ ...user, name: e.target.value })
          }
        />
        <br />

        Number -
        <input
          value={user.number}
          type="text"
          onChange={(e) =>
            setUser({ ...user, number: e.target.value })
          }
        />
        <br />

        Email -
        <input
          value={user.email}
          type="text"
          onChange={(e) =>
            setUser({ ...user, email: e.target.value })
          }
        />

        <button>Submit</button>
      </form>

      <h2>Submitted Users:</h2>

      {users.map((u, index) => (
        <div key={index}>
          <p>Name: {u.name}</p>
          <p>Number: {u.number}</p>
          <p>Email: {u.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
