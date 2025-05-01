import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import CustButton from "../../components/CustButton";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");

  const loginForm = (e) => {
    e.preventDefault();
    setError("");

    try {
      const form = new FormData(e.target);
      const email = form.get("email");
      const password = form.get("password");

      if (!email || !password) {
        return setError("Fillup all fields.");
      }

      const result = loginUser(email, password);
      if (result.isLogged === true) {
        toast.success("Logged In");
        setError("");
        navigate("/profile");
      } else if (result.isLogged === false) {
        // toast.error("Login Failed");
        setError("Invalid credentials, try again.");
      }
    } catch (error) {
      console.log("error while form submitting...", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <div className="max-w-sm mx-auto border border-gray-300 rounded h-fit my-10 flex flex-col items-center justify-start pt-20">
        <div></div>
        <div className="px-4 mb-10">
          <Link className="bg-sky-300 px-4 py-2 rounded-lg" to="/">
            Home
          </Link>
          <h2 className="text-2xl font-bold mt-6">
            Signin to your PopX account
          </h2>
          <p className="text-gray-500 ">
            Securely access your personalized workspace and data
          </p>
          {/* Form */}
          <form
            onSubmit={loginForm}
            className="flex flex-col mt-6 transition-all duration-300"
          >
            <fieldset className="relative border border-gray-300 rounded px-3 pt-1 pb-2">
              <legend className="text-[#6c25ff] font-medium text-sm pl-2 pr-3">
                Email Address
              </legend>

              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                className="w-full text-sm border-none p-0 focus:outline-none"
              />
            </fieldset>
            {error && (
              <p className="text-red-500 transition-all duration-300 mt-0">
                {error}
              </p>
            )}
            <fieldset className="relative border border-gray-300 rounded px-3 pt-1 pb-2 mt-4">
              <legend className="text-[#6c25ff] font-medium text-sm pl-2 pr-3">
                Password
              </legend>
              <input
                name="password"
                type="password"
                placeholder="Enter password"
                className="w-full text-sm border-none p-0 focus:outline-none"
              />
            </fieldset>
            {error && (
              <p className="text-red-500 transition-all duration-300 mt-0">
                {error}
              </p>
            )}
            <CustButton
              btnText={"Login"}
              btnStyle={`${
                loading && "disabled"
              } mt-4 bg-[#6c25ff] hover:bg-[#7e3eff] transition-all duration-300 text-white rounded w-full py-3 font-medium text-md cursor-pointer`}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
