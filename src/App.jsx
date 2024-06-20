import AddData from "./pages/AddData";
import Auth from "./pages/Auth";
import Details from "./pages/Details";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import EditData from "./pages/EditData";

export default function App() {
  return (
    <div className="min-h-[100vh] w-full">
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
          <Route
            path="*"
            element={
              <h1 className="text-white text-center text-2xl">404 Not Found</h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
