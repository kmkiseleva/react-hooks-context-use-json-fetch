import { useState, useEffect } from "react";

const useJsonFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const sendRequest = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(options.body),
        });
        if (!response.ok) {
          throw new Error("Error!");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setError(null);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    sendRequest();
  }, [options.method, options.headers, options.body, url]);

  return [data, loading, error];
};

export default useJsonFetch;
