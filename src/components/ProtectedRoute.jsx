import useAuthStore from "../lib/authStore";

export default function ProtectedRoute({ children }) {
  const { user } = useAuthStore();
  if (!user) {
    return window.location.href = "/";
  }
  return <>{children}</>;
}
