
import { Code2, Palette, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    title: "UI Development",
    icon: Palette,
    skills: ["Responsive Design", "Material UI", "CSS Layouts"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["VS Code", "Git", "GitHub", "Vite"],
  },
];

export default function Skills() {
  return (
    <section className="container section-padding" id="skills">
      <p className="eyebrow">WHAT I WORK WITH</p>
      <h1>My Skills<span>.</span></h1>
      <p className="section-description">
        Technologies and tools I use to build web applications.
      </p>

      <div className="skills-grid">
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <article className="skill-card" key={group.title}>
              <Icon size={28} />
              <h2>{group.title}</h2>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
