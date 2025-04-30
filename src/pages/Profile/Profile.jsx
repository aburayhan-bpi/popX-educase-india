import React, { useEffect } from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import { LiaHomeSolid } from "react-icons/lia";
import { FaCamera } from "react-icons/fa";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="">
      <div className="max-w-sm mx-auto border bg-gray-100 border-gray-300 rounded h-[85vh] my-10 flex flex-col items-start justify-start">
        <div className="flex items-center justify-between bg-white w-full py-4 px-4">
          <h2>Account Settings</h2>
          <div>
            <Link to="/">
              <LiaHomeSolid />
            </Link>
          </div>
        </div>
        <div className="px-4 mb-10">
          <div className="flex items-center justify-start gap-6 mb-4">
            <div className="relative">
              <img
                className=" w-20 mt-4 rounded-full"
                src="./user.webp"
                alt=""
              />
              <div className="absolute bottom-0 right-0 bg-violet-500 p-1 rounded-full text-white text-sm cursor-pointer">
                <FaCamera />
              </div>
            </div>
            <div className="">
              <p className="font-semibold">{user?.name}</p>
              <p className="text-sm">{user?.email}</p>
            </div>
          </div>
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            iste vel blanditiis nobis necessitatibus neque alias et nihil quos
            nesciunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
