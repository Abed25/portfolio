// src/app/layout.tsx  (server component)
import "./globals.css";
import ThemeRegistry from "./ThemeRegistry";
import NavBar from "../components/Navbar";

export const metadata = {
  title: "superDev Portfolio",
  description: "Tech Entrepreneur | Software Developer | Innovator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          {/* ← NavBar goes here, inside ThemeRegistry so it inherits theme classes */}
          <NavBar />

          {/* Then all your page content */}
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
