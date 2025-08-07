"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code2,
  Lightbulb,
  Layout,
  Users,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Badge,
  Send,
} from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio to showcase my work, skills, and experience. Built with Next.js and Tailwind CSS.",
    link: "#",
  },
  {
    title: "E-commerce UI Kit",
    description:
      "A modern, responsive e-commerce UI kit with product listings, cart, and checkout flows.",
    link: "#",
  },
  {
    title: "Chat App Demo",
    description:
      "A real-time chat application demo using React, Socket.io, and Framer Motion for smooth animations.",
    link: "#",
  },
];

export default function Home() {
  // For scroll-based shimmer effect on timeline
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });
  // Map scroll progress (0-1) to shimmer Y position (0px to timeline height)
  const shimmerY = useTransform(scrollYProgress, [0, 1], [0, 600]); // 600px is an estimate, adjust as needed
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      {/* Hero Section */}
      <motion.section
        className="w-full max-w-3xl text-center flex flex-col items-center gap-6 mt-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold leading-tight tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        >
          Quality code, <br className="hidden md:inline" /> every interaction
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-[#b3b3b3] font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
        >
          Hi, I&apos;m{" "}
          <span className="text-white font-semibold">Samuel Uzor</span> — a
          frontend developer in my final year, passionate about building
          beautiful web experiences. <br />
          <span className="text-[#f87171] font-semibold">
            Open to job opportunities!
          </span>
        </motion.p>
        <motion.a
          href="#contact"
          className="mt-4 px-8 py-3 rounded-full bg-white text-[#18181b] font-semibold text-lg shadow-lg hover:bg-[#ededed] transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        >
          Get in touch
        </motion.a>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="w-full max-w-2xl mt-32 mb-20 text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-[#b3b3b3]">
          I&apos;m currently in my final year of computer engineering, where
          I&apos;ve developed a deep passion for frontend development and
          building scalable web applications. My journey started with curiosity
          about how websites work, and has evolved into expertise in modern web
          technologies. <br /> I specialize in creating responsive,
          user-friendly interfaces using React, TypeScript, and modern CSS
          frameworks, particularly interested in performance optimization,
          accessibility, and creating seamless user experiences. Currently
          seeking opportunities to contribute to innovative projects and
          collaborate with talented teams in the tech industry.
        </p>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="w-full max-w-4xl mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="bg-[#23232a] rounded-xl p-6 shadow-lg border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1 * idx, duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-[#b3b3b3] mb-2">{project.description}</p>
              <a
                href={project.link}
                className="text-[#f87171] font-medium hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id=""
        className="w-full max-w-4xl mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <ul className="flex flex-wrap gap-4 text-lg text-[#ededed]">
          <li className="bg-[#23232a] px-4 py-2 rounded-full">React</li>
          <li className="bg-[#23232a] px-4 py-2 rounded-full">Next.js</li>
          <li className="bg-[#23232a] px-4 py-2 rounded-full">Tailwind CSS</li>
          <li className="bg-[#23232a] px-4 py-2 rounded-full">TypeScript</li>
          <li className="bg-[#23232a] px-4 py-2 rounded-full">Framer Motion</li>
          <li className="bg-[#23232a] px-4 py-2 rounded-full">Supabase</li>
          <li className="bg-[#23232a] px-4 py-2 rounded-full">Figma</li>
          <li className="bg-[#23232a] px-4 py-2 rounded-full">Arduino cloud</li>
          <li className="bg-[#23232a] px-4 py-2 rounded-full">React Native</li>
        </ul>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white/5 rounded-2xl p-8 shadow-lg border border-white/10 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#f87171]">
            <span className="inline-block bg-white/10 rounded-xl p-3 mb-4">
              <Code2 className="w-8 h-8 text-[#23232a]" />
            </span>
            <h3 className="text-lg font-semibold mb-2">Web Development</h3>
            <p className="text-[#b3b3b3]">
              Building modern, responsive, and performant web applications using
              the latest technologies and best practices.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-8 shadow-lg border border-white/10 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#f87171]">
            <span className="inline-block bg-white/10 rounded-xl p-3 mb-4">
              <Lightbulb className="w-8 h-8 text-[#23232a]" />
            </span>
            <h3 className="text-lg font-semibold mb-2">Problem Solving</h3>
            <p className="text-[#b3b3b3]">
              Strong analytical skills and a passion for solving complex
              problems with efficient, elegant solutions.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-8 shadow-lg border border-white/10 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#f87171]">
            <span className="inline-block bg-white/10 rounded-xl p-3 mb-4">
              <Layout className="w-8 h-8 text-[#23232a]" />
            </span>
            <h3 className="text-lg font-semibold mb-2">UI/UX Design</h3>
            <p className="text-[#b3b3b3]">
              Designing intuitive and visually appealing user interfaces focused
              on user experience and accessibility.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-8 shadow-lg border border-white/10 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#f87171]">
            <span className="inline-block bg-white/10 rounded-xl p-3 mb-4">
              <Users className="w-8 h-8 text-[#23232a]" />
            </span>
            <h3 className="text-lg font-semibold mb-2">Team Collaboration</h3>
            <p className="text-[#b3b3b3]">
              Excellent communication and teamwork skills, thriving in
              collaborative development environments.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Experience & Education Timeline Section */}
      <section id="experience" className="w-full max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-2">
          <span className="bg-gradient-to-r from-[#f87171]  bg-clip-text text-transparent">  Experience &</span>
          <span className="">  Education</span>
        </h2>
        <p className="text-center text-[#b3b3b3] mb-10">
          My journey in technology, from academic foundations to practical
          experience.
        </p>
        <div className="relative flex flex-col items-center" ref={timelineRef}>
          {/* Vertical line with bright, scroll-based red shimmer */}
          <div className="absolute left-1/2 top-0 w-1 bg-white/10 h-full -translate-x-1/2 z-0 overflow-hidden">
            {/* Red shimmer effect, scroll-based */}
            <motion.div
              className="absolute left-0 w-full h-24 bg-gradient-to-b from-transparent via-red-500 to-white to-80% blur-lg opacity-90 shadow-2xl"
              style={{ y: shimmerY, top: 0 }}
            />
          </div>
          {/* Timeline items */}
          <div className="relative z-10 w-full flex flex-col gap-16">
            {/* 1st item - left */}
            <div className="flex md:justify-start justify-center w-full relative">
              <motion.div
                className="bg-white/5 rounded-xl shadow-lg border border-white/10 p-6 max-w-md w-full"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="font-semibold text-lg mb-1">
                  Fullstack Developer
                </h3>
                <div className="flex items-center text-sm text-[#b3b3b3] mb-2 gap-2">
                  <span className="flex items-center gap-1">
                    <span className="inline-block">
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M3 8l4 4 6-8" />
                      </svg>
                    </span>
                    Finable
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <span className="inline-block">
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                      >
                        <circle cx="8" cy="8" r="6" />
                      </svg>
                    </span>
                    Remote
                  </span>
                </div>
                <div className="text-xs text-[#b3b3b3] mb-2">
                  Dec 2024 - Present
                </div>
                <p className="mb-3 text-[#ededed]">
                  Developed responsive web applications using React and
                  TypeScript. Collaborated with design team to implement
                  pixel-perfect UI components and improved application
                  performance by 30%.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#23232a] px-2 py-1 rounded text-xs">
                    React
                  </span>
                  <span className="bg-[#23232a] px-2 py-1 rounded text-xs">
                    TypeScript
                  </span>
                  <span className="bg-[#23232a] px-2 py-1 rounded text-xs">
                    Tailwind CSS
                  </span>
                  <span className="bg-[#23232a] px-2 py-1 rounded text-xs">
                    Git
                  </span>
                  <span className="bg-[#23232a] px-2 py-1 rounded text-xs">
                    Figma
                  </span>
                </div>
              </motion.div>
            </div>
            {/* 2nd item - right */}
            <div className="flex md:justify-end justify-center w-full relative">
              <motion.div
                className="bg-white/5 rounded-xl shadow-lg border border-white/10 p-6 max-w-md w-full"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="font-semibold text-lg mb-1">
                  Frontend Developer Intern
                </h3>
                <div className="flex items-center text-sm text-[#b3b3b3] mb-2 gap-2">
                  <span className="flex items-center gap-1">
                    <span className="inline-block">
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M3 8l4 4 6-8" />
                      </svg>
                    </span>
                    Investnaira
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <span className="inline-block">
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                      >
                        <circle cx="8" cy="8" r="6" />
                      </svg>
                    </span>
                    Remote
                  </span>
                </div>
                <div className="text-xs text-[#b3b3b3] mb-2">
                  Mar 2024 - Jan 2025
                </div>
                <p className="mb-3 text-[#ededed]">
                  Built custom websites and web applications for small
                  businesses. Managed complete project lifecycle from
                  requirements gathering to deployment and maintenance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#23232a] px-2 py-1 rounded text-xs">
                    React
                  </span>
                  <span className="bg-[#23232a] px-2 py-1 rounded text-xs">
                    Next.js
                  </span>
                  <span className="bg-[#23232a] px-2 py-1 rounded text-xs">
                    WordPress
                  </span>
                  <span className="bg-[#23232a] px-2 py-1 rounded text-xs">
                    PHP
                  </span>
                  <span className="bg-[#23232a] px-2 py-1 rounded text-xs">
                    MySQL
                  </span>
                </div>
              </motion.div>
            </div>
            {/* 3rd item - left */}
            <div className="flex md:justify-start justify-center w-full relative">
              <motion.div
                className="bg-white/5 rounded-xl shadow-lg border border-white/10 p-6 max-w-md w-full"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="font-semibold text-lg mb-1">
                  BEng, Computer Engineering
                </h3>
                <div className="flex items-center text-sm text-[#b3b3b3] mb-2 gap-2">
                  <span className="flex items-center gap-1">
                    <span className="inline-block">
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                      >
                        <rect x="2" y="2" width="12" height="12" rx="2" />
                      </svg>
                    </span>
                    Convenant University
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <span className="inline-block">
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                      >
                        <circle cx="8" cy="8" r="6" />
                      </svg>
                    </span>
                    Local Campus
                  </span>
                </div>
                <div className="text-xs text-[#b3b3b3] mb-2">
                  Jan 2021 - July 2025
                </div>
                <p className="mb-3 text-[#ededed]">
                  Final year student with focus on software engineering,
                  algorithms, and data structures. Relevant coursework includes
                  Web Development, Database Systems, and Software Engineering.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#23232a] px-2 py-1 rounded text-xs">
                    Java
                  </span>
                  <span className="bg-[#23232a] px-2 py-1 rounded text-xs">
                    Python
                  </span>
                  <span className="bg-[#23232a] px-2 py-1 rounded text-xs">
                    C++
                  </span>
                  <span className="bg-[#23232a] px-2 py-1 rounded text-xs">
                    Database Design
                  </span>
                  <span className="bg-[#23232a] px-2 py-1 rounded text-xs">
                    Software Engineering
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="w-full max-w-5xl mb-20 mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold text-center mb-2">
          Let&apos;s{" "}
          <span className="bg-gradient-to-r from-[#f87171]  bg-clip-text text-transparent">
            Connect
          </span>
        </h2>
        <p className="text-center text-[#b3b3b3] mb-10 text-lg">
          I&apos;m always open to discussing new opportunities, interesting
          projects, or just having a chat about technology.
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Contact Info */}
          <div className="flex-1 bg-[#23232a] rounded-2xl p-8 flex flex-col gap-6 shadow border border-white/10 max-w-[400px] text-[#ededed]">
            <div>
              <span className="inline-block text-xs bg-[#18181b] text-[#b3b3b3] px-3 py-1 rounded-full mb-2">
                Available for opportunities
              </span>
              <h3 className="text-xl font-bold mb-2 text-white">
                Ready to collaborate
              </h3>
              <p className="text-[#b3b3b3] mb-4">
                Whether you have a project in mind, want to discuss
                opportunities, or just want to connect, I&apos;d love to hear
                from you.
              </p>
              <div className="flex flex-col gap-3 mb-4">
                <div className="flex items-center gap-3 text-base">
                  <span className="bg-[#18181b] text-white p-2 rounded-full">
                    <Mail className="w-5 h-5" />
                  </span>
                  <span>Email</span>
                  <span className="ml-auto font-medium text-white">
                    samueluzor80@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-3 text-base">
                  <span className="bg-[#18181b] text-white p-2 rounded-full">
                    <Phone className="w-5 h-5" />
                  </span>
                  <span>Phone</span>
                  <span className="ml-auto font-medium text-white">
                    +234 813 5492 141
                  </span>
                </div>
                <div className="flex items-center gap-3 text-base">
                  <span className="bg-[#18181b] text-white p-2 rounded-full">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <span>Location</span>
                  <span className="ml-auto font-medium text-white">
                    Nigeria
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <span className="block font-semibold mb-2 text-white">
                  Connect with me
                </span>
                <div className="flex gap-3 mb-4">
                  <a
                    href="https://github.com/Rockstones80"
                    className="bg-[#18181b] hover:bg-[#23232a] text-white p-2 rounded-lg"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/samuel-uzor/"
                    className="bg-[#18181b] hover:bg-[#23232a] text-white p-2 rounded-lg"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-[#18181b] hover:bg-[#23232a] text-white p-2 rounded-lg"
                  >
                    <Badge className="w-5 h-5" />
                  </a>
                </div>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-white text-black rounded-lg px-4 py-3 font-semibold shadow hover:bg-gray-200 transition"
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor">
                    <path d="M12 16v-4m0 0V8m0 4H8m4 0h4" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          {/* Right: Contact Form */}
          <div className="flex-1 bg-[#18181b] rounded-2xl p-8 shadow border border-white/10 min-w-[450px] text-[#ededed]">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Send me a message
            </h3>
            <form className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="flex-1 flex flex-col gap-1">
                  <label htmlFor="name" className="font-medium text-[#b3b3b3]">
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="border border-white/10 rounded px-3 py-2 bg-[#23232a] text-[#ededed] placeholder:text-[#b3b3b3]"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <label htmlFor="email" className="font-medium text-[#b3b3b3]">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="border border-white/10 rounded px-3 py-2 bg-[#23232a] text-[#ededed] placeholder:text-[#b3b3b3]"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="subject" className="font-medium text-[#b3b3b3]">
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  className="border border-white/10 rounded px-3 py-2 bg-[#23232a] text-[#ededed] placeholder:text-[#b3b3b3]"
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="font-medium text-[#b3b3b3]">
                  Message *
                </label>
                <textarea
                  id="message"
                  className="border border-white/10 rounded px-3 py-2 min-h-[100px] bg-[#23232a] text-[#ededed] placeholder:text-[#b3b3b3]"
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-2 flex items-center justify-center gap-2 bg-white text-black rounded-lg px-4 py-3 font-semibold shadow hover:bg-gray-200 transition w-full"
              >
                <Send />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
