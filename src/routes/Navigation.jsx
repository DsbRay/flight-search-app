import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";

const Navigation = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Navigation;
