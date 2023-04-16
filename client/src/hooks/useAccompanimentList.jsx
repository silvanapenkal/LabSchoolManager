import { useState, useEffect } from 'react'
import { apiService }  from "../services/api"

const useAccompanimentList = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async (filter) => {
    setIsLoading(true)
    const paramFilter = filter ? `title_like=${filter}&` : ''
    const response = await apiService.get(`accompaniments?${paramFilter}_expand=user&_expand=student`)
    setError(response.error)
    setData(response.data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  },[])


  
  

  return {
    data,
    isLoading,
    error,
    fetchData
  }

  
}

export default useAccompanimentList