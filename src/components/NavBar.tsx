import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div className="bg-white flex justify-between items-center w-full border-b-[1px] h-[5rem] px-[1rem]">
        <NavLink className="logo" to="/">
          CV Builder
        </NavLink>
        <div className="hidden md:block">
          <NavLink className="btn" to="/login">
            Iniciar Sesión
          </NavLink>
          <NavLink className="btn ml-4" to="/register">
            Registrarse
          </NavLink>
        </div>
      </div>
    </>
  );
};
