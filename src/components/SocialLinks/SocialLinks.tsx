import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./social-links.module.css"

export default function SocialLinks() {
  return (
    <div className={styles.links}>
      <a href="https://github.com/elizerdim" target="_blank" aria-label="Go to Eliz Erdim's GitHub page">
        <FontAwesomeIcon className={styles.icon} icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/eliz-erdim/" target="_blank" aria-label="Go to Eliz Erdim's LinkedIn profile">
        <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
      </a>
    </div>
  )
}