import AddData from "./pages/AddData";
import Auth from "./pages/Auth";
import Details from "./pages/Details";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import EditData from "./pages/EditData";

export default function App() {
  return (
    <div className="bg-gradient-to-tr from-black via-slate-900 to-slate-700 min-h-[100vh]">
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route
            path="/add"
            element={
              <ProtectedRoute>
                <AddData />
              </ProtectedRoute>
            }
          />
          <Route
            path="/details"
            element={
              <ProtectedRoute>
                <Details />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit"
            element={
              <ProtectedRoute>
                <EditData />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
