import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { setUser } = useOutletContext();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      savedUser &&
      savedUser.email === form.email &&
      savedUser.password === form.password
    ) {
      localStorage.setItem("user", JSON.stringify(savedUser));
      setUser(savedUser);
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-teal-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="border p-2 rounded-lg"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="border p-2 rounded-lg"
        />

        <button
          onClick={handleLogin}
          className="bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;