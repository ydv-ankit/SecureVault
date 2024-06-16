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
    <div className="max-w-full">
      <div className="text-white max-w-6xl mx-auto min-h-[100vh] relative">
        <div className="flex justify-between p-4 items-center">
          {data.length !== 0 ? (
            <table className="w-full">
              <thead className="border-b my-2">
                <tr>
                  <th className="p-2 font-bold min-w-36">Site</th>
                  <th className="p-2 font-bold min-w-36">Username</th>
                  <th className="p-2 font-bold min-w-36">Email ID</th>
                  <th className="p-2 font-bold min-w-36">Password</th>
                  <th className="p-2 font-bold min-w-36">Other Details</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  return <TableRow key={index} data={item} handleDelete={handleDelete} />;
                })}
              </tbody>
            </table>
          ) : (
            <div className="text-center text-white text-2xl p-4 w-full">
              No Data Found
            </div>
          )}
        </div>
        <AddButton/>
      </div>
    </div>
  );
}
