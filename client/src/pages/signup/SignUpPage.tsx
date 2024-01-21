import { Link } from 'react-router-dom'
import styles from './SignUpPage.module.css'

export default function SignUpPage() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.left}>
        <div className={styles.loginTitle}>
          <span>Login</span>
        </div>
        <div className={styles.loginDesc}>
          <p>Get access to your Orders,</p>
          <p>Wishlist and Recommendations</p>
        </div>
      </div>
      <div className={styles.right}>
        <form className={styles.loginForm}>
          <input type="text" placeholder="Enter Email/Username" />
          <input type="password" placeholder="Password" />
          <small>
            By continuing, you agree to Flipkart's
            <span className={styles.demoLink}> Terms of Use </span>
            and
            <span className={styles.demoLink}> Privacy Policy.</span>
          </small>
          <button>Login</button>
          <p>
            Already have an account?{' '}
            <Link to="/login" className={styles.demoLink}>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
