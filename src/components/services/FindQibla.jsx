const QIBLA_API = import.meta.env.VITE_API_BASE_URL_QIBLA;
const PROXY_URL = import.meta.env.VITE_PROXY_URL;

export const getQiblaDirection = async (latitude, longitude) => {


  const response = await fetch(
    `${PROXY_URL}+${QIBLA_API}?latitude=${latitude}&longitude=${longitude}`,
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
