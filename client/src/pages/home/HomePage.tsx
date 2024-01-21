import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './HomePage.module.css'

const cx = classNames.bind(styles)

export default function HomePage() {
  return (
    <div className={cx('home-container')}>
      <div>HomePage</div>
      <Link to="/products"> Product Listing </Link>
      <Link to="/cart"> Cart </Link>
    </div>
  )
}
