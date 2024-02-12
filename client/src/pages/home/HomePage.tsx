import { Link } from 'react-router-dom'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <div>HomePage</div>
      <Link to="/products"> Product Listing </Link>
      <Link to="/cart"> Cart </Link>
    </div>
  )
}
