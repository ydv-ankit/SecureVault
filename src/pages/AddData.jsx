import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import useAuthStore from "../lib/authStore";

export default function AddData() {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const [data, setData] = useState({
    site: "",
    username: "",
    email: "",
    password: "",
    otherDetails: "",
    userId: user._id,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.site || !data.username || !data.email || !data.password) {
      toast.error("Please fill all the fields !");
      return;
    }
    await axios
      .post(import.meta.env.VITE_SERVER_URI + "/api/data/create", data)
      .then((res) => {
        if (res.data.message === "success") {
          console.log("Data Added Successfully !");
          navigate("/details");
        }
      })
      .catch((err) => {
        toast.error("Failed to Add Data !");
        console.error(err);
      });
  };

  return (
    <div className="w-full p-1">
      <h1 className="text-white text-3xl text-center mt-5">Add Data</h1>
      <form className="flex flex-col items-center mt-4">
        <input
          type="text"
          placeholder="Website Name"
          className="p-2 w-5/6 rounded-md"
          value={data.site}
          onChange={(e) => {
            setData({ ...data, site: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Username"
          className="p-2 w-5/6 rounded-md mt-4"
          value={data.username}
          onChange={(e) => {
            setData({ ...data, username: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Email ID"
          className="p-2 w-5/6 rounded-md mt-4"
          value={data.email}
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Password"
          className="p-2 w-5/6 rounded-md mt-4"
          value={data.password}
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Other Details"
          className="p-2 w-5/6 rounded-md mt-4"
          value={data.otherDetails}
          onChange={(e) => {
            setData({ ...data, otherDetails: e.target.value });
          }}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-md w-5/6 mt-4"
          onClick={handleSubmit}>
          Add Data
        </button>
        <NavLink
          to={"/details"}
          className="bg-gray-500 text-white p-2 rounded-md w-5/6 mt-4 text-center">
          Back
        </NavLink>
      </form>
    </div>
  );
}
