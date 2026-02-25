import React, { useState } from "react";

function TWB() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  })

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Click one", name);
    setFormData({
    name: "",
    email: "",
    age: ""
  });
  };

  const handleChange = (e) =>{
    const { name, value} = e.target
    setFormData((prev)=> ({
        ...prev,[name]:value
    }))
  }

  return (
    <div>
      <form
        style={{
          display: "flex",
          gap: "10px",
          border: "1px solid brown",
          padding: "10px",
          flexDirection: "column",
        }}
        onSubmit={submitHandler}
      >
        <input name="name" value={formData.name} placeholder="Enter your name" onChange={handleChange} />

        <input name="email" value={formData.email} placeholder="Enter your email" onChange={handleChange} />

        <input name="age" value={formData.age} placeholder="Enter your age" onChange={handleChange} />
        <button
          style={{
            border: "1px solid black",
            width: "fit-content",
            padding: "10px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default TWB;
