import { useState, useEffect } from "react";
import { apiService } from "../services/api";

const useAccompanimentDetails = (id) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if (!id) {
      return;
    }
    setIsLoading(true);
    const response = await apiService.get(`/accompaniments?id=${id}`);
    setError(response.error);
    setData(response.data?.[0]); // tenta pegar o primeiro item
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const accompanimentPut = async (data) => {
    setIsLoading(true);
    if (data) {
      const response = await apiService.put(`accompaniments/${data.id}`, data);
      setError(response.error);
      setData(response.data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    accompanimentPut();
  }, []);

  return {
    data,
    isLoading,
    error,
    accompanimentPut,
  };
};

export default useAccompanimentDetails;
