import { Alert } from '@mui/material'

type Type = 'success' | 'info' | 'warning' | 'error'

type Props = {
  type: Type
  message: string
}

export default function Notification({ type = 'info', message }: Props) {
  return (
    <>
      <Alert variant="filled" severity={type}>
        {message}
      </Alert>
    </>
  )
}
