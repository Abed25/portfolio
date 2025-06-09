"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ProjectsPage.module.css';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoUrl: string;
  sourceUrl: string;
  testInstructions?: string;
}

const projects: Project[] = [
  {
    id: 'task-management',
    title: 'Task Management System',
    description: 'A simple yet powerful Todo App built with React and Firebase, now installable as a Progressive Web App (PWA). Features include user authentication, personal task space per user, task status tracking, and real-time synchronization across devices. The app is designed to help users organize their tasks and boost productivity on the go.',
    image: 'https://placehold.co/600x400/2563eb/ffffff?text=Task+Management',
    techStack: ['React.js', 'Firebase', 'Vite', 'PWA'],
    demoUrl: 'https://to-do-dusky-iota.vercel.app/',
    sourceUrl: 'https://github.com/Abed25/ToDo',
    testInstructions: '1. Sign up or log in to access your personal task space\n2. Create, edit, and delete tasks\n3. Track task status (completed/pending)\n4. Experience real-time sync across devices\n5. Try installing as a PWA on your device'
  },
  {
    id: 'welfare-portal',
    title: 'Student Welfare Support Portal',
    description: 'A comprehensive web-based Welfare Portal for Machakos University, designed to streamline welfare services management. The system provides a centralized platform for welfare registration, claims processing, and communication between students, staff, and administrators. Features include online applications, document verification, status tracking, and an admin dashboard for efficient service delivery.',
    image: 'https://placehold.co/600x400/4f46e5/ffffff?text=Welfare+Portal',
    techStack: ['React.js', 'Express.js', 'MongoDB', 'Firebase', 'Vercel'],
    demoUrl: '#',
    sourceUrl: 'https://github.com/Abed25/welfare-portal',
    testInstructions: 'Demo coming soon!'
  },
  {
    id: 'ai-assistant',
    title: 'AI Virtual Assistant',
    description: 'An intelligent virtual assistant powered by advanced AI that can help with various tasks, answer questions, and provide real-time assistance.',
    image: 'https://placehold.co/600x400/7c3aed/ffffff?text=AI+Assistant',
    techStack: ['Next.js', 'TypeScript', 'OpenAI', 'Tailwind CSS'],
    demoUrl: '#',
    sourceUrl: '#',
    testInstructions: 'Demo coming soon!'
  }
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className={`${styles.main} projects-page`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.projectsSection}
      >
        <h1 className={styles.title}>My Projects</h1>
        
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.projectCard}
            >
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
              <div className={styles.projectContent}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.techStack}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.projectActions}>
                  {project.demoUrl !== '#' ? (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className={`${styles.actionButton} ${styles.demoButton}`}
                    >
                      Try Demo
                    </button>
                  ) : (
                    <button
                      disabled
                      className={`${styles.actionButton} ${styles.demoButton}`}
                      style={{ opacity: 0.7, cursor: 'not-allowed' }}
                    >
                      Coming Soon
                    </button>
                  )}
                  {project.sourceUrl !== '#' ? (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.actionButton} ${styles.sourceButton}`}
                    >
                      View Source
                    </a>
                  ) : (
                    <button
                      disabled
                      className={`${styles.actionButton} ${styles.sourceButton}`}
                      style={{ opacity: 0.7, cursor: 'not-allowed' }}
                    >
                      Source Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && selectedProject.demoUrl !== '#' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.demoModal}
            >
              <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                  <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className={styles.closeButton}
                  >
                    ×
                  </button>
                </div>

                {selectedProject.testInstructions && (
                  <p className={styles.projectDescription}>
                    <strong>How to test:</strong> {selectedProject.testInstructions}
                  </p>
                )}

                <iframe
                  src={selectedProject.demoUrl}
                  className={styles.demoFrame}
                  title={`${selectedProject.title} Demo`}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
