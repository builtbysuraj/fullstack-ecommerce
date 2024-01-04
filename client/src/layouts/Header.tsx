import { AppBar, Container, TextField } from '@mui/material'
import { Link } from 'react-router-dom'

import useHandleDispatch from '../hooks/useHandleDispatch'
import { useAppSelector } from '../state/store'

export default function Header() {
  const stateData = useAppSelector((state) => state.filtersReducer)
  const { handleSearchQuery } = useHandleDispatch()

  return (
    <AppBar elevation={1} position="sticky" sx={{ height: '4rem' }}>
      <Container>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <h3>
            <Link to="/">Flipkart</Link>
          </h3>
          <TextField
            sx={{ bgcolor: 'white', m: 1, width: '100%' }}
            placeholder="Search product or category"
            size="small"
            fullWidth
            value={stateData.searchQuery}
            onChange={(e) => handleSearchQuery(e.target.value)}
          />
          <div>
            <Link to="/products"> Product Listing </Link>
            <Link to="/cart"> Cart </Link>
          </div>
        </div>
      </Container>
    </AppBar>
  )
}
