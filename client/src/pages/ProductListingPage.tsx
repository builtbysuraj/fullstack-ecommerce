import { Link } from 'react-router-dom'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Filters from '../components/Filters'
import useFilter from '../hooks/useFilters'
import { Product } from '../types'

export default function ProductListingPage() {
  const { filteredData } = useFilter()

  return (
    <div style={{ display: 'flex', margin: '1rem', gap: 2 }}>
      <div style={{ flex: 1 }}>
        <Filters />
      </div>
      <Box sx={{ flex: 4 }}>
        {filteredData?.map((product: Product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <Paper
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                // margin: 2,
                p: 2,
                mb: 1,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  loading="lazy"
                  width={200}
                  src={product.thumbnail}
                  alt={product.title}
                />
                <h3>{product.title}</h3>
                <h3>{product.rating}</h3>
                {/* <p>{product.description}</p> */}
              </div>

              <div>
                <h2>${product.price}</h2>
              </div>
            </Paper>
          </Link>
        ))}
      </Box>
    </div>
  )
}
