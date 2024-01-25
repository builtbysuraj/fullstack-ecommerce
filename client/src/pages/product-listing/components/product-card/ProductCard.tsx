import { ProductType } from '@/types'
import Paper from '@mui/material/Paper'
import { Link } from 'react-router-dom'

type Props = {
  product: ProductType
}

export default function ProductCard({ product }: Props) {
  return (
    <div>
      <Link key={product.id} to={`/products/${product.id}`}>
        <Paper
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 3,
            mb: 0.1,
          }}
          elevation={0}
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
            <p>{product.description}</p>
          </div>

          <div>
            <h2>${product.price}</h2>
          </div>
        </Paper>
      </Link>
    </div>
  )
}
