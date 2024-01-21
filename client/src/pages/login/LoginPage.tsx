import { Link } from 'react-router-dom'
import styles from './LoginPage.module.css'

export default function LoginPage() {
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
            Dont have an account?{' '}
            <Link to="/signup" className={styles.demoLink}>
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
