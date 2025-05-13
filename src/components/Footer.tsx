"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Wekesa Abednego</h3>
          <p>Full-stack web developer specializing in building exceptional digital experiences.</p>
          <div className={styles.socialLinks}>
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
          </div>
        </div>
        
        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Newsletter</h3>
          <p>Subscribe to receive updates on my latest projects and articles.</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Wekesa Abednego. All rights reserved.</p>
        <div className={styles.footerBottomLinks}>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
