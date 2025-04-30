import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center mt-20 space-y-4">
      <h2>404 | Not Found</h2>
      <Link to="/">
        <button className="px-8 py-3 rounded-md text-sm font-semibold bg-sky-600 text-white cursor-pointer">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
