import AuthProvider from "../../providers/AuthProvider";
// import useAuth from "../../hooks/useAuth";
import CustButton from "../../components/CustButton";
import { Link } from "react-router";

const Home = () => {
  //   const { user } = useAuth();
  //   console.log(user);
  return (
    <div className="">
      <div className="max-w-sm mx-auto border border-gray-300 rounded h-[85vh] my-10 flex flex-col items-center justify-between">
        <div></div>
        <div className="px-4 mb-10">
          <h2 className="text-2xl font-bold">Welcome to PopX</h2>
          <p className="text-gray-500">
            Simplify tasks, connect teams, and boost productivity - all in one
            platform
          </p>
          {/* Buttons */}
          <div className="flex flex-col gap-3 mt-6">
            <Link to="/auth/signup">
              <CustButton
                btnText={"Create Account"}
                btnStyle={
                  "bg-[#6c25ff] text-white rounded w-full py-2 font-medium text-md cursor-pointer"
                }
              />
            </Link>
            <Link to="auth/login">
              <CustButton
                btnText={"Already Registered? Login"}
                btnStyle={
                  "bg-[#cebafb] text-black rounded w-full py-2 font-medium text-md cursor-pointer"
                }
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
