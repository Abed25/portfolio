import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "superDev Portfolio",
  description: "A showcase of projects and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
