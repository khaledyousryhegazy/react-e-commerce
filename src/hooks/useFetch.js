import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    // Fetch data
    fetchDataFromApi(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((error) => {
        setError(error);
      });
  }, [url]);

  return { loading, data, error };
};
