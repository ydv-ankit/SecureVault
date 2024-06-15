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
      <td className="p-2 text-center min-w-36">{data.site}</td>
      <td className="p-2 text-center min-w-36">{data.username}</td>
      <td className="p-2 text-center min-w-36">{data.email}</td>
      <td className="p-2 text-center min-w-36">
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
      <td className="p-2 text-center min-w-36">{data.otherDetails}</td>
      <td className="p-2 text-center min-w-36">
        <div className="flex justify-around items-center">
          <img
            src="/edit.png"
            alt=""
            className="w-4 h-4 invert cursor-pointer"
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
