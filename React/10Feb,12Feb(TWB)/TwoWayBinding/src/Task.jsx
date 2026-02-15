// import { useState } from "react";
import { useState, useEffect } from "react";

function Task() {
  const initialState = {
    name: "",
    email: "",
    password: "",
    gender: "",
    skills: [],
    exp: "",
    bio: "",
    file: null,
  };
  const [username, setUsername] = useState(initialState);
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("profiles");

    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("profiles", JSON.stringify(data));
  }, [data]);

  const changeHandler = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      let updatedSkills = [...username.skills];
      if (checked) {
        updatedSkills.push(value);
      } else {
        updatedSkills = updatedSkills.filter((skill) => skill !== value);
      }
      setUsername({ ...username, skills: updatedSkills });
    } else if (type === "file") {
      setUsername({ ...username, file: files[0] });
    } else {
      setUsername({ ...username, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const reader = new FileReader();

    reader.onloadend = () => {
      const base64Image = reader.result;

      const updatedProfiles = [...data, { ...username, imageUrl: base64Image }];

      setData(updatedProfiles);
      setUsername(initialState);
    };

    if (username.file) {
      reader.readAsDataURL(username.file);
    }
  };

  const handleDelete = (indexToDelete) => {
    const updatedProfiles = data.filter((_, index) => index !== indexToDelete);
    setData(updatedProfiles);
  };
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-3/5 bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-700">
            Create Profile
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              required
              name="name"
              value={username.name}
              onChange={changeHandler}
              type="text"
              placeholder="Full Name"
              className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none w-full"
            />

            <input
              required
              name="email"
              value={username.email}
              onChange={changeHandler}
              type="email"
              placeholder="Email Address"
              className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none w-full"
            />

            <input
              required
              name="password"
              value={username.password}
              onChange={changeHandler}
              type="password"
              placeholder="Password"
              className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none w-full"
            />

            <select
              name="gender"
              value={username.gender}
              onChange={changeHandler}
              className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none w-full"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <div>
              <p className="font-semibold text-gray-600 mb-2">Skills</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {["React", "Node", "Mongo", "Express"].map((skill) => (
                  <label
                    key={skill}
                    className="flex items-center gap-2 text-sm"
                  >
                    <input
                      type="checkbox"
                      value={skill}
                      checked={username.skills.includes(skill)}
                      onChange={changeHandler}
                    />
                    {skill}
                  </label>
                ))}
              </div>
            </div>

            <input
              type="text"
              name="exp"
              value={username.exp}
              onChange={changeHandler}
              placeholder="Experience (years)"
              className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none w-full"
            />

            {/* File Upload */}
            <div>
              <label className="block mb-2 font-semibold text-gray-600">
                Profile Picture
              </label>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <input
                  required
                  type="file"
                  accept="image/*"
                  id="profileUpload"
                  onChange={changeHandler}
                  className="hidden"
                />

                <label
                  htmlFor="profileUpload"
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-800 transition text-center"
                >
                  Upload Image
                </label>

                <span className="text-gray-500 text-sm break-all">
                  {username.file ? username.file.name : "No file selected"}
                </span>
              </div>
            </div>

            <textarea
              name="bio"
              value={username.bio}
              onChange={changeHandler}
              placeholder="Short Bio"
              className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none w-full"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition w-full"
            >
              Submit
            </button>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-2/5">
          {/* LIVE PREVIEW */}
          <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
            <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-700">
              Live Preview
            </h2>

            <div className="flex justify-center mb-4">
              <img
                src={
                  username.file
                    ? URL.createObjectURL(username.file)
                    : "https://i.pravatar.cc/150?img=12"
                }
                alt="profile"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-gray-200 shadow"
              />
            </div>

            <div className="space-y-2 text-gray-700 text-sm sm:text-base">
              <p>
                <b>Name:</b> {username.name}
              </p>
              <p>
                <b>Email:</b> {username.email}
              </p>
              <p>
                <b>Gender:</b> {username.gender}
              </p>
              <p>
                <b>Skills:</b> {username.skills.join(", ")}
              </p>
              <p>
                <b>Experience:</b> {username.exp}
              </p>
              <p>
                <b>Bio:</b> {username.bio}
              </p>
            </div>
          </div>

          {/* SAVED PROFILES */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-700">
              Saved Profiles
            </h2>

            {data.length === 0 && (
              <p className="text-gray-400 text-sm">No profiles yet.</p>
            )}

            {data.map((item, index) => (
              <div
                key={index}
                className="relative border rounded-xl p-4 mb-4 bg-gray-50 shadow-sm"
              >
                <button
                  onClick={() => handleDelete(index)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-red-600 transition"
                >
                  ✖
                </button>

                <div className="flex justify-center mb-3">
                  <img
                    src={
                      item.imageUrl
                        ? item.imageUrl
                        : "https://i.pravatar.cc/150?img=12"
                    }
                    alt="profile"
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
                  />
                </div>

                <div className="text-sm">
                  <p>
                    <b>Name:</b> {item.name}
                  </p>
                  <p>
                    <b>Email:</b> {item.email}
                  </p>
                  <p>
                    <b>Gender:</b> {item.gender}
                  </p>
                  <p>
                    <b>Skills:</b> {item.skills.join(", ")}
                  </p>
                  <p>
                    <b>Experience:</b> {item.exp}
                  </p>
                  <p>
                    <b>Bio:</b> {item.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
