import { NavLink } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <>
      <div className="w-full h-[calc(100vh-5rem)] flex justify-center items-center">
        <div className="bg-white w-[40rem] rounded-lg flex justify-between flex-col shadow-sm px-8 py-10">
          <div className="flex flex-col items-start">
            <h3 className="text-2xl mb-4 font-semibold">Registro</h3>
            <p className="mb-1">
              ¿Tienes cuenta en CV Builder?{" "}
              <span>
                <NavLink className="link text-[12px] font-bold" to="/login">
                  Inicia sesión
                </NavLink>
              </span>
            </p>
          </div>
          <div className="divider"></div>

          <form className="flex flex-col items-center">
            <input
              className="w-full mb-4 px-4 py-2 border-[1px] border-[#cccccc] rounded-lg"
              id="name"
              type="text"
              placeholder="Nombre"
            />
            <input
              className="w-full mb-4 px-4 py-2 border-[1px] border-[#cccccc] rounded-lg"
              id="surname"
              type="text"
              placeholder="Apellidos"
            />
            <input
              className="w-full mb-4 px-4 py-2 border-[1px] border-[#cccccc] rounded-lg"
              id="email"
              type="email"
              placeholder="Email"
            />
            <input
              className="w-full mb-4 px-4 py-2 border-[1px] border-[#cccccc] rounded-lg"
              id="password"
              type="password"
              placeholder="Contraseña"
            />
            <div className="w-full flex items-center justify-between mb-8 text-sm">
              <div className="flex items-center justify-center gap-2">
                <input type="checkbox" id="accept-terms" name="accept-terms" />
                <label>Acepto los términos y condiciones</label>
              </div>
            </div>
            <input
              className="btn w-full mb-4 px-4 py-2 border-[1px] border-[#cccccc] rounded-lg"
              type="submit"
              value="Regístrate gratis"
            />
          </form>
        </div>
      </div>
    </>
  );
};
