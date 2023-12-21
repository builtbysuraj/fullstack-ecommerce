import { useEffect, useState } from "react"

type FetchState = {
  data: any | null
  isLoading: boolean
  error: Error | null
}

export default function useFetch(URL: string): FetchState {
  const [data, setData] = useState<any | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const response = await fetch(URL)
        if (!response.ok) throw new Error("Response isn't OK")
        const parseData = await response.json()
        setData(parseData)
      } catch (error) {
        setError(error as Error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [URL])

  return { data, isLoading, error }
}
