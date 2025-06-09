// src/app/layout.tsx  (server component)
import "./globals.css";
import ThemeRegistry from "./ThemeRegistry";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "superDev | Full Stack Web Developer | React & Node.js Expert",
  description: "Explore the portfolio of superDev (Abednego), a skilled Full Stack Web Developer specializing in React.js, Node.js, MySQL, and modern web technologies. Based in Kenya.",
  keywords: "superDev, Abednego, Full Stack Developer, Web Developer Kenya, React Developer, Node.js Developer, JavaScript Expert, Portfolio, MySQL, Express.js, Vercel, Clever Cloud",
  authors: [{ name: "superDev (Abednego)" }],
  openGraph: {
    title: "superDev | Full Stack Web Developer",
    description: "Portfolio of superDev (Abednego) - React.js & Node.js specialist creating secure, scalable web applications.",
    url: "https://portfolio-abeds-projects-aa9058cd.vercel.app/",
    siteName: "superDev Portfolio",
    images: [
      {
        url: "https://portfolio-abeds-projects-aa9058cd.vercel.app/preview-image.jpg",
        width: 1200,
        height: 630,
        alt: "superDev Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "superDev | Full Stack Developer",
    description: "Explore superDev's (Abednego) personal portfolio: Full Stack Developer with a focus on React, Node, MySQL & security.",
    images: ["https://portfolio-abeds-projects-aa9058cd.vercel.app/preview-image.jpg"],
    creator: "@superDev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://portfolio-abeds-projects-aa9058cd.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body suppressHydrationWarning style={{ margin: 0, padding: 0, overflowX: 'hidden', width: '100%' }}>
        <ThemeRegistry>
          <div style={{ width: '100%', overflowX: 'hidden' }}>
            <NavBar />
            {children}
            <Footer />
          </div>
        </ThemeRegistry>
      </body>
    </html>
  );
}
