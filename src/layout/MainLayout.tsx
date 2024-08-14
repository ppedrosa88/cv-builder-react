import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export const MainLayout = () => {
  return (
    <div className="bg-primary min-h-[100vh]">
      <NavBar />
      <Outlet />
    </div>
  );
};
