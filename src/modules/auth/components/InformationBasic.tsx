export const InformationBasic = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 gap-3 sm:gap-6">
        <div className="">
          <label
            htmlFor="nombre"
            className="block mb-2 text-sm font-medium text-black"
          >
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            className="bg-white border border-gray-300 text-gray-800 placeholder-gray-500 text-sm rounded-lg block w-full p-2.5 py-3.5"
            placeholder="Nombre..."
          />

          {/* <p className="mt-2 text-sm text-red-600">
          <span className="font-medium">Well done!</span> Some success
          message.
        </p> */}
        </div>
        <div className="">
          <label
            htmlFor="lastname"
            className="block mb-2 text-sm font-medium text-black"
          >
            Apellido
          </label>
          <input
            type="text"
            id="lastname"
            className="bg-white border border-gray-300 text-gray-800 placeholder-gray-500 text-sm rounded-lg block w-full p-2.5 py-3.5"
            placeholder="Apellido"
          />
        </div>
      </div>
      <div className="">
        <label
          htmlFor="cellphone"
          className="block mb-2 text-sm font-medium text-black"
        >
          Numero de telefono
        </label>
        <input
          type="number"
          id="cellphone"
          className="bg-white border border-gray-300 text-gray-800 placeholder-gray-500 text-sm rounded-lg block w-full p-2.5 py-3.5"
          placeholder="Número de telefono..."
        />
      </div>
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
    </>
  );
};
