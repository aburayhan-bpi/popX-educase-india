import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {path: "/",element: <Home />, errorElement: <NotFound/>},
  { path: "/auth/login", element: <Login /> },
  { path: "/auth/signup", element: <SignUp /> },
]);

export default router;
