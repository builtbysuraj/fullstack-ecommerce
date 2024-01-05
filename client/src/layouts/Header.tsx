import { AppBar, Box, Button, Container, TextField } from '@mui/material'
import { Link } from 'react-router-dom'

import cart from '../assets/img/cart.svg'
import useHandleDispatch from '../hooks/useHandleDispatch'
import { useAppSelector } from '../state/store'
import flipkart from '/flipkart.png'

export default function Header() {
  const stateData = useAppSelector((state) => state.filtersReducer)
  const { handleSearchQuery } = useHandleDispatch()

  return (
    <AppBar elevation={1} position="sticky" sx={{}}>
      <Container>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box
            display="flex"
            // justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <Link to="/">
              <img width="75" src={flipkart} alt="Flipkart" title="Flipkart" />
            </Link>
          </Box>
          <TextField
            sx={{ bgcolor: 'white', m: 1 }}
            placeholder="Search for products, brands and more"
            size="small"
            value={stateData.searchQuery}
            onChange={(e) => handleSearchQuery(e.target.value)}
          />
          <Button
            variant="text"
            sx={{
              bgcolor: 'white',
              color: 'black',
            }}
          >
            Login
          </Button>
          <Button variant="text" sx={{ color: 'white' }}>
            Become a Seller
          </Button>
          <Button variant="text" sx={{ color: 'white' }}>
            More
          </Button>
          <div>
            <Link to="/products"> Product Listing </Link>
            <Link to="/cart">
              <img src={cart} alt="Cart" />
              Cart
            </Link>
          </div>
        </div>
      </Container>
    </AppBar>
  )
}
