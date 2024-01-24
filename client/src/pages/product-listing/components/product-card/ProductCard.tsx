import { ProductType } from '@/types'
import { Paper } from '@mui/material'
import { Link } from 'react-router-dom'

type Props = {
  product: ProductType
}

export default function ProductCard({ product }: Props) {
  console.log(product)
  return (
    <div>
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
    </div>
  )
}
