import { useState } from "react";

import { apiService } from "../services/api";

const useUserRegister = () => {
  const [data, setData] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const postRequest = async (path, body) => {
    setIsSubmitting(true);
    const response = await apiService.post(path, body);
    console.log(response);
    setError(response.error);
    setData(response.data);
    setIsSubmitting(false);
    if (response.error) {
      alert(response.error);
    }
    return response.data;
  };

  return {
    user: data,
    isSubmitting,
    error,
    postRequest,
  };
};

export default useUserRegister;
