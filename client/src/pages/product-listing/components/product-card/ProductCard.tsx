import Paper from '@mui/material/Paper'
import Rating from '@mui/material/Rating'
import { Link } from 'react-router-dom'

import { ProductType } from '@/types'
import styles from './ProductCard.module.css'

type Props = {
  product: ProductType
}

export default function ProductCard({ product }: Props) {
  return (
    <div>
      <Link key={product.id} to={`/products/${product.id}`}>
        <Paper
          sx={{
            p: 3,
            mb: 0.1,
          }}
          elevation={0}
          className={styles.productCardWrapper}
        >
          <div className={styles.left}>
            <div className={styles.productImage}>
              <img loading="lazy" src={product.thumbnail} alt={product.title} />
            </div>
            <div>
              <h3>{product.title}</h3>
              <Rating
                name="read-only"
                value={product.rating}
                readOnly
                size="small"
              />
              <p className={styles.productDesc}>{product.description}</p>
            </div>
          </div>
          <div className={styles.right}>
            <h2>${product.price}</h2>
            <span className={styles.productDiscount}>
              {product.discountPercentage}% off
            </span>
          </div>
        </Paper>
      </Link>
    </div>
  )
}
