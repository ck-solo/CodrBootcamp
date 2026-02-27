import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const CreateProductForm = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name: formData.name,
      price: Number(formData.price),
      description: formData.description,
    };

    onCreate(newProduct);

    setFormData({
      name: "",
      price: "",
      description: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-lg p-8 
                 flex flex-col gap-6 max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Create Product
      </h2>

      <Input
      type="text"
        label="Product Name"
        id="name"
        placeholder="Enter product name"
        value={formData.name}
        onChange={handleChange}
      />

      <Input
        label="Price"
        id="price"
        type="number"
        placeholder="Enter product price"
        value={formData.price}
        onChange={handleChange}
      />

      <Input
        label="Description"
        id="description"
        type="text"
        placeholder="Enter product description"
        value={formData.description}
        onChange={handleChange}
      />

      <Button label="Create Product" type="submit" onClick={onCreate}/>
    </form>
  );
};

export default CreateProductForm;