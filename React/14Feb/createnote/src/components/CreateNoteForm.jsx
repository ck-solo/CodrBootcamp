import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

const CreateNoteForm = ({ setToggle, setNotes, notes }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    let arr = [...notes, { ...data, id: nanoid() }];
    setNotes(arr);
    localStorage.setItem("notes", JSON.stringify(arr));
    alert("notes created");
    setToggle(false);
  };

  return (
    <div className="bg-gray-400 w-[40%] p-5 rounded-xl flex flex-col items-center">
      <h1 className="text-2xl mb-5">Create note</h1>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex w-full flex-col gap-4"
        action=""
      >
        <input
          {...register("title", { required: "Title is required" })}
          className="bg-white px-2 py-3 rounded outline-none"
          type="text"
          placeholder="Title"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}

        <textarea
          {...register("description", { required: "Description is required" })}
          className="bg-white px-2 py-3 rounded outline-none"
          placeholder="Description"
        ></textarea>
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
        <button className="bg-blue-600 text-xl text-white cursor-pointer px-2 py-3 rounded ">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateNoteForm;