import React from "react";
import { toast } from "react-hot-toast";
import { useAppContext } from "../Context/Appcontext";

const Login = () => {
  const { setShowLogin, axios, setToken, navigate } = useAppContext();

  const [state, setState] = React.useState("login");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const OnsubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post(`/api/user/${state}`, {
        name,
        email,
        password,
      });

      if (data.success) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        setShowLogin(false);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      onClick={() => setShowLogin(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6"
    >
      <form
        onSubmit={OnsubmitHandler}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 flex flex-col gap-5"
      >
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800">
          <span className="text-orange-400">User</span>{" "}
          {state === "login" ? "Login" : "Sign Up"}
        </h2>

        {/* Name */}
        {state === "register" && (
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>

            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-orange-400"
            />
          </div>
        )}

        {/* Email */}
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>

          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-orange-400"
          />
        </div>

        {/* Password */}
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>

          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-orange-400"
          />
        </div>

        {/* Toggle Login/Register */}
        <p className="text-sm text-center text-gray-600">
          {state === "register" ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setState("login")}
                className="text-orange-400 cursor-pointer hover:underline"
              >
                Login
              </span>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <span
                onClick={() => setState("register")}
                className="text-orange-400 cursor-pointer hover:underline"
              >
                Sign Up
              </span>
            </>
          )}
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-orange-300 hover:bg-orange-500 transition-all duration-300 rounded-lg text-black font-medium cursor-pointer"
        >
          {state === "register" ? "Create Account" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;