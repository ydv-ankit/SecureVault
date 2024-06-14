import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function TableRow({ data, handleDelete }) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <tr>
      <td className="p-2 text-center">{data.site}</td>
      <td className="p-2 text-center">{data.username}</td>
      <td className="p-2 text-center">{data.email}</td>
      <td className="p-2 text-center">
        <div className="flex justify-between">
          {showPassword ? <div>{data.password}</div> : <div>********</div>}
          <img
            src={showPassword ? "/show.png" : "/hide.png"}
            alt=""
            className="w-6 h-auto invert cursor-pointer"
            onClick={toggleShowPassword}
          />
        </div>
      </td>
      <td className="p-2 text-center">{data.otherDetails}</td>
      <td className="p-2 text-center">
        <div className="flex justify-around items-center">
          <img
            src="/edit.png"
            alt=""
            className="w-4 h-4 invert cursor-pointer"
          />
          <img
            src="/bin.png"
            alt=""
            className="w-6 h-auto cursor-pointer"
            onClick={() => handleDelete(data._id)}
          />
        </div>
      </td>
    </tr>
  );
}
