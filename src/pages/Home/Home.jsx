import AuthProvider from "../../providers/AuthProvider";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();

  return <div>{user}</div>;
};

export default Home;
