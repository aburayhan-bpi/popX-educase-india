import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import CustButton from "../../components/CustButton";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createUser, user } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    try {
      // Grab input values

      const form = new FormData(e.target);
      const name = form.get("name");
      const number = form.get("number");
      const email = form.get("email");
      const password = form.get("password");
      const company = form.get("company");
      const agency = form.get("agency");

      // Make an object for Account info
      const userInfo = {
        name,
        number,
        email,
        password,
        company,
        agency,
      };

      if (!name || !number || !email || !password || !company || !agency) {
        return setError("is required.");
      }

      const result = createUser(userInfo);
      if (result.account_created === true) {
        toast.success("Account created!");
        setError("");
        e.target.reset();
        if(user){
            navigate(`/profile`)
        }
      }
    } catch (error) {
      console.log("error while creating account", error);
    }
  };
  return (
    <div className="">
      <div className="max-w-sm mx-auto border border-gray-300 rounded h-fit my-10 flex flex-col items-center justify-start pt-12">
        <div></div>
        <div className="w-full px-4">
          <h2 className="text-2xl font-bold max-w-[12rem]">
            Create your PopX account
          </h2>
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col mt-6 transition-all duration-300"
          >
            {/* Full Name */}
            <fieldset className="relative border border-gray-300 rounded px-3 pt-1 pb-2">
              <legend className="text-[#6c25ff] font-medium text-sm pl-2 pr-3">
                Full Name <span className="text-red-500">*</span>
              </legend>

              <input
                type="name"
                name="name"
                placeholder="Enter full name"
                className="w-full text-sm border-none p-0 focus:outline-none"
              />
            </fieldset>
            {error && (
              <p className="text-xs text-red-500 transition-all duration-300 mt-0">
                Name {error}
              </p>
            )}
            {/* Phone Number */}
            <fieldset className="relative border border-gray-300 rounded px-3 pt-1 pb-2 mt-4">
              <legend className="text-[#6c25ff] font-medium text-sm pl-2 pr-3">
                Phone number <span className="text-red-500">*</span>
              </legend>
              <input
                name="number"
                type="number"
                placeholder="Enter phone number"
                className="w-full text-sm border-none p-0 focus:outline-none"
              />
            </fieldset>
            {error && (
              <p className="text-xs text-red-500 transition-all duration-300 mt-0">
                Phone Number {error}
              </p>
            )}
            {/* Email Address */}
            <fieldset className="relative border border-gray-300 rounded px-3 pt-1 pb-2 mt-4">
              <legend className="text-[#6c25ff] font-medium text-sm pl-2 pr-3">
                Email address <span className="text-red-500">*</span>
              </legend>
              <input
                name="email"
                type="email"
                placeholder="Enter email address"
                className="w-full text-sm border-none p-0 focus:outline-none"
              />
            </fieldset>
            {error && (
              <p className="text-xs text-red-500 transition-all duration-300 mt-0">
                Email {error}
              </p>
            )}
            {/* Password */}
            <fieldset className="relative border border-gray-300 rounded px-3 pt-1 pb-2 mt-4">
              <legend className="text-[#6c25ff] font-medium text-sm pl-2 pr-3">
                Password <span className="text-red-500">*</span>
              </legend>
              <input
                name="password"
                type="password"
                placeholder="Enter password"
                className="w-full text-sm border-none p-0 focus:outline-none"
              />
            </fieldset>
            {error && (
              <p className="text-xs text-red-500 transition-all duration-300 mt-0">
                Password {error}
              </p>
            )}
            {/* Comapny Info */}
            <fieldset className="relative border border-gray-300 rounded px-3 pt-1 pb-2 mt-4">
              <legend className="text-[#6c25ff] font-medium text-sm pl-2 pr-3">
                Company name
              </legend>
              <input
                name="company"
                type="text"
                placeholder="Enter phone number"
                className="w-full text-sm border-none p-0 focus:outline-none"
              />
            </fieldset>
            {/* {error && (
              <p className="text-red-500 transition-all duration-300 mt-0">
                {error}
              </p>
            )} */}
            {/* Are you an Agency Question */}
            <div className="mt-4">
              <label className="block font-medium text-sm mb-2 text-gray-700">
                Are you an Agency?
              </label>
              <div className="flex items-center gap-6">
                {/* YES */}
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="agency" value="yes" className=" " />

                  <span className="text-sm">Yes</span>
                </label>

                {/* NO */}
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="agency" value="no" className=" " />

                  <span className="text-sm">No</span>
                </label>
              </div>
              {error && (
                <p className="text-xs text-red-500 transition-all duration-300 mt-0">
                  Selection {error}
                </p>
              )}
            </div>
            {/* Submit Button */}
            <CustButton
              btnText={"Login"}
              btnStyle={` mt-10 mb-4 bg-[#6c25ff] hover:bg-[#7e3eff] transition-all duration-300 text-white rounded w-full py-3 font-medium text-md cursor-pointer`}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
