import { listGenders, listMunicipalities } from "../helpers/listRegister";

export const InformationOther = () => {
  return (
    <>
      <div className="">
        <label
          htmlFor="gender"
          className="block mb-2 text-sm font-medium text-black"
        >
          Genero
        </label>
        <select
          className="bg-white border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 py-3.5"
          defaultValue="0"
          id="gender"
        >
          <option value="0" disabled>
            Seleccionar
          </option>
          {listGenders.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="">
        <label
          htmlFor="birthDate"
          className="block mb-2 text-sm font-medium text-black"
        >
          Fecha de nacimiento
        </label>
        <input
          type="date"
          id="birthDate"
          className="bg-white border border-gray-300 text-gray-800 placeholder-gray-500 text-sm rounded-lg block w-full p-2.5 py-3.5"
          placeholder="..."
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-3 sm:gap-6">
        <div className="">
          <label
            htmlFor="municipality"
            className="block mb-2 text-sm font-medium text-black"
          >
            Municipio
          </label>
          <select
            className="bg-white border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 py-3.5"
            defaultValue="0"
            id="municipality"
          >
            <option value="0" disabled>
              Seleccionar
            </option>
            {listMunicipalities.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className="">
          <label
            htmlFor="location"
            className="block mb-2 text-sm font-medium text-black"
          >
            Dirección
          </label>
          <input
            type="text"
            id="location"
            className="bg-white border border-gray-300 text-gray-800 placeholder-gray-500 text-sm rounded-lg block w-full p-2.5 py-3.5"
            placeholder="Dirección..."
          />
        </div>
      </div>
    </>
  );
};
