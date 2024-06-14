import React from "react";
import { NavLink } from "react-router-dom";

export default function AddButton() {
  return (
    <NavLink to={"/add"} className="absolute bottom-6 right-6 text-xl bg-yellow-400 text-gray-800 p-4 rounded-full flex items-center justify-center cursor-pointer">
      <span className="text-xl mx-2">+</span>
      <span>New</span>
    </NavLink>
  );
}
