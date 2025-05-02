// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className={styles.main}>
      {/* Theme Toggle (only after mount) */}
      {mounted && (
        <button
          className={styles.toggle}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      )}

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.avatar}>
          <Image
            src="/avatar.png"
            alt="superDev avatar"
            width={120}
            height={120}
          />
        </div>
        <h1 className={styles.name}>superDev</h1>
        <p className={styles.title}>
          Tech Entrepreneur | Software Developer | Innovator
        </p>
        <p className={styles.tagline}>
          Turning bold ideas into reality through code & strategy.
        </p>
        <a href="#contact" className={styles.cta}>
          Let’s Connect
        </a>
      </section>

      {/* About Section */}
      <section className={styles.section} id="about">
        <h2>About Me</h2>
        <p>
          I’m a passionate developer and startup enthusiast with a knack for
          solving problems through code and strategic thinking. I love turning
          napkin sketches into polished digital products.
        </p>
      </section>

      {/* Projects Section */}
      <section className={styles.section} id="projects">
        <h2>Projects</h2>
        <div className={styles.projects}>
          <div className={styles.projectCard}>
            <Image src="/startup1.png" alt="Startup 1" width={80} height={80} />
            <p>Startup 1 — AI-driven productivity tool</p>
            <a href="#">View Project</a>
          </div>
          <div className={styles.projectCard}>
            <Image src="/startup2.png" alt="Startup 2" width={80} height={80} />
            <p>Startup 2 — Financial dashboard for entrepreneurs</p>
            <a href="#">View Project</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.section} id="skills">
        <h2>Skills</h2>
        <div className={styles.skills}>
          <span>React</span>
          <span>Next.js</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Product Strategy</span>
          <span>Pitching</span>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.section} id="testimonials">
        <h2>Testimonials</h2>
        <div className={styles.testimonial}>
          <blockquote>
            “Working with superDev was transformative. Their tech and business
            insight are unmatched.”
          </blockquote>
          <cite>— Happy Founder, TechCo</cite>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.section} id="contact">
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:superdev@example.com">superdev@example.com</a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/superdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/superdev
          </a>
        </p>
        <form className={styles.contactForm}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
  );
}
