"use client";

import Image from "next/image";
import styles from "../HomePage.module.css";

export default function ProjectsPage() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1>Featured Projects</h1>
        <div className={styles.projects}>
          <div className={styles.projectCard}>
            <Image src="/project1.jpg" alt="E-commerce Platform" width={300} height={200} className={styles.projectImage} />
            <div className={styles.projectContent}>
              <h3>E-commerce Platform</h3>
              <p>A high-performance e-commerce solution with real-time inventory management and payment processing</p>
              <div className={styles.projectTech}>
                <span>Next.js</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
              <a href="#" className={styles.projectLink}>View Case Study</a>
            </div>
          </div>
          <div className={styles.projectCard}>
            <Image src="/project2.jpg" alt="SaaS Dashboard" width={300} height={200} className={styles.projectImage} />
            <div className={styles.projectContent}>
              <h3>SaaS Dashboard</h3>
              <p>Analytics dashboard for a SaaS company, featuring real-time data visualization and reporting</p>
              <div className={styles.projectTech}>
                <span>React</span>
                <span>TypeScript</span>
                <span>D3.js</span>
              </div>
              <a href="#" className={styles.projectLink}>View Case Study</a>
            </div>
          </div>
          <div className={styles.projectCard}>
            <Image src="/project3.jpg" alt="Data Management System" width={300} height={200} className={styles.projectImage} />
            <div className={styles.projectContent}>
              <h3>EPZA Research Data Management</h3>
              <p>Web-based data management system replacing Excel workflows, featuring advanced reporting and analytics</p>
              <div className={styles.projectTech}>
                <span>React</span>
                <span>Express</span>
                <span>MySQL</span>
              </div>
              <a href="#" className={styles.projectLink}>View Case Study</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
