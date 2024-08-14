import { NavLink } from "react-router-dom";

export const LoginPage = () => {
  return (
    <>
      <div className="w-full h-[calc(100vh-5rem)] flex justify-center items-center">
        <div className="min-w-[25rem] max-w-[900px] bg-white rounded-lg shadow-sm flex justify-between flex-col px-10 py-8">
          <div className="flex flex-col items-start">
            <h3 className="text-2xl mb-4">Iniciar sesión</h3>
            <p className="mb-1">¿Es tu primera vez en CV Builder?</p>
            <NavLink className="link text-[12px] font-bold" to="/register">
              Crea una cuenta aquí
            </NavLink>
          </div>
          <div className="divider"></div>

          <form className="flex flex-col items-center">
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
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" name="remember" />
                <label>Recuérdame</label>
              </div>
              <NavLink className="link text-[12px] font-bold" to="/">
                He olvidado la contraseña
              </NavLink>
            </div>
            <input
              className="btn w-full mb-4 px-4 py-2 border-[1px] border-[#cccccc] rounded-lg"
              type="submit"
              value="Inicia sesión"
            />
          </form>
        </div>
      </div>
    </>
  );
};
