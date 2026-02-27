import React, { useState } from "react";

const AddItemModal = ({ products , setProducts, closeModal }) => {
  console.log(products)
  // console.log(setProducts)
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    const newProduct = {
      id: Date.now(),
      title: form.title,
      price: Number(form.price),
      description: form.description,
    };
// console.log(newProduct)
    setProducts((prev) => [...prev, newProduct]);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96 flex flex-col gap-4">

        <h2 className="text-xl font-bold text-gray-800">
          Add New Product
        </h2>

        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          className="border p-2 rounded-lg"
        />

        <input
          name="price"
          placeholder="Price"
          onChange={handleChange}
          className="border p-2 rounded-lg"
        />

        <input
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="border p-2 rounded-lg"
        />

        <button
          onClick={handleAdd}
          className="bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition"
        >
          Add Product
        </button>

        <button
          onClick={closeModal}
          className="text-gray-500 text-sm"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddItemModal;