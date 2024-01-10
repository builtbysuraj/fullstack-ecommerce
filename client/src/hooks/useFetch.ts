import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

type FetchState = {
  data: any | null
  isLoading: boolean
  error: Error | null
}

export default function useFetch(URL: string): FetchState {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  const apiCall = useCallback(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL)
        setData(response.data)
      } catch (error) {
        setError(error as Error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [URL])

  useEffect(() => {
    apiCall()
  }, [apiCall]) 

  return { data, isLoading, error }
}
