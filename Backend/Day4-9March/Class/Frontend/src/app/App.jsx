import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/global.scss";

const App = () => {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editRole, setEditRole] = useState("");

  async function getNotes() {
    const response = await axios.get("http://localhost:3000/list");
    setUser(response.data.list);
  }

  useEffect(() => {
    getNotes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:3000/list", {
      name,
      role,
    });

    setName("");
    setRole("");

    getNotes();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/list/${id}`);
    getNotes();
  };

  const handleSave = async (id) => {
    await axios.patch(`http://localhost:3000/list/${id}`, {
      name: editName,
      role: editRole,
    });
    
        setEditId(null);
        getNotes();
      };

  const handleEdit = (elem) => {
    setEditId(elem._id);
    setEditName(elem.name);
    setEditRole(elem.role);
  };


  return (
    <main className="main-page">
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter your description"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <button type="submit">Create Task</button>
      </form>

      <div className="notes">
        {user.map((elem) => (
          <div className="note" key={elem._id}>
            <div className="top-form">
              {editId === elem._id ? (
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
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
                value={editRole}
                onChange={(e) => setEditRole(e.target.value)}
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
