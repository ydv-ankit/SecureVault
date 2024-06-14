import useAuthStore from "../lib/authStore";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children}) {
  const { user } = useAuthStore();
  // console.log(user);
  return <>{user ? children : <Navigate to={"/"} />}</>;
}
