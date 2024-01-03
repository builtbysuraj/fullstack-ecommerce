import { AppBar, Container } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Header() {
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
          <div>
            <Link to="/products"> Product Listing </Link>
            <Link to="/cart"> Cart </Link>
          </div>
        </div>
      </Container>
    </AppBar>
  )
}
