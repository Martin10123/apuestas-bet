import { InformationBasic } from "../components/InformationBasic";
import { InformationDocument } from "../components/InformationDocument";
import { InformationOther } from "../components/InformationOther";
import { AuthLayout } from "../layouts/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout
      title="Registrate y comienza a ganar"
      description="Ingresa tus datos para crear tu cuenta y comienza a ganar con BetAgain, la mejor plataforma de apuestas deportivas."
      image="/img-register.svg"
    >
      <InformationBasic />

      <InformationDocument />

      <InformationOther />

      <button className="w-full py-3.5 px-5 mt-4 text-sm font-medium text-white focus:outline-none bg-green-500 rounded-lg border border-gray-200 hover:bg-green-600">
        Registrarse
      </button>
    </AuthLayout>
  );
};
