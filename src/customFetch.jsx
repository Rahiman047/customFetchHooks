import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const customFetch = (url) => {
  const [data, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setLoading(false);
    const resData = await axios.get(url);
    const resStatus = await resData.status;
    const userData = await resData.data;

    if (resStatus == 200) {
      setError(false);
      setUserData(userData);
    }
    setError(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};

export default customFetch;
