import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Eye, Moon, Sun } from 'lucide-react'

export default function App(){ 
  const [dark, setDark] = useState(false)
  useEffect(()=>{
    if(dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  },[dark])

  const socials = {
    linkedin: 'https://www.linkedin.com/in/vedant-patel-5595a312a/',
    github: 'https://github.com/VedantPatel124',
    email: 'mailto:vedantjpatel124@gmail.com',
  }

  const projects = [
    {
      title: 'DevOps Cloud Infrastructure Automation',
      repo: 'devops-pipeline-project',
      timeframe: 'Mar 2025',
      desc: 'Automated CI/CD pipelines and provisioned AWS infrastructure using Terraform and Jenkins. Deployed microservices to EKS with Ansible orchestration and integrated Prometheus/Grafana for observability.'
    },
    {
      title: 'Go Web App with CI/CD on AWS',
      repo: 'go-web-app',
      timeframe: 'May 2025',
      desc: 'Built a containerized Go web application and implemented GitHub Actions for CI/CD. Deployed to AWS EKS using Helm charts and secure secret management.'
    },
    {
      title: 'MenuMaster - Restaurant Ordering System',
      repo: 'MenuMaster---A-Restaurant-Menu-Ordering-System',
      timeframe: 'Apr 2023',
      desc: 'Desktop-based ordering system developed in Python to streamline order flow and generate receipts, improving turnaround time for restaurant staff.'
    },
    {
      title: 'Online Shopping Portal',
      repo: 'Online-Shopping-Portal',
      timeframe: 'Dec 2023',
      desc: 'Full-stack e-commerce application with user accounts, product management, and secure checkout built using PHP and MySQL.'
    }
  ]

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100'>
      <header className='max-w-5xl mx-auto p-6 flex items-center justify-between'>
        <div>
          <h1 className='text-2xl md:text-3xl font-bold'>Vedant Patel</h1>
          <p className='text-sm opacity-80'>DevOps & Systems Engineer — Ottawa, ON, Canada</p>
        </div>
        <div className='flex items-center gap-3'>
          <a
            href='/Vedant_Resume_V2.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition'
            title="View resume (opens in a new tab)"
          >
            <Eye size={16}/> View Resume
          </a>

          <button
            onClick={()=>setDark(!dark)}
            aria-label='toggle-theme'
            className='p-2 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
          >
            {dark ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
        </div>
      </header>

      <main className='max-w-5xl mx-auto p-6 grid gap-8 md:grid-cols-3'>
        <aside className='md:col-span-1 bg-white dark:bg-gray-800/60 rounded-2xl p-6 shadow-glow'>
          <div className='flex flex-col items-center text-center gap-4'>
            <div className='w-28 h-28 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center text-2xl font-bold shadow-md'>
              VP
            </div>
            <div>
              <h2 className='text-xl font-semibold'>Vedant Patel</h2>
              <p className='text-sm opacity-80'>DevOps & Systems Engineer</p>
              <p className='text-sm opacity-70 mt-1'>Ottawa, ON, Canada</p>
            </div>

            <div className='flex gap-4 mt-3'>
              <a href={socials.linkedin} target='_blank' rel='noreferrer' className='hover:text-indigo-500'><Linkedin/></a>
              <a href={socials.github} target='_blank' rel='noreferrer' className='hover:text-indigo-500'><Github/></a>
              <a href={socials.email} className='hover:text-indigo-500'><Mail/></a>
            </div>

            <div className='w-full text-left mt-6'>
              <h3 className='text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400 mb-2'>Technical Proficiency</h3>
              <div className='space-y-3'>
                {[
                  { name: 'AWS & Cloud Services', level: 85 },
                  { name: 'Docker & Kubernetes', level: 80 },
                  { name: 'Terraform & IaC', level: 78 },
                  { name: 'CI/CD & Jenkins', level: 82 },
                  { name: 'Linux & System Support', level: 88 },
                  { name: 'Python & Bash', level: 84 },
                  ].map((skill, i) => (
                    <div key={i}>
                    <div className='flex justify-between text-sm font-medium'>
                      <span>{skill.name}</span>
                      <span className='opacity-80'>{skill.level}%</span>
                    </div>
                    <div className='w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden'>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        className='h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500'
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <section className='md:col-span-2 bg-white dark:bg-gray-800/70 rounded-2xl p-6 shadow-sm'>
          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
            <h2 className='text-2xl font-semibold text-indigo-600 dark:text-indigo-400'>About Me</h2>
            <p className='mt-3'>I build secure, scalable cloud infrastructures and CI/CD pipelines using AWS, Docker, Terraform and Jenkins. I combine DevOps automation with practical system support skills to keep systems reliable and maintainable.</p>

            <h3 className='mt-6 text-xl font-semibold'>Experience</h3>
            <div className='mt-3 space-y-3'>
              <article className='p-3 rounded-lg bg-gray-50 dark:bg-gray-900/40 border'>
                <h4 className='font-semibold'>Freelance DevOps Engineer — Self-Employed</h4>
                <p className='text-sm opacity-80'>May 2023 – Present | Remote</p>
                <ul className='list-disc list-inside mt-2 text-sm'>
                  <li>Built CI/CD pipelines, automated infra with Terraform, and supported EKS deployments.</li>
                  <li>Implemented monitoring with Prometheus and Grafana and centralized logging using ELK.</li>
                </ul>
              </article>

              <article className='p-3 rounded-lg bg-gray-50 dark:bg-gray-900/40 border'>
                <h4 className='font-semibold'>Graduate Teaching Assistant — Carleton University</h4>
                <p className='text-sm opacity-80'>Jan 2023 – Apr 2023 | Ottawa, Canada</p>
                <p className='text-sm mt-2'>Conducted labs, supported students on programming environments, and managed lab systems.</p>
              </article>
            </div>

            <h3 className='mt-6 text-xl font-semibold'>Projects</h3>
            <div className='grid gap-4 md:grid-cols-2 mt-3'>
              {projects.map((p, idx)=>(
                <motion.div key={idx} whileHover={{scale:1.03}} className='p-4 rounded-lg border bg-gray-50 dark:bg-gray-900/40 shadow-sm hover:shadow-glow transition'>
                  <div className='flex items-center justify-between'>
                    <h4 className='font-semibold'>{p.title}</h4>
                    <span className='text-sm opacity-70'>{p.timeframe}</span>
                  </div>
                  <p className='text-sm mt-2 opacity-80'>{p.desc}</p>
                  <a href={`https://github.com/VedantPatel124/${p.repo}`} target='_blank' rel='noreferrer' className='inline-block mt-3 text-sm underline text-indigo-600'>View on GitHub</a>
                </motion.div>
              ))}
            </div>

            <h3 className='mt-6 text-xl font-semibold'>Contact</h3>
            <p className='text-sm mt-2'>📧 <a href='mailto:vedantjpatel124@gmail.com' className='underline'>vedantjpatel124@gmail.com</a></p>
            {/* <p className='text-sm'>📍 Ottawa, ON | 📞 +1-647-835-9523</p> */}
          </motion.div>
        </section>
      </main>

      <footer className='max-w-5xl mx-auto p-6 text-center text-sm opacity-80'>
        © {new Date().getFullYear()} Vedant Patel — Built with React, Tailwind & Framer Motion
      </footer>
    </div>
  )
}
