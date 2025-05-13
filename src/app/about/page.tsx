"use client";

import styles from "../HomePage.module.css";

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1>About Me</h1>
        <div className={styles.aboutContent}>
          <p>
            I&apos;m a full-stack web developer based in Nairobi, Kenya, specializing in building exceptional digital experiences. With a strong foundation in both frontend and backend technologies, I create robust and scalable web applications that help businesses achieve their goals.
          </p>
          
          <h2>My Journey</h2>
          <p>
            My journey in web development began with a passion for creating user-friendly applications that solve real-world problems. Over the years, I&apos;ve worked on various projects ranging from e-commerce platforms to complex data management systems.
          </p>

          <h2>Technical Expertise</h2>
          <p>
            I specialize in modern web technologies including React, Next.js, Node.js, and TypeScript. My approach combines technical excellence with a deep understanding of user experience and business requirements.
          </p>

          <h2>What I Do</h2>
          <ul>
            <li>Build responsive and performant web applications</li>
            <li>Design and implement RESTful APIs</li>
            <li>Create intuitive user interfaces</li>
            <li>Optimize application performance</li>
            <li>Implement secure authentication systems</li>
            <li>Integrate third-party services and APIs</li>
          </ul>

          <h2>My Approach</h2>
          <p>
            I believe in writing clean, maintainable code and following best practices in software development. I&apos;m committed to continuous learning and staying up-to-date with the latest technologies and industry trends.
          </p>
        </div>
      </section>
    </main>
  );
} 