import { useState, useEffect } from "react";
import { apiService } from "../services/api";

const usePedagogueList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (filter) => {
    setIsLoading(true);
    const response = await apiService.get(`/users`);
    setError(response.error);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    pedagogueList: data,
    isLoading,
    error,
    fetchData,
  };
};

export default usePedagogueList;