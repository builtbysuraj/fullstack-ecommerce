import { Link } from 'react-router-dom'
import styles from './Form.module.css'

type FormProps = {
  mode: string
  promptText: string
  promptLink: string
  promptLinkText: string
}

export default function From({
  mode,
  promptText,
  promptLink,
  promptLinkText,
}: FormProps) {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.left}>
        <div className={styles.loginTitle}>
          <span>{mode}</span>
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
          <button>{mode}</button>
          <p>
            {promptText}{' '}
            <Link to={promptLink} className={styles.demoLink}>
              {promptLinkText}
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
