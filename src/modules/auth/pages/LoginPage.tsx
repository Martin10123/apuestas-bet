import { AuthLayout } from "../layouts/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout
      title="Iniciar sesión y comienza a ganar"
      description="Ingresa tus datos para comenzar a disfrutar de la mejor experiencia de apuestas en línea."
      image="/img-register.svg"
    >
      <form className="grid gap-4 mt-8 lg:max-w-md lg:mx-auto">
        <div className="">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-black"
          >
            Correo
          </label>
          <input
            type="email"
            id="email"
            className="bg-white border border-gray-300 text-gray-800 placeholder-gray-500 text-sm rounded-lg block w-full p-2.5 py-3.5"
            placeholder="Correo..."
          />
        </div>

        <div className="">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-black"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="bg-white border border-gray-300 text-gray-800 placeholder-gray-500 text-sm rounded-lg block w-full p-2.5 py-3.5"
            placeholder="Contraseña..."
          />
        </div>

        <p className="text-sm text-right text-gray-500 mt-1">
          ¿Olvidaste tu contraseña?{" "}
          <span className="text-green-500 hover:underline cursor-pointer">
            Recupérala
          </span>
        </p>

        <button className="w-full py-3.5 px-5 mt-1 text-sm font-medium text-white focus:outline-none bg-green-500 rounded-lg border border-gray-200 hover:bg-green-600">
          Ingresar
        </button>
      </form>

      <p className="my-4 text-sm text-center text-gray-500">
        ¿Aún no tienes una cuenta?{" "}
        <span className="text-green-500 hover:underline cursor-pointer">
          Regístrate
        </span>
      </p>
    </AuthLayout>
  );
};
