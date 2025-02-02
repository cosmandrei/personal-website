import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Andrei Cosma | Personal Website",
  description: "Welcome to my personal website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-primary text-white min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-secondary py-4 px-6 flex justify-between items-center shadow-md">
          <div className="text-xl font-bold">My Logo</div>
          <nav className="space-x-6">
            {[
              { name: "Home", path: "/" },
              { name: "About Me", path: "/about-me" },
              { name: "Work", path: "/work" },
              { name: "Stream", path: "/stream" },
              { name: "Contact", path: "/contact" },
            ].map(({ name, path }) => (
              <Link key={name} href={path} className="hover:text-highlight">
                {name}
              </Link>
            ))}
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-secondary p-4 text-center mt-auto">
          <p>© 2025 Andrei Cosma | <Link href="/terms" className="underline">Terms of Service</Link></p>
        </footer>
      </body>
    </html>
  );
}