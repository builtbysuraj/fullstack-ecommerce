import gift from '@/assets/img/gift.svg'
import paymentMethods from '@/assets/img/payment-method.svg'
import question from '@/assets/img/question.svg'
import seller from '@/assets/img/seller.svg'
import star from '@/assets/img/star.svg'
import { Divider } from '@mui/material'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  const about = [
    'Contact Us',
    'About Us',
    'Careers',
    'Flipkart Stories',
    'Press',
    'Flipkart Wholesale',
    'Cleartrip',
    'Corporate Information',
  ]
  const help = [
    'Payments',
    'Shipping',
    'Cancellation & Returns',
    'FAQ',
    'Report',
    'Infringement',
  ]
  const consumerPolicy = [
    'Cancellation & Returns',
    'Terms Of Use',
    'Security',
    'Privacy',
    'Sitemap',
    'Grievance',
    'Redressal',
    ' EPR Compliance',
  ]
  const social = ['Facebook', 'Twitter', 'YouTube']
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div>
            <ul>
              <p>ABOUT</p>
              <br />
              {about.map((e, i) => (
                <li key={i}>
                  <Link to="#">{e}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              <p>HELP</p>
              <br />
              {help.map((e, i) => (
                <li key={i}>
                  <Link to="#">{e}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              <p>CONSUMER POLICY</p>
              <br />
              {consumerPolicy.map((e, i) => (
                <li key={i}>
                  <Link to="#">{e}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              <p>SOCIAL</p>
              <br />
              {social.map((e, i) => (
                <li key={i}>
                  <Link to="#">{e}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <p>Mail Us:</p>
            <br />
            <div>
              <p>Flipkart Internet Private Limited, </p>
              <p> Buildings Alyssa, Begonia &amp; </p>
              <p> Clove Embassy Tech Village, </p>
              <p> Outer Ring Road, Devarabeesanahalli Village, </p>
              <p> Bengaluru, 560103, </p>
              <p> Karnataka, India</p>
            </div>
          </div>
          <div>
            <p>Registered Office Address:</p>
            <br />
            <div>
              <p>Flipkart Internet Private Limited, </p>
              <p> Buildings Alyssa, Begonia &amp; </p>
              <p> Clove Embassy Tech Village, </p>
              <p> Outer Ring Road, Devarabeesanahalli Village, </p>
              <p> Bengaluru, 560103, </p>
              <p> Karnataka, India </p>
              <p> CIN : U51109KA2012PTC066107 </p>
              <p>
                Telephone: <a href="tel:044-45614700">044-45614700</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Divider sx={{ bgcolor: 'white', p: 0 }} />
      <div className={styles.bottom}>
        <div>
          <img src={seller} alt="Become a Seller" />
          <Link to="#">Become a Seller</Link>
        </div>
        <div>
          <img src={star} alt="Advertise" />
          <Link to="#">Advertise</Link>
        </div>
        <div>
          <img src={gift} alt="Gift Cards" />
          <Link to="#">Gift Cards</Link>
        </div>
        <div>
          <img src={question} alt="Help Center" />
          <Link to="#">Help Center</Link>
        </div>
        <div>
          <p>© 2007-2024 Flipkart.com</p>
        </div>
        <div>
          <img src={paymentMethods} alt="Payment Methods" />
        </div>
      </div>
    </footer>
  )
}
