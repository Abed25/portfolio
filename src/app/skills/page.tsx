"use client";

import styles from "../HomePage.module.css";

export default function SkillsPage() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1>Technical Expertise</h1>
        <div className={styles.skills}>
          <div className={styles.skillCategory}>
            <h3>Frontend Development</h3>
            <div className={styles.skillTags}>
              <span>React</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Tailwind CSS</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
            </div>
          </div>
          <div className={styles.skillCategory}>
            <h3>Backend Development</h3>
            <div className={styles.skillTags}>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>PostgreSQL</span>
              <span>MySQL</span>
              <span>RESTful APIs</span>
              <span>GraphQL</span>
            </div>
          </div>
          <div className={styles.skillCategory}>
            <h3>DevOps & Tools</h3>
            <div className={styles.skillTags}>
              <span>Docker</span>
              <span>AWS</span>
              <span>Git</span>
              <span>CI/CD</span>
              <span>Linux</span>
              <span>Nginx</span>
            </div>
          </div>
          <div className={styles.skillCategory}>
            <h3>Additional Skills</h3>
            <div className={styles.skillTags}>
              <span>Agile Methodologies</span>
              <span>Project Management</span>
              <span>Technical Documentation</span>
              <span>UI/UX Design</span>
              <span>Performance Optimization</span>
              <span>Security Best Practices</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
