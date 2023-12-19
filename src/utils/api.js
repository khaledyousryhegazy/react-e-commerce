import axios from "axios";

const BASE_URL = "https://ecommerce.routemisr.com/api/v1";

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(BASE_URL + url);
    return data;
  } catch (err) {
    return err;
  }
};
