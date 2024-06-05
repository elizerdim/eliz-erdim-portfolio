import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <header>
      <h1 aria-labelledby="name">elizerdim</h1>
      <span id="name" className="sr-only">Eliz Erdim</span>
      <a href="https://github.com/elizerdim" target="_blank" aria-label="Go to Eliz Erdim's GitHub page">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/eliz-erdim/" target="_blank" aria-label="Go to Eliz Erdim's LinkedIn profile">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </header>
  );
}
