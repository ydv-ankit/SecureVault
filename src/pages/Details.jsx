import React from "react";
import TableRow from "../components/TableRow";
import useAuthStore from "../lib/authStore";
import axios from "axios";
import AddButton from "../components/AddButton";
import toast from "react-hot-toast";

export default function Details() {
  const [data, setData] = React.useState([]);
  const { user } = useAuthStore();

  const handleDelete = async (id) => {
    await axios
      .delete(`${import.meta.env.VITE_SERVER_URI}/api/data/delete/${id}`)
      .then((res) => {
        toast.success("Deleted Successfully");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error !");
      });
  };

  const fetchData = async () => {
    await axios
      .get(`${import.meta.env.VITE_SERVER_URI}/api/data/user/${user?._id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        toast.error("Error !");
        console.error(err);
      });
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  React.useEffect(() => {
    fetchData();
  }, [handleDelete]);
  return (
    <div className="max-w-5xl mx-auto pb-32">
      <div className="flex justify-between items-center">
        <AddButton />
      </div>
      <table className="w-full mt-4 border">
        <thead className="w-full">
          <tr>
            <th className="border border-gray-200 text-center">Site</th>
            <th className="border border-gray-200 text-center">Username</th>
            <th className="border border-gray-200 text-center">Email</th>
            <th className="border border-gray-200 text-center">Password</th>
            <th className="border border-gray-200 text-center">Other details</th>
            <th className="border border-gray-200 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <TableRow key={item._id} data={item} handleDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
