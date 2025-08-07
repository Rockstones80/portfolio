import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Mail, Download } from "lucide-react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uzii",
  description: "Aspiring Software Developer open to opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#18181b] text-[#ededed] min-h-screen`}
      >
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-3 bg-transparent backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-4 flex-1">
            <a
              href="#contact"
              className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-black hover:bg-gray-100 transition bg-white/90 shadow-sm text-base font-semibold"
            >
              <Mail className="w-5 h-5" />
              Contact
            </a>
          </div>
          <ul className="flex gap-8 text-base font-medium items-center mx-auto">
            <li>
              <a href="#about" className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#f87171] after:transition-all after:duration-500 hover:after:w-full">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#f87171] after:transition-all after:duration-500 hover:after:w-full">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#f87171] after:transition-all after:duration-500 hover:after:w-full">
                Experience
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-4 flex-1 justify-end">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#18181b] text-white rounded-lg px-4 py-2 font-semibold shadow-md hover:bg-[#23232a] transition"
            >
              <Download className="w-5 h-5" />
              Resume
            </a>
          </div>
        </nav>
        <div className="pt-24">{children}</div>
      </body>
    </html>
  );
}
