import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile/Profile";

const router = createBrowserRouter([
  {path: "/",element: <Home />, errorElement: <NotFound/>},
  { path: "/auth/login", element: <Login /> },
  { path: "/auth/signup", element: <SignUp /> },
  { path: "/profile", element: <Profile /> },
]);

export default router;
