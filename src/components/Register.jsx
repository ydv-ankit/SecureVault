import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

export default function Register({ toggleForm }) {
  const [formData, setFormData] = React.useState({
    email: "",
    username: "",
    password: "",
  });
  const [error, setError] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password || !formData.email) {
      setError("Please fill all the fields !");
      return;
    }
    await axios
      .post(import.meta.env.VITE_SERVER_URI + "/api/user/create", {
        email: formData.email,
        username: formData.username,
        password: formData.password,
      })
      .then((res) => {
        if (res.data.message === "success") {
          toast.success("Registration successful ! Please login.");
          setTimeout(() => {
            toggleForm();
          }, 2000);
        }
      })
      .catch((err) => {
        toast.error("Error ! Please try again.");
        console.log(err);
      });
  };

  return (
    <div className="sm:w-4/5 w-full mx-auto min-h-96 rounded-lg p-4 flex items-center justify-center flex-col">
      <h1 className="text-4xl my-2">Register</h1>
      <p>Please enter details to continue !</p>
      <form className="flex flex-col">
        <input
          className="bg-transparent border border-slate-700 p-2 mb-2 mt-2 outline-none rounded-md text-md"
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        <input
          className="bg-transparent border border-slate-700 p-2 mb-2 mt-2 outline-none rounded-md text-md"
          type="text"
          placeholder="Email Id"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          className="bg-transparent border border-slate-700 p-2 mb-2 mt-2 outline-none rounded-md text-md"
          type="password"
          placeholder="Password"
          autoComplete="off"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <p className="text-red-400 text-sm text-center">{error}</p>
        <button
          className="mt-2 border border-slate-600 rounded-xl p-2 cursor-pointer hover:bg-gray-200"
          onClick={handleSubmit}>
          Register
        </button>
        <div className="w-full border-b-2 border-slate-600 my-4"></div>
        <button
          className="mt-2 border border-slate-600 rounded-xl p-2 cursor-pointer hover:bg-gray-200"
          onClick={toggleForm}>
          Login
        </button>
      </form>
    </div>
  );
}
