import React from "react";

export default function Register({ toggleForm }) {
  return (
    <div className="backdrop-blur-sm bg-white/10 sm:w-4/5 w-full mx-auto min-h-96 rounded-lg p-4 text-white flex items-center justify-center flex-col">
      <h1 className="text-4xl my-2">Register</h1>
      <p>Please enter details to continue !</p>
      <div className="flex flex-col">
        <input
          className="bg-transparent border border-slate-700 p-2 mb-2 mt-2 outline-none focus:bg-gray-800 rounded-md text-md"
          type="text"
          placeholder="Username"
        />
        <input
          className="bg-transparent border border-slate-700 p-2 mb-2 mt-2 outline-none focus:bg-gray-800 rounded-md text-md"
          type="text"
          placeholder="Email Id"
        />
        <input
          className="bg-transparent border border-slate-700 p-2 mb-2 mt-2 outline-none focus:bg-gray-800 rounded-md text-md"
          type="password"
          placeholder="Password"
        />
        <button className="mt-2 border border-slate-600 rounded-xl p-2 cursor-pointer hover:bg-gray-900">
          Register
        </button>
        <div className="w-full border-b-2 border-slate-600 my-4"></div>
        <button
          className="mt-2 border border-slate-600 rounded-xl p-2 cursor-pointer hover:bg-gray-900"
          onClick={toggleForm}>
          Login
        </button>
      </div>
    </div>
  );
}
