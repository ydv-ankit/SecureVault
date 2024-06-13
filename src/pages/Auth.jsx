import React from "react";
import Login from "../components/Login";
import Register from "../components/Register";

export default function Auth() {
  const [isLogin, setIsLogin] = React.useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="bg-gradient-to-tr from-black via-slate-900 to-slate-700 h-screen overflow-hidden">
      <div className="md:w-[500px] mx-auto h-full flex justify-center items-center">
        {isLogin ? (
          <Login toggleForm={toggleForm} />
        ) : (
          <Register toggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
}
