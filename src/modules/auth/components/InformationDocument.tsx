import { listCities, listDocumentTypes } from "../helpers/listRegister";

export const InformationDocument = () => {
  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-6">
        <div className="">
          <label
            htmlFor="typeDocument"
            className="block mb-2 text-sm font-medium text-black"
          >
            Tipo de documento
          </label>
          <select
            className="bg-white border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 py-3.5"
            defaultValue="0"
            id="typeDocument"
          >
            <option value="0" disabled>
              Seleccionar
            </option>
            {listDocumentTypes.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <label
            htmlFor="documentNumber"
            className="block mb-2 text-sm font-medium text-black"
          >
            Numero de documento
          </label>
          <input
            type="number"
            id="documentNumber"
            className="bg-white border border-gray-300 text-gray-800 placeholder-gray-500 text-sm rounded-lg block w-full p-2.5 py-3.5"
            placeholder="1234567890..."
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-3 sm:gap-6">
        <div className="">
          <label
            htmlFor="nationality"
            className="block mb-2 text-sm font-medium text-black"
          >
            Nacionalidad
          </label>
          <select
            className="bg-white border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 py-3.5"
            defaultValue="0"
            id="nationality"
          >
            <option value="0" disabled>
              Seleccionar
            </option>
            <option value="CO">Colombia</option>
          </select>
        </div>
        <div className="">
          <label
            htmlFor="placeExpedition"
            className="block mb-2 text-sm font-medium text-black"
          >
            Lugar de expedición
          </label>
          <select
            className="bg-white border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 py-3.5"
            defaultValue="0"
            id="placeExpedition"
          >
            <option value="0" disabled>
              Seleccionar
            </option>
            {listCities.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <label
            htmlFor="dateExpedition"
            className="block mb-2 text-sm font-medium text-black"
          >
            Fecha de expedición
          </label>
          <input
            type="date"
            id="dateExpedition"
            className="bg-white border border-gray-300 text-gray-800 placeholder-gray-500 text-sm rounded-lg block w-full p-2.5 py-3.5"
          />
        </div>
      </div>
    </>
  );
};
