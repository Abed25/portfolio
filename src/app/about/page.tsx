"use client";

import styles from "../HomePage.module.css";

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1>About Me</h1>
        <div className={styles.aboutContent}>
          <p>
            I am a passionate and results-driven full-stack web developer based in Nairobi, Kenya. 
            I specialize in building modern, user-friendly applications using React.js for the frontend 
            and Express.js with MySQL for the backend.
          </p>
          <p>
            My core strength lies in creating clean, efficient, and secure code that solves real-world 
            problems — especially in the realm of data management and information systems. Over the past 
            months, I have led the development of a web-based data management system for the EPZA Research 
            Department, aimed at replacing inefficient Excel-based workflows.
          </p>
          <p>
            This project not only sharpened my skills in API design, authentication, and database 
            integration but also deepened my understanding of building systems that are reliable, 
            scalable, and easy to maintain.
          </p>
          <p>
            I'm constantly learning, adapting, and exploring new tools that help me create better 
            software — whether it's using Firebase for rapid deployment or optimizing UI/UX to enhance 
            the user experience. I enjoy collaborating with teams, listening to users, and turning 
            complex ideas into smooth digital experiences.
          </p>
        </div>
      </section>
    </main>
  );
} 