import { ServerStatusContext } from '@/context/ServerStatusProvider'
import { useContext } from 'react'

export default function useServerStatus() {
  const context = useContext(ServerStatusContext)
  if (context === undefined) {
    throw new Error(
      'useServerStatus must be used within an ServerStatusProvider'
    )
  }
  return context
}
