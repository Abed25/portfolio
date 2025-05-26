"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import styles from "./NavBar.module.css";
import { FaMoon, FaSun, FaBrain, FaUserAstronaut } from "react-icons/fa";
import AIChat from "./AIChat";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href="/">superDev</Link>
          </div>

          {/* Theme Toggle and AI Assistant Buttons */}
          <div className={styles.actionButtons}>
            <button
              className={styles.aiAssistantBtn}
              onClick={toggleChat}
              title="Chat with superdev's AI Agent - Your intelligent assistant for exploring skills, projects, and services"
              aria-label="Open AI chat"
            >
              <div className={styles.aiIconWrapper}>
                <FaUserAstronaut className={styles.aiIcon} />
                <FaBrain className={styles.aiBrainIcon} />
              </div>
            </button>
            <button
              className={styles.toggleThemeBtn}
              onClick={toggleTheme}
              aria-label={`Switch to ${
                resolvedTheme === "dark" ? "light" : "dark"
              } theme`}
            >
              {resolvedTheme === "dark" ? (
                <FaSun style={{ color: "#fff", fontSize: "20px" }} />
              ) : (
                <FaMoon style={{ color: "#000", fontSize: "20px" }} />
              )}
            </button>
          </div>

          {/* Menu Toggle (Mobile) */}
          <button
            className={styles.toggle}
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>

          {/* Navigation Links */}
          <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/projects", label: "Projects" },
              { href: "/skills", label: "Skills" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`${styles.link} ${
                  pathname === href ? styles.active : ""
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <AIChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}
