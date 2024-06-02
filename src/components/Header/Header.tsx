import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
  // TODO: Add href to linkedin
    <header>
      <h1>elizerdim</h1>
      <a href="https://github.com/elizerdim" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </header>
  );
}
