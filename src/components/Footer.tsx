"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from "./Footer.module.css";
import { AnimatedSection, AnimatedCard } from "./animations";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <AnimatedSection direction="top" delay={0.3}>
          <div className={styles.footerSection}>
            <h3>Wekesa Abednego</h3>
            <p>
              Full-stack web developer specializing in building exceptional
              digital experiences.
            </p>
            <AnimatedCard className={styles.socialLinks}>
              <a
                href="https://github.com/Abed25"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/abednego-wekesa-b95629365"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/web3superdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </AnimatedCard>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right" delay={0.6}>
          <div className={styles.footerSection}>
            <h3>Quick Links</h3>
            <AnimatedCard className={styles.footerLinks}>
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="data:application/pdf;base64,<base64-encoded-pdf-content>#toolbar=0&navpanes=0" target="_blank" rel="noopener noreferrer">VIEW CV</a>
                </li>
              </ul>
            </AnimatedCard>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="left" delay={0.9}>
          <div className={styles.footerSection}>
            <h3>Newsletter</h3>
            <p>
              Subscribe to receive updates on my latest projects and articles.
            </p>
            <AnimatedCard className={styles.newsletterForm}>
              <form>
                <input type="email" placeholder="Enter your email" required />
                <button type="submit">Subscribe</button>
              </form>
            </AnimatedCard>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection direction="bottom" delay={1.2}>
        <div className={styles.footerBottom}>
          <p>
            &copy; {new Date().getFullYear()} Wekesa Abednego. All rights
            reserved.
          </p>
          <AnimatedCard className={styles.footerBottomLinks}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </AnimatedCard>
        </div>
      </AnimatedSection>
    </footer>
  );
}
