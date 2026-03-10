import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./styles/global.scss";

const App = () => {
  const [user, setUser] = useState([]);
  const [name, setname] = useState("");
  const [role, setrole] = useState("");
  const [editId, setEditId] = useState(null);
  const [editname, seteditname] = useState("");
  const [editrole, seteditrole] = useState("");

  async function getNotes() {
    const response = await axios.get("http://localhost:3000/task2");
    console.log(response.data.task);
    setUser(response.data.task);
  }

  useEffect(() => {
    getNotes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/task2", {
      name,
      role,
    });

    setname("");
    setrole("");
     getNotes()
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/task2/${id}`);
    getNotes()
  };

const handleSave = async (id) => {
  try {
    await axios.patch(`http://localhost:3000/task2/${id}`, {
      name: editname,
      role: editrole,
    });

    setEditId(null);
    getNotes();
  } catch (error) {
    console.log("Update error:", error);
  }
};

  const handleEdit =(elem)=>{
    setEditId(elem._id);
    seteditname(elem.name);
    seteditrole(elem.role)
  }

  return (
    <main className="main-page">
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter your role"
          value={role}
          onChange={(e) => setrole(e.target.value)}
        />

        <button type="submit">Create Task</button>
      </form>

      <div className="notes">
        {user.map((elem) => (
          <div className="note" key={elem._id}>
            <div className="top-form">
              {editId === elem._id ? (
                <input
                  value={editname}
                  onChange={(e) => seteditname(e.target.value)}
                />
              ) : (
                <h1>{elem.name}</h1>
              )}

              <div className="actions">
                {editId === elem._id ? (
                  <button onClick={() => handleSave(elem._id)}>
                    <i className="ri-save-line saved "></i>
                  </button>
                ) : (
                  <button onClick={() => handleEdit(elem)}>
                    <i className="ri-pencil-line pencil"></i>
                  </button>
                )}

                <button
                  onClick={() => handleDelete(elem._id)}
                  className="delete"
                >
                  <i className="ri-delete-bin-2-line"></i>
                </button>
              </div>
            </div>

            {editId === elem._id ? (
              <input
                value={editrole}
                onChange={(e) => seteditrole(e.target.value)}
              />
            ) : (
              <h3>{elem.role}</h3>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default App;
