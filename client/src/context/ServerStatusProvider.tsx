import axios from 'axios'
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

import { ENV } from '@/conf'

type ServerStateType = {
  status: boolean
  message: string
}

export const ServerStatusContext = createContext<ServerStateType | null>(null)

export default function ServerStatusProvider({ children }: PropsWithChildren) {
  const [serverStatus, setServerStatus] = useState<ServerStateType>({
    status: false,
    message: '',
  })

  useEffect(() => {
    const checkServerStatus = async () => {
      try {
        const { data } = await axios.get(`${ENV.SERVER_URL}/api/status`)

        if (data.status) {
          setServerStatus(data)
        } else {
          setServerStatus({ status: false, message: 'Server is not running' })
        }
      } catch (error) {
        setServerStatus({ status: false, message: 'Wait for server to start' })
      }
    }

    checkServerStatus()

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
