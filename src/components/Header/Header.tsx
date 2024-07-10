import styles from "./header.module.css";
import SocialLinks from "../SocialLinks/SocialLinks";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.flex}`}>
        <h1 className={styles.name} aria-labelledby="name">
          elizerdim
        </h1>
        <span id="name" className="sr-only">
          Eliz Erdim
        </span>
        <SocialLinks />
      </div>
    </header>
  );
}
