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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent!");
        setFormData({ name: "", email: "", projectType: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      alert("Something went wrong.");
      console.error(err);
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
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
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        Send Message
      </button>
    </form>
  );
}
