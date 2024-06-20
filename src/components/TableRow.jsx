import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TableRow({ data, handleDelete }) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/edit?id=" + data._id);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <tr>
      <td className="p-4 text-center min-w-36 border border-gray-200">
        {data.site}
      </td>
      <td className="p-4 text-center min-w-36 border border-gray-200">
        {data.username}
      </td>
      <td className="p-4 text-center min-w-36 border border-gray-200">
        {data.email}
      </td>
      <td className="p-4 text-center min-w-36 border border-gray-200">
        <div className="flex justify-between items-center">
          {showPassword ? (
            <div className="m-2">{data.password}</div>
          ) : (
            <div className="m-2">********</div>
          )}
          <img
            src={showPassword ? "/hide.png" : "/show.png"}
            alt=""
            className="w-5 h-5 cursor-pointer mr-4"
            onClick={toggleShowPassword}
          />
        </div>
      </td>
      <td className="p-4 text-center min-w-36 border border-gray-200">
        {data.otherDetails}
      </td>
      <td className="p-4 text-center min-w-36 border border-gray-200">
        <div className="flex justify-around items-center">
          <img
            src="/edit.png"
            alt=""
            className="w-4 h-4 cursor-pointer"
            onClick={handleEdit}
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
