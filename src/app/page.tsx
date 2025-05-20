// app/page.tsx
"use client";

import Image from "next/image";
import styles from "./HomePage.module.css";
import avatar from "../../public/croped.jpg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function HomePage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.avatar}>
          <Image
            src={avatar}
            alt="Professional headshot"
            width={150}
            height={150}
            className={styles.avatarImage}
          />
        </div>
        <h1 className={styles.name}>Wekesa Abednego</h1>
        <p className={styles.title}>
          Full-Stack Developer & Technical Consultant
        </p>
        <p className={styles.tagline}>
          Building scalable, high-performance web applications that drive
          business growth
        </p>
        <div className={styles.socialLinks}>
          <a
            href="https://github.com/Abed25"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abednego-wekesa-b95629365"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/web3superdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
        <a href="#contact" className={styles.cta}>
          Let&apos;s Discuss Your Project
        </a>
      </section>

      {/* Services Section */}
      <section className={styles.section} id="services">
        <h2>Services I Offer</h2>
        <div className={styles.services}>
          <div className={styles.serviceCard}>
            <h3>Web Application Development</h3>
            <p>
              Custom web applications built with modern technologies like React,
              Next.js, and Node.js
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Technical Consulting</h3>
            <p>
              Expert guidance on technology stack selection, architecture, and
              development strategy
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Performance Optimization</h3>
            <p>
              Improve your application&apos;s speed, scalability, and user
              experience
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className={styles.section} id="projects">
        <h2>Featured Projects</h2>
        <div className={styles.projects}>
          <div className={styles.projectCard}>
            <Image
              src="/project1.jpg"
              alt="E-commerce Platform"
              width={300}
              height={200}
              className={styles.projectImage}
            />
            <div className={styles.projectContent}>
              <h3>E-commerce Platform</h3>
              <p>
                A high-performance e-commerce solution with real-time inventory
                management and payment processing
              </p>
              <div className={styles.projectTech}>
                <span>Next.js</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
              <a href="#" className={styles.projectLink}>
                View Case Study
              </a>
            </div>
          </div>
          <div className={styles.projectCard}>
            <Image
              src="/project2.jpg"
              alt="SaaS Dashboard"
              width={300}
              height={200}
              className={styles.projectImage}
            />
            <div className={styles.projectContent}>
              <h3>SaaS Dashboard</h3>
              <p>
                Analytics dashboard for a SaaS company, featuring real-time data
                visualization and reporting
              </p>
              <div className={styles.projectTech}>
                <span>React</span>
                <span>TypeScript</span>
                <span>D3.js</span>
              </div>
              <a href="#" className={styles.projectLink}>
                View Case Study
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.section} id="skills">
        <h2>Technical Expertise</h2>
        <div className={styles.skills}>
          <div className={styles.skillCategory}>
            <h3>Frontend</h3>
            <div className={styles.skillTags}>
              <span>React</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Module CSS</span>
              <span>Tailwind CSS</span>
            </div>
          </div>
          <div className={styles.skillCategory}>
            <h3>Backend</h3>
            <div className={styles.skillTags}>
              <span>Node.js</span>
              <span>Express</span>
              <span>Flask</span>
            </div>
          </div>
          <div className={styles.skillCategory}>
            <h3>Databases</h3>
            <div className={styles.skillTags}>
              <span>MySQL</span>
              <span>MongoDB</span>
              <span>Firestore</span>
              <span>PostgreSQL</span>
            </div>
          </div>
          <div className={styles.skillCategory}>
            <h3>DevOps & Tools</h3>
            <div className={styles.skillTags}>
              <span>Docker</span>
              <span>AWS</span>
              <span>Git</span>
              <span>CI/CD</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.section} id="testimonials">
        <h2>Client Testimonials</h2>
        <div className={styles.testimonials}>
          <div className={styles.testimonial}>
            <blockquote>
              Wekesa delivered exceptional results. His technical expertise and
              attention to detail helped us launch our product ahead of
              schedule.
            </blockquote>
            <cite>
              <strong>Sarah Johnson</strong>
              <span>CEO, TechStart</span>
            </cite>
          </div>
          <div className={styles.testimonial}>
            <blockquote>
              Working with Wekesa was a game-changer for our business. He not
              only built a great product but also provided valuable insights
              throughout the process.
            </blockquote>
            <cite>
              <strong>Michael Chen</strong>
              <span>CTO, InnovateCorp</span>
            </cite>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.section} id="contact">
        <h2>Let&apos;s Work Together</h2>
        <p className={styles.contactIntro}>
          I&apos;m currently available for new projects and consulting
          opportunities. Let&apos;s discuss how I can help bring your vision to
          life.
        </p>
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h3>Let&apos;s Connect</h3>
            <p>
              Feel free to reach out if you&apos;re looking for a developer,
              have a question, or just want to connect.
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:wekesaabednego44@gmail.com">
                wekesaabednego44@gmail.com
              </a>
            </p>
            <p>
              <strong>Location:</strong> Nairobi, Kenya
            </p>
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
              <textarea
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
