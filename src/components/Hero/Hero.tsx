import SocialLinks from "../SocialLinks/SocialLinks";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.flex}`}>
        <div className={styles["left-column"]}>
          <h2 className={`heading-xl ${styles.title}`}>
            Nice to meet you! I'm{" "}
            <a
              className={styles.name}
              href="https://www.linkedin.com/in/eliz-erdim/"
              target="_blank"
            >
              Eliz Erdim.
            </a>
          </h2>
          <p className={styles.paragraph}>
            I’m a self-taught web developer with a strong interest in responsive
            design and a focus on React and TypeScript. I am at my best when I
            am learning, exploring, and thinking about how to make things
            better. Check out my projects below!
          </p>
          <address className={styles.cta}>
            Send me an email:
            <a className={styles.email} href="mailto:elizerdim@gmail.com"> elizerdim@gmail.com</a>
          </address>
          <div className={styles.links}>
            <SocialLinks />
          </div>
        </div>
        <img
          className={styles.photo}
          src="/profile-photo.png"
          alt="Eliz Erdim's profile photo"
        />
      </div>
    </section>
  );
}
