import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./social-links.module.css"

export default function SocialLinks() {
  return (
    <div className={styles.links}>
      <a href="https://github.com/elizerdim" target="_blank" aria-label="Go to Eliz Erdim's GitHub page">
        <FaGithub className={styles.icon}/>
      </a>
      <a href="https://www.linkedin.com/in/eliz-erdim/" target="_blank" aria-label="Go to Eliz Erdim's LinkedIn profile">
        <FaLinkedin className={styles.icon} />
      </a>
    </div>
  )
}