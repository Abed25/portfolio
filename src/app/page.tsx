// app/page.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./HomePage.module.css";
import avatar from "../../public/croped.jpg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import ContactForm from "@/components/contactForm";
import { AnimatedSection, AnimatedCard } from "@/components/animations";

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  return (
    <main
      className={styles.main}
      style={{ position: "relative", width: "100%", overflow: "hidden" }}
    >
      {/* Hero Section */}
      <section
        className={styles.hero}
        style={{ position: "relative", width: "100%", overflow: "hidden" }}
      >
        <AnimatedSection direction="top" delay={0.5}>
          <div className={styles.avatar}>
            <Image
              src={avatar}
              alt="Professional headshot"
              width={150}
              height={150}
              className={styles.avatarImage}
            />
          </div>
        </AnimatedSection>
        <AnimatedSection direction="top" delay={0.3}>
          <h1 className={styles.name}>Wekesa Abednego</h1>
        </AnimatedSection>
        <AnimatedSection direction="left" delay={0.4}>
          <p className={styles.title}>
            Full-Stack Web Developer | Network Technician
          </p>
        </AnimatedSection>
        <AnimatedSection direction="right" delay={0.6}>
          <p className={styles.tagline}>
            I help businesses grow through modern web applications and reliable
            internet solutions.
          </p>
        </AnimatedSection>
        <AnimatedSection direction="bottom" delay={0.4}>
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
        </AnimatedSection>
        <AnimatedSection direction="pop" delay={0.9}>
          <a href="#contact" className={styles.cta}>
            Let&apos;s Build Together
          </a>
        </AnimatedSection>
      </section>

      {/* Services Section */}
      <section
        className={styles.section}
        id="services"
        style={{ position: "relative", width: "100%", overflow: "hidden" }}
      >
        <AnimatedSection direction="left">
          <h2>🚀 Services I Offer</h2>
        </AnimatedSection>
        <div className={styles.services}>
          <AnimatedSection direction="right" delay={0.3}>
            <AnimatedCard className={styles.serviceCard}>
              <h3
                onClick={() => setOpen(!open)}
                className="cursor-pointer flex items-center gap-2 text-lg font-semibold"
              >
                🌐 Web Application Development
                <span className="text-sm">{open ? "   ▲" : "    ▼"}</span>
              </h3>

              <p className="text-gray-700">
                I build fast, secure and scalable web applications using React,
                Next.js and Node.js — delivering smooth performance and a modern
                user experience.Here are some areas I also cover:
                <button
                  onClick={() => setOpen(!open)}
                  className="ml-2 text-blue-600 hover:underline focus:outline-none"
                >
                  {open ? "Less" : "More"}
                </button>
              </p>

              {open && (
                // <ul className="ml-4 mt-2 space-y-1 text-gray-700">
                <ul>
                  <li>Improving and optimizing existing web applications</li>
                  <li>
                    Integrating Google Analytics, SEO tools and tracking systems
                  </li>
                  <li>
                    Deploying and hosting web projects (Vercel, Clever Cloud,
                    etc.)
                  </li>
                  <li>Embedding Google Maps, payment gateways and APIs</li>
                  <li>Enhancing UI/UX design for better usability</li>
                  <li>Adding authentication and user role management</li>
                  <li>Setting up database connections (MySQL, Firebase)</li>
                  <li>Implementing RESTful APIs and backend logic</li>
                  <li>Automating email notifications and contact forms</li>
                  <li>Integrating file uploads and cloud storage</li>
                  <li>Fixing bugs and improving app performance</li>
                  <li>Conducting speed and security audits</li>
                  <li>
                    Creating dashboards for data visualization and analytics
                  </li>
                </ul>
              )}
            </AnimatedCard>
          </AnimatedSection>
          <AnimatedSection direction="left" delay={0.45}>
            <AnimatedCard className={styles.serviceCard}>
              <h3 onClick={() => setOpen2(!open2)}>
                📡 Internet Service Provision (SuperNett){" "}
                <span className="text-sm">{open2 ? "   ▲" : "    ▼"}</span>
              </h3>
              <p>
                I deliver dependable and affordable internet solutions for homes
                and businesses.My goal is to help communities and businesses
                stay connected through efficient, customer-centered service.{" "}
                <button
                  onClick={() => setOpen2(!open2)}
                  className="ml-2 text-blue-600 hover:underline focus:outline-none"
                >
                  {open2 ? "Less" : "More"}
                </button>
              </p>
              {open2 && (
                <ul className="ml-4 mt-2 text-gray-700 space-y-1">
                  <li>Installing and configuring home Wi-Fi routers</li>
                  <li>Setting up small business or office networks</li>
                  <li>
                    Repairing or troubleshooting internet connectivity issues
                  </li>
                  <li>
                    Offering affordable internet connections in local areas
                  </li>
                </ul>
              )}
            </AnimatedCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section
        className={styles.section}
        id="projects"
        style={{ position: "relative", width: "100%", overflow: "hidden" }}
      >
        <AnimatedSection direction="left">
          <h2>Featured Projects</h2>
        </AnimatedSection>
        <div className={styles.projects}>
          <AnimatedSection direction="right" delay={0.3}>
            <AnimatedCard className={styles.projectCard}>
              <Image
                src="/project-task-management.png"
                alt="Task Management System"
                width={300}
                height={200}
                className={styles.projectImage}
              />
              <div className={styles.projectContent}>
                <h3>Task Management System</h3>
                <p>
                  A modern Todo application with real-time updates, user
                  authentication, and PWA support. Built with React and
                  Firebase.
                </p>
                <div className={styles.projectTech}>
                  <span>React.js</span>
                  <span>Firebase</span>
                  <span>PWA</span>
                </div>
                <a
                  href="/projects#task-management"
                  className={styles.projectLink}
                >
                  View Project
                </a>
              </div>
            </AnimatedCard>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.6}>
            <AnimatedCard className={styles.projectCard}>
              <Image
                src="/project-welfare-portal.png"
                alt="Student Welfare Support Portal"
                width={300}
                height={200}
                className={styles.projectImage}
              />
              <div className={styles.projectContent}>
                <h3>Student Welfare Support Portal</h3>
                <p>
                  A comprehensive welfare management system for Machakos
                  University, featuring online applications and document
                  verification.
                </p>
                <div className={styles.projectTech}>
                  <span>React.js</span>
                  <span>Express.js</span>
                  <span>MongoDB</span>
                </div>
                <a
                  href="/projects#welfare-portal"
                  className={styles.projectLink}
                >
                  View Project
                </a>
              </div>
            </AnimatedCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <section
        className={styles.section}
        id="skills"
        style={{ position: "relative", width: "100%", overflow: "hidden" }}
      >
        <AnimatedSection direction="left">
          <h2>Technical Expertise</h2>
        </AnimatedSection>
        <div className={styles.skills}>
          <AnimatedSection direction="right" delay={0.3}>
            <AnimatedCard className={styles.skillCategory}>
              <h3>Frontend</h3>
              <div className={styles.skillTags}>
                <span>React</span>
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>Module CSS</span>
                <span>Tailwind CSS</span>
              </div>
            </AnimatedCard>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.6}>
            <AnimatedCard className={styles.skillCategory}>
              <h3>Backend</h3>
              <div className={styles.skillTags}>
                <span>Node.js</span>
                <span>Express</span>
                <span>Flask</span>
              </div>
            </AnimatedCard>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.9}>
            <AnimatedCard className={styles.skillCategory}>
              <h3>Databases</h3>
              <div className={styles.skillTags}>
                <span>MySQL</span>
                <span>MongoDB</span>
                <span>Firestore</span>
                <span>PostgreSQL</span>
              </div>
            </AnimatedCard>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={1.2}>
            <AnimatedCard className={styles.skillCategory}>
              <h3>DevOps & Tools</h3>
              <div className={styles.skillTags}>
                <span>Docker</span>
                <span>AWS</span>
                <span>Git</span>
                <span>CI/CD</span>
              </div>
            </AnimatedCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className={styles.section}
        id="testimonials"
        style={{ position: "relative", width: "100%", overflow: "hidden" }}
      >
        <AnimatedSection direction="left">
          <h2>Client Testimonials</h2>
        </AnimatedSection>
        <div className={styles.testimonials}>
          <AnimatedSection direction="right" delay={0.3}>
            <AnimatedCard className={styles.testimonial}>
              <blockquote>
                Wekesa delivered exceptional results. His technical expertise
                and attention to detail helped us launch our product ahead of
                schedule.
              </blockquote>
              <cite>
                <strong>Sarah Johnson</strong>
                <span>CEO, TechStart</span>
              </cite>
            </AnimatedCard>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.6}>
            <AnimatedCard className={styles.testimonial}>
              <blockquote>
                Working with Wekesa was a game-changer for our business. He not
                only built a great product but also provided valuable insights
                throughout the process.
              </blockquote>
              <cite>
                <strong>Michael Chen</strong>
                <span>CTO, InnovateCorp</span>
              </cite>
            </AnimatedCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className={styles.section}
        id="contact"
        style={{ position: "relative", width: "100%", overflow: "hidden" }}
      >
        <AnimatedSection direction="left">
          <h2>Let&apos;s Work Together</h2>
        </AnimatedSection>
        <p className={styles.contactIntro}>
          I&apos;m currently available for new projects and consulting
          opportunities. Let&apos;s discuss how I can help bring your vision to
          life.
        </p>
        <div className={styles.contactGrid}>
          <AnimatedSection direction="right" delay={0.3}>
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
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.6}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
