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
    <div className={styles.formContainer}>
      <div className={styles.left}>
        <div className={styles.formTitle}>
          <span>{mode}</span>
        </div>
        <div className={styles.formDesc}>
          <p>Get access to your Orders,</p>
          <p>Wishlist and Recommendations</p>
        </div>
      </div>
      <div className={styles.right}>
        <form className={styles.form}>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <small className={styles.fromSmall}>
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
