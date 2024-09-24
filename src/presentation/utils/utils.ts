import axios from "axios";

export const readJSONFromEndpoint = async (url: string): Promise<any> => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error al leer el JSON:", error);
    throw error;
  }
};
