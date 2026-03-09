import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./styles/global.scss";

const App = () => {
  const [user, setUser] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);
  const [edittitle, seteditTitle] = useState("");
  const [editdescription, seteditDescription] = useState("");

  async function getNotes() {
    const response = await axios.get("http://localhost:3000/task");
    console.log(response.data.task);
    setUser(response.data.task);
  }

  useEffect(() => {
    getNotes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/task", {
      title,
      description,
    });

    setTitle("");
    setDescription("");
     getNotes()
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/task/${id}`);
    getNotes()
  };

const handleSave = async (id) => {
  try {
    await axios.patch(`http://localhost:3000/task/${id}`, {
      title: edittitle,
      description: editdescription,
    });

    setEditId(null);
    getNotes();
  } catch (error) {
    console.log("Update error:", error);
  }
};

  const handleEdit =(elem)=>{
    setEditId(elem._id);
    seteditTitle(elem.title);
    seteditDescription(elem.description)
  }

  return (
    <main className="main-page">
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter your description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Create Task</button>
      </form>

      <div className="notes">
        {user.map((elem) => (
          <div className="note" key={elem._id}>
            <div className="top-form">
              {editId === elem._id ? (
                <input
                  value={edittitle}
                  onChange={(e) => seteditTitle(e.target.value)}
                />
              ) : (
                <h1>{elem.title}</h1>
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
                value={editdescription}
                onChange={(e) => seteditDescription(e.target.value)}
              />
            ) : (
              <h3>{elem.description}</h3>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default App;
