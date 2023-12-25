import { useCallback, useEffect, useState } from 'react'

export default function useDebounce(value: any, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  const debouncer = useCallback(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  useEffect(debouncer, [value, delay])

  return debouncedValue
}
