"use client";

import styles from "../HomePage.module.css";

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1>Contact Me</h1>
        <p className={styles.contactIntro}>
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h2>Let&apos;s Connect</h2>
            <p>
              Feel free to reach out if you&apos;re looking for a developer, have a question, or just want to connect.
            </p>
            <div className={styles.contactDetails}>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:wekesaabednego44@gmail.com">wekesaabednego44@gmail.com</a>
              </p>
              <p>
                <strong>Location:</strong> Nairobi, Kenya
              </p>
              <p>
                <strong>Availability:</strong> Available for remote and on-site projects
              </p>
            </div>
          </div>

          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Project Type"
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project"
                required
                rows={5}
              ></textarea>
            </div>
            
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
