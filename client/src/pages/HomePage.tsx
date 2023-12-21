import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <>
      <div>HomePage</div>
      <Link to="/products"> Product Listing </Link>
      <Link to="/cart"> Cart </Link>
    </>
  )
}
