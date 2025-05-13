// src/app/layout.tsx  (server component)
import "./globals.css";
import ThemeRegistry from "./ThemeRegistry";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

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
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeRegistry>
          <NavBar />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
