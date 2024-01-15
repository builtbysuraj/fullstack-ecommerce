import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './SignUpPage.module.css'

const cx = classNames.bind(styles)

export default function SignUpPage() {
  return (
    <div className={cx('login-container')}>
      <div className={cx('left')}>
        <div className={cx('login-title')}>
          <span>Login</span>
        </div>
        <div className={cx('login-desc')}>
          <p>Get access to your Orders,</p>
          <p>Wishlist and Recommendations</p>
        </div>
      </div>
      <div className={cx('right')}>
        <form>
          <input type="text" placeholder="Enter Email/Username" />
          <input type="password" placeholder="Password" />
          <small>
            By continuing, you agree to Flipkart's
            <span className={cx('demo-link')}> Terms of Use </span>
            and
            <span className={cx('demo-link')}> Privacy Policy.</span>
          </small>
          <button>Login</button>
          <p>
            Already have an account?{' '}
            <Link to="/login" className={cx('demo-link')}>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
