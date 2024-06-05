import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.flex}`}>
        <h1 className="heading-m" aria-labelledby="name">elizerdim</h1>
        <span id="name" className="sr-only">Eliz Erdim</span>
          <div className="social-links">
            <a href="https://github.com/elizerdim" target="_blank" aria-label="Go to Eliz Erdim's GitHub page">
              <FontAwesomeIcon className="social-icon" icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/eliz-erdim/" target="_blank" aria-label="Go to Eliz Erdim's LinkedIn profile">
              <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
            </a>
          </div>
      </div>
    </header>
  );
}
