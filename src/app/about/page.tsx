"use client";

import { motion } from 'framer-motion';
import styles from './AboutPage.module.css';

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.aboutSection}
      >
        <div className={styles.aboutContent}>
          <h1 className={styles.title}>About Me</h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={styles.intro}
          >
            I&apos;m a passionate full-stack developer with a keen eye for creating elegant solutions
            to complex problems. With expertise in modern web technologies and a strong foundation
            in software engineering principles, I strive to build applications that are both
            beautiful and functional.
          </motion.p>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={styles.section}
          >
            <h2 className={styles.sectionTitle}>My Journey</h2>
            <p className={styles.sectionContent}>
              My journey in software development began with a curiosity about how things work
              in the digital world. Over the years, I&apos;ve worked on various projects ranging
              from small business websites to complex enterprise applications. Each project
              has been a learning opportunity, helping me grow both technically and professionally.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className={styles.section}
          >
            <h2 className={styles.sectionTitle}>Technical Expertise</h2>
            <div className={styles.skillsList}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={styles.skillCard}
              >
                <h3 className={styles.skillTitle}>Frontend Development</h3>
                <p className={styles.skillDescription}>
                  React, Next.js, TypeScript, Tailwind CSS, and modern JavaScript frameworks.
                  Creating responsive and accessible user interfaces with a focus on performance.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className={styles.skillCard}
              >
                <h3 className={styles.skillTitle}>Backend Development</h3>
                <p className={styles.skillDescription}>
                  Node.js, Express, Python, and various database technologies.
                  Building scalable and secure server-side applications.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className={styles.skillCard}
              >
                <h3 className={styles.skillTitle}>DevOps & Tools</h3>
                <p className={styles.skillDescription}>
                  Docker, Git, CI/CD pipelines, and cloud platforms.
                  Implementing efficient development workflows and deployment strategies.
                </p>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className={styles.section}
          >
            <h2 className={styles.sectionTitle}>What I Offer</h2>
            <ul className={styles.servicesList}>
              <motion.li
                whileHover={{ x: 10 }}
                className={styles.serviceItem}
              >
                Custom Web Application Development
              </motion.li>
              <motion.li
                whileHover={{ x: 10 }}
                className={styles.serviceItem}
              >
                E-commerce Solutions
              </motion.li>
              <motion.li
                whileHover={{ x: 10 }}
                className={styles.serviceItem}
              >
                API Development & Integration
              </motion.li>
              <motion.li
                whileHover={{ x: 10 }}
                className={styles.serviceItem}
              >
                Performance Optimization
              </motion.li>
          </ul>
          </motion.section>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className={styles.section}
          >
            <h2 className={styles.sectionTitle}>Let&apos;s Connect</h2>
            <p className={styles.sectionContent}>
              I&apos;m always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              className={styles.cvLink}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
