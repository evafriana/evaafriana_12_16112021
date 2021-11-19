import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useAxios = ({
  baseUrl = "http://localhost:3000/",
  endpoint,
  method,
  body = null,
  headers = null,
}) => {
  const url = baseUrl + endpoint;

  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = useCallback(() => {
    axios[method](url, JSON.parse(headers), JSON.parse(body))
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setloading(false);
      });
  }, [method, url, headers, body]);

  useEffect(() => {
    fetchData();
  }, [method, url, body, headers, fetchData]);

  return { response, error, loading };
};

export default useAxios;
