interface Municipality {
  id: number;
  name: string;
  shortName: string;
}

interface DocumentType {
  id: number;
  name: string;
  shortName: string;
}

interface City {
  id: number;
  name: string;
  shortName: string;
}

interface Gender {
  id: number;
  name: string;
}

export const listMunicipalities: Municipality[] = [
  { id: 1, name: "Bolivar", shortName: "BL" },
  { id: 2, name: "Bogota", shortName: "BO" },
  { id: 3, name: "Antioquia", shortName: "AN" },
  { id: 4, name: "Valle del Cauca", shortName: "VC" },
  { id: 5, name: "Atlántico", shortName: "AT" },
  { id: 6, name: "Santander", shortName: "ST" },
  { id: 7, name: "Cundinamarca", shortName: "CU" },
  { id: 8, name: "Magdalena", shortName: "MG" },
  { id: 9, name: "Nariño", shortName: "NA" },
  { id: 10, name: "Cauca", shortName: "CA" },
];

export const listDocumentTypes: DocumentType[] = [
  { id: 1, name: "Cédula de Ciudadanía", shortName: "C.C." },
  { id: 2, name: "Tarjeta de Identidad", shortName: "T.I." },
  { id: 3, name: "Registro Civil", shortName: "R.C." },
  { id: 4, name: "Pasaporte", shortName: "PPT" },
  { id: 5, name: "Cédula de Extranjería", shortName: "C.E." },
];

export const listCities: City[] = [
  { id: 1, name: "Cartagena", shortName: "CT" },
  { id: 2, name: "Medellín", shortName: "MD" },
  { id: 3, name: "Bogotá", shortName: "BO" },
  { id: 4, name: "Cali", shortName: "CL" },
  { id: 5, name: "Barranquilla", shortName: "BA" },
  { id: 6, name: "Bucaramanga", shortName: "BU" },
  { id: 7, name: "Santa Marta", shortName: "SM" },
  { id: 8, name: "Manizales", shortName: "MZ" },
  { id: 9, name: "Pereira", shortName: "PR" },
  { id: 10, name: "Villavicencio", shortName: "VL" },
];

export const listGenders: Gender[] = [
  { id: 1, name: "Hombre" },
  { id: 2, name: "Mujer" },
];
