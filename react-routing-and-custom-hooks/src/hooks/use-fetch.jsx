import { useEffect, useState } from "react";

function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData(url) {
    setLoading(true);
    try {
      const response = await fetch(url);

      const result = await response.json();

      if (result) {
        setData(result);
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}

export default useFetch;
