import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import useAuthStore from "../lib/authStore";
import { useNavigate } from "react-router-dom";

export default function Login({ toggleForm }) {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });
  const [error, setError] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setError("Please fill all the fields !");
      return;
    }
    await axios
      .post(import.meta.env.VITE_SERVER_URI + "/api/user/get", {
        username: formData.username,
        password: formData.password,
      })
      .then((res) => {
        if (res.data.message === "success") {
          login(res.data.data);
          navigate("/details");
        }
      })
      .catch((err) => {
        toast.error("Invalid credentials !");
        console.log(err);
      });
  };

  return (
    <div className="backdrop-blur-sm bg-white/10 sm:w-4/5 w-full mx-auto min-h-96 rounded-lg p-4 text-white flex items-center justify-center flex-col">
      <h1 className="text-4xl my-2">Login</h1>
      <p>Please login to your account !</p>
      <form className="flex flex-col">
        <input
          className="bg-transparent border border-slate-700 p-2 mb-2 mt-2 outline-none focus:bg-gray-800 rounded-md text-md"
          type="text"
          placeholder="Username"
          autoComplete="off"
          value={formData.username}
          onChange={(e) => {
            setError("");
            setFormData({ ...formData, username: e.target.value });
          }}
        />
        <input
          className="bg-transparent border border-slate-700 p-2 mb-2 mt-2 outline-none focus:bg-gray-800 rounded-md text-md"
          type="password"
          placeholder="Password"
          autoComplete="off"
          value={formData.password}
          onChange={(e) => {
            setError("");
            setFormData({ ...formData, password: e.target.value });
          }}
        />
        <div>
          {error && (
            <p className="text-red-400 text-sm mt-2 text-center">{error}</p>
          )}
        </div>
        <button
          className="mt-2 border border-slate-600 rounded-xl p-2 cursor-pointer hover:bg-gray-900"
          onClick={handleSubmit}>
          Login
        </button>
        <div className="w-full border-b-2 border-slate-600 my-4"></div>
        <button
          className="mt-2 border border-slate-600 rounded-xl p-2 cursor-pointer hover:bg-gray-900"
          onClick={toggleForm}>
          Create new account
        </button>
      </form>
    </div>
  );
}
