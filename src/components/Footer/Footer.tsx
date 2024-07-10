import SocialLinks from "../SocialLinks/SocialLinks"
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <h5 className={`${styles.heading} heading-xl`}>Contact</h5>
        <p className={`${styles.text} body-l`}>You can also check out my GitHub and LinkedIn pages. Send me an email if you are interested in working together!</p>
        <div className={styles.links}>
          <address className={styles.email}>
            <a href="mailto:elizerdim@gmail.com">elizerdim@gmail.com</a>
          </address>
          <SocialLinks />
        </div>
        <hr />
      </div>
    </footer>
  )
}