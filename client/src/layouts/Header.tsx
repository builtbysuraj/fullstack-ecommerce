import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <h3>
        <Link to='/'>Title</Link>
      </h3>
      <div>
        <Link to='/products'> Product Listing </Link>
        <Link to='/cart'> Cart </Link>
      </div>
    </div>
  )
}
