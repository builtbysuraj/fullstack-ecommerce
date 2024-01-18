import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import Button from '@/components/ui/Button'
import styles from './HomePage.module.css'

const cx = classNames.bind(styles)

export default function HomePage() {
  return (
    <>
      <div>HomePage</div>
      <Link to="/products"> Product Listing </Link>
      <Link to="/cart"> Cart </Link>
      <Button className={cx('home-btn')}>My BTN</Button>
    </>
  )
}
