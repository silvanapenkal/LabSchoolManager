import { useState } from 'react'


import { apiService } from '../services/api'

const useUserRegister = () => {
  const [data, setData] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)


  const registerUser = async (course) => {
    setIsSubmitting(true)
    const response = await apiService.post('/register', course)
    console.log(response)
    setError(response.error)
    setData(response.data)
    setIsSubmitting(false)
    if (response.error) {
      alert(response.error)

    }

  }

  return {
    user: data,
    isSubmitting,
    error,
    registerUser
  }
}

export default useUserRegister

