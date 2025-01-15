const QIBLA_API = import.meta.env.VITE_API_BASE_URL_QIBLA;
const PROXY_URL = import.meta.env.VITE_API_PROXY_URL;

export const getQiblaDirection = async (latitude, longitude) => {
  const response = await fetch(
    `${PROXY_URL}+${QIBLA_API}/qibla?latitude=${latitude}&longitude=${longitude}`,
      { 
        mode: "cors",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', // This only works if the server allows it.
        }
      }
  );
  return response.json().data;
};

/// https://api.islamicdevelopers.com/v1/al-asma-ul-husna?number=1
export const getAllAsmaulHusna = async () => {

  const response = await fetch(
    `${PROXY_URL}+${QIBLA_API}/al-asma-ul-husna/?number=1`,
    {
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // This only works if the server allows it.
      },
    }
  );
  return response.json().data;

};
