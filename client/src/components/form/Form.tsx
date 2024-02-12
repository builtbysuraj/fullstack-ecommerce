import axios from 'axios'
import { Link } from 'react-router-dom'

import { ENV } from '@/conf'
import styles from './Form.module.css'

axios.defaults.withCredentials = true

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
  const endpoint = mode === 'Signup' ? '/register' : '/login'

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    const form = evt.target as HTMLFormElement
    const formData = new FormData(form)

    // Extracting form values through 'name' property, in 'data'
    const data = Object.fromEntries(formData)
    const res = await axios.post(`${ENV.SERVER_URL}/${endpoint}`, data)
    console.log(res.data)

    form.reset()
  }

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
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" placeholder="Username" name="username" required />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <small className={styles.fromSmall}>
            By continuing, you agree to Flipkart's
            <span className={styles.demoLink}> Terms of Use </span>
            and
            <span className={styles.demoLink}> Privacy Policy.</span>
          </small>
          <button type="submit">{mode}</button>
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
