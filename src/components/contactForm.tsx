"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import styles from "../app/HomePage.module.css"; // adjust this path to match your project

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear status when user starts typing again
    if (status.type) {
      setStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        setFormData({ name: "", email: "", projectType: "", message: "" });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      {status.type && (
        <div className={`${styles.alert} ${styles[status.type]}`}>
          {status.message}
        </div>
      )}
      <div className={styles.formGroup}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type="text"
          name="projectType"
          placeholder="Project Type"
          required
          value={formData.projectType}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>
      <div className={styles.formGroup}>
        <textarea
          name="message"
          placeholder="Tell me about your project"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>
      <button 
        type="submit" 
        className={styles.submitButton}
        disabled={isLoading}
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
