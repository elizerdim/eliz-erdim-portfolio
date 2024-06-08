import styles from "./skills.module.css"
import skills from "../../data/skills.json";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTypescript, SiJavascript } from "react-icons/si";
import { IoAccessibility } from "react-icons/io5";
import { PiFileCode } from "react-icons/pi";
import { BiGridVertical } from "react-icons/bi";
import { BsGrid3X2 } from "react-icons/bs";
import { LuCode2 } from "react-icons/lu";
import { IconType } from "react-icons";

type iconsObj = {
  [prop: string]: IconType;
}

const icons: iconsObj = {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  SiTypescript,
  SiJavascript,
  IoAccessibility,
  PiFileCode,
  BiGridVertical,
  BsGrid3X2,
  LuCode2,
};

function Icon({ icon }: { icon: IconType }) {
  const Component = icon;
  return <Component />;
}

export default function Skills() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h3 className="sr-only">Skills</h3>
        <article className={`heading-l ${styles.skills}`}>
          {skills.map((skill) => {
            return (
              <article key={skill.name} className={styles.skill}>
                <Icon icon={icons[skill.iconName]} />
                <p>{skill.name}</p>
              </article>
            );
          })}
        </article>
      </div>
    </section>
  );
}
