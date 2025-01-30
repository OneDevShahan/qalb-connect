import { HEADER } from "../utility/Utils";

const QIBLA_API = import.meta.env.VITE_API_BASE_URL_QIBLA;
const PROXY_URL = import.meta.env.VITE_API_PROXY_URL;
const FIND_QIBLA = import.meta.env.VITE_API_FIND_QIBLA;

export const getQiblaDirection = async (latitude, longitude) => {
  const response = await fetch(
    `${FIND_QIBLA}/qibla/${latitude}/${longitude}`,
      { 
        mode: "cors",
        headers: HEADER,
      }
  );
  console.log("Qibla",response);
  return response.json().data;
};

/// https://api.islamicdevelopers.com/v1/al-asma-ul-husna?number=1
export const getAllAsmaulHusna = async () => {

  const response = await fetch(
    `${PROXY_URL}+${QIBLA_API}/al-asma-ul-husna/?number=1`,
    {
      mode: "cors",
      headers: HEADER,
    }
  );
  return response.json().data;

};
