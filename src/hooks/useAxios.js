import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const transform = (data, type) => {
  switch (type) {
    case "chartline":
      const week = ["L", "M", "M", "J", "V", "S", "D"];
      data.data.sessions.map((d) => {
        d.day = week[d.day - 1];
      });
      break;
    case "chartbar":
      data.data.sessions.map((d) => {
        d.day = d.day.substr(-1);
      });
      break;
    case "chartradar":
      const kind = data.data.kind;
      const kindFr = [
        "Intensité",
        "Vitesse",
        "Force",
        "Endurance",
        "Energi",
        "Cardio",
      ];
      Object.keys(kind).map((key) => {
        kind[key] = kindFr;
      });
      break;
    default:
      break;
  }
  return data;
};

const useAxios = ({
  baseUrl = "http://localhost:3000/",
  endpoint,
  method,
  body = null,
  headers = null,
  type,
}) => {
  const url = baseUrl + endpoint;

  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = useCallback(() => {
    axios[method](url, JSON.parse(headers), JSON.parse(body))
      .then((res) => {
        let dataTmp = transform(res.data, type);
        setResponse(dataTmp);
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
