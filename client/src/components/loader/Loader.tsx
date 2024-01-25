import { CircularProgress } from '@mui/material'

export default function Loader() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        maxWidth: '100vw',
      }}
    >
      <CircularProgress size="3rem" />
    </div>
  )
}
