"use client";

import styles from "../HomePage.module.css";

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1>Let's Work Together</h1>
        <p className={styles.contactIntro}>
          I'm currently available for new projects and consulting opportunities. Let's discuss how I can help bring your vision to life.
        </p>
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h3>Get in Touch</h3>
            <p>Email: <a href="mailto:wekesaabednego44@gmail.com">wekesaabednego44@gmail.com</a></p>
            <p>Location: Nairobi, Kenya</p>
            <p>Available for: Remote & On-site Projects</p>
          </div>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className={styles.formGroup}>
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Project Type" required />
            </div>
            <div className={styles.formGroup}>
              <textarea placeholder="Tell me about your project" required rows={5}></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Send Message</button>
          </form>
        </div>
      </section>
    </main>
  );
}
