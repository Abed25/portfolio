"use client";

import ContactForm from "@/components/contactForm";
import styles from "../HomePage.module.css";

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1>Contact Me</h1>
        <p className={styles.contactIntro}>
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h2>Let&apos;s Connect</h2>
            <p>
              Feel free to reach out if you&apos;re looking for a developer,
              have a question, or just want to connect.
            </p>
            <div className={styles.contactDetails}>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:wekesaabednego44@gmail.com">
                  wekesaabednego44@gmail.com
                </a>
              </p>
              <p>
                <strong>Location:</strong> Nairobi, Kenya
              </p>
              <p>
                <strong>Availability:</strong> Available for remote and on-site
                projects
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
