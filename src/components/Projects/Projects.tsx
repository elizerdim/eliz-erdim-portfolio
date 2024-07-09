import styles from "./projects.module.css";

type Project = {
  name: string;
  category: string;
  img: string;
  technologies: string[];
  code?: string;
  preview?: string;
};

type ProjectsProps = {
  heading: string;
  projects: Project[];
};

export default function Projects({ heading, projects }: ProjectsProps) {
  return (
    <section>
      <div className="container">
        <h3 className={`${styles.heading} heading-xl`}>{heading}</h3>
        <article className={styles.grid}>
          {projects.map((project) => {
            return (
              <article key={project.name.split(" ").join("")}>
                <img
                  className={styles.img}
                  src={project.img}
                  alt="Project Visual"
                />
                <h4 className={`${styles.name} heading-m`}>{project.name}</h4>
                <div className={styles.tech}>
                  {project.technologies.map((tech) => (
                    <p key={tech} className="body-l">
                      {tech}
                    </p>
                  ))}
                </div>
                {heading === "Freelance Work" ? (
                  <p className={`${styles.explanation} body-l`}>This was paid work - code is available upon request for privacy reasons</p>
                ) : (
                  <div className={styles.buttons}>
                    <a className={styles.button} href={project.code} target="_blank">
                      Code
                    </a>
                    <a className={styles.button} href={project.preview} target="_blank">
                      Preview
                    </a>
                  </div>
                )}
              </article>
            );
          })}
        </article>
      </div>
    </section>
  );
}
