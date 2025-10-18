import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, Moon, Sun } from "lucide-react";

export default function App() {
  const [dark, setDark] = useState(false);
  const resumePath = "/Vedant_Resume_V2.pdf";

  const socials = {
    linkedin: "https://www.linkedin.com/in/vedant-patel-5595a312a/",
    github: "https://github.com/VedantPatel124",
    email: "mailto:vedantjpatel124@gmail.com",
  };

  const skillSet = [
    { name: "AWS & Cloud Services", level: 90 },
    { name: "Docker & Kubernetes", level: 85 },
    { name: "Terraform & IaC", level: 88 },
    { name: "CI/CD & Jenkins", level: 92 },
    { name: "Linux & System Support", level: 87 },
    { name: "Python & Bash Scripting", level: 80 },
  ];

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-500">
        {/* Header */}
        <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl font-bold tracking-tight">Vedant Patel</h1>
            <p className="text-sm opacity-80">DevOps & Systems Engineer — Ottawa, ON, Canada</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="flex items-center gap-4">
            <a href={resumePath} download className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
              <Download size={16} /> Resume
            </a>
            <button onClick={() => setDark(!dark)} className="p-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </motion.div>
        </header>

        {/* Main */}
        <main className="max-w-6xl mx-auto px-6 py-8 grid gap-8 md:grid-cols-3">
          {/* Sidebar */}
          <motion.section initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="md:col-span-1 bg-white/70 dark:bg-gray-800/60 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-28 h-28 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center text-2xl font-bold shadow-md">
                VP
              </div>
              <div>
                <h2 className="text-xl font-semibold">Vedant Patel</h2>
                <p className="text-sm opacity-80">DevOps & Systems Engineer</p>
                <p className="text-sm opacity-70 mt-1">Ottawa, ON, Canada</p>
              </div>

              {/* Socials */}
              <div className="flex gap-4 mt-3">
                <a href={socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-500"><Linkedin /></a>
                <a href={socials.github} target="_blank" rel="noreferrer" className="hover:text-indigo-500"><Github /></a>
                <a href={socials.email} className="hover:text-indigo-500"><Mail /></a>
              </div>

              {/* Animated Skill Bars */}
              <div className="w-full text-left mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400 mb-2">Technical Proficiency</h3>
                <div className="space-y-3">
                  {skillSet.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm font-medium">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Main Content */}
          <motion.section initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="md:col-span-2 bg-white/80 dark:bg-gray-800/70 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">About Me</h2>
              <p>
                I’m a Software and DevOps Engineer with a passion for automating infrastructure, designing CI/CD pipelines, and optimizing system reliability.
                I build secure, scalable cloud architectures using AWS, Docker, Terraform, and Jenkins while ensuring system uptime through proactive monitoring and troubleshooting.
              </p>

              {/* Interactive Experience Section */}
              <h2 className="text-2xl font-semibold mt-8 mb-2 text-indigo-600 dark:text-indigo-400">Experience</h2>
              <div className="space-y-4">
                {["Freelance DevOps Engineer", "Personal Projects & Skill Development", "Graduate Teaching Assistant", "Graduate Trainee", "Software Development Engineer Intern"].map((title, idx) => (
                  <motion.div key={idx} whileHover={{ scale: 1.02, backgroundColor: dark ? "#374151" : "#f3f4f6" }} className="p-3 rounded-lg transition">
                    <h3 className="font-semibold text-lg">{title}</h3>
                    <p className="text-sm opacity-80">Refer resume for complete details</p>
                  </motion.div>
                ))}
              </div>

              {/* Project Cards with Hover Animation */}
              <h2 className="text-2xl font-semibold mt-8 mb-2 text-indigo-600 dark:text-indigo-400">Projects</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {["devops-pipeline-project", "go-web-app", "MenuMaster---A-Restaurant-Menu-Ordering-System", "Online-Shopping-Portal"].map((proj, idx) => (
                  <motion.div key={idx} whileHover={{ scale: 1.05 }} className="p-4 rounded-lg border bg-gray-50 dark:bg-gray-800/60 shadow-md">
                    <h4 className="font-semibold mb-1">{proj.replaceAll('-', ' ').toUpperCase()}</h4>
                    <a href={`${socials.github}/${proj}`} target="_blank" rel="noreferrer" className="text-sm underline text-indigo-500">View on GitHub</a>
                  </motion.div>
                ))}
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-2 text-indigo-600 dark:text-indigo-400">Contact</h2>
              <p className="text-sm">📧 <a href={socials.email} className="underline">vedantjpatel124@gmail.com</a></p>
              {/*<p className="text-sm">📍 Ottawa, ON | 📞 +1-647-835-9523</p>*/}
            </div>
          </motion.section>
        </main>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto px-6 py-6 text-center text-sm opacity-80">
          <p>© {new Date().getFullYear()} Vedant Patel — Built with 💙 using React, Tailwind & Framer Motion</p>
        </footer>
      </div>
    </div>
  );
}
