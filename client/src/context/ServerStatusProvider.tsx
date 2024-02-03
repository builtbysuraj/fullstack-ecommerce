import { ENV } from '@/conf'
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

export const ServerStatusContext = createContext<string | null>(null)

export default function ServerStatusProvider({ children }: PropsWithChildren) {
  const [serverStatus, setServerStatus] = useState<string | null>('')

  useEffect(() => {
    const checkServerStatus = () => {
      fetch(`${ENV.SERVER_URL}/api/status`)
        .then((response) => response.json())
        .then((data) => {
          if (data.status) {
            setServerStatus(data.message)
          } else {
            setServerStatus('Server is not running')
          }
        })
        .catch(() => setServerStatus('Server is not running'))
    }

    // Call immediately
    checkServerStatus()

    // Then call every 5 seconds
    const intervalId = setInterval(checkServerStatus, 10000)

    // Clear interval on component unmount
    return () => clearInterval(intervalId)
  }, [])

  return (
    <ServerStatusContext.Provider value={serverStatus}>
      {children}
    </ServerStatusContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useServerStatus = () => {
  const context = useContext(ServerStatusContext)
  if (context === undefined) {
    throw new Error(
      'useServerStatus must be used within an ServerStatusProvider'
    )
  }
  return context
}
