import { Outlet } from "react-router-dom";
import { Header } from "../components";

const Navigation = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Navigation;
