import SocialLinks from "../SocialLinks/SocialLinks";

export default function Hero() {
  return (
    <section>
      <h2 className="heading-xl">
        Nice to meet you! I'm{" "}
        <a href="https://www.linkedin.com/in/eliz-erdim/" target="_blank">
          Eliz Erdim.
        </a>
      </h2>
      <p>
        I’m a self-taught front-end developer with a strong interest in
        responsive design and a focus on React and TypeScript. I am at my best
        when I am learning, exploring, and thinking about how to make things
        better. Writing clean, accessible, and elegant code is important to me.
        Check out my projects below!
      </p>
      <address>
        Send me an email:{" "}
        <a href="mailto:elizerdim@gmail.com">elizerdim@gmail.com</a>
      </address>
      <SocialLinks />
      <img src="/profile-photo.jpg" alt="Eliz Erdim's profile photo" />
    </section>
  );
}
