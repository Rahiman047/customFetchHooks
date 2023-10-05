import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const customFetch = (url) => {
  const [data, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const resData = await axios.get(url);
      const userData = await resData.data;
      const resStatus = await resData.status;

      if (resStatus == 200) {
        setError(false);
        setUserData(userData);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};

export default customFetch;
