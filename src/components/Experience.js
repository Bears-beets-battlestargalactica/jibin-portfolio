import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import osuLogo from '../assets/osu.png';
import neoLogo from '../assets/neo.jpeg';
import tbhLogo from '../assets/tbh.jpeg';
import singLogo from '../assets/sing.jpeg';
import gencyberLogo from '../assets/gencyber.png';

const experienceItems = [
  {
    role: 'Graduate Teaching Assistant',
    org: 'Oregon State University',
    time: 'Dec 2024 – Present · 6 mos',
    location: 'Corvallis, Oregon, USA',
    desc: ['Guided students in mastering core software design and programming fundamentals.'],
    logo: osuLogo,
  },
  {
    role: 'Teaching Assistant – Haskell & Software Engineering',
    org: 'Oregon State University',
    time: 'Nov 2024 – Dec 2024 · 2 mos',
    location: 'Corvallis, Oregon, USA',
    desc: ['Mentored students in Python, debugging, and final project evaluations.'],
    logo: osuLogo,
  },
  {
    role: 'Instructor – GenCyber NW Cybersecurity Camp',
    org: 'Oregon State University',
    time: 'Jun 2024 – Jul 2024 · 2 mos',
    location: 'Corvallis, Oregon, USA',
    desc: ['Delivered hands-on cybersecurity lessons and co-developed curriculum.'],
    logo: gencyberLogo,
  },
  {
    role: 'Security Analyst Intern',
    org: 'ORTSOC',
    time: 'Apr 2024 – Jun 2024 · 3 mos',
    desc: ['Red-teamed internal infra; used Zeek/Elastic for active threat response.'],
    logo: osuLogo,
  },
  {
    role: 'MERN Stack Development Intern',
    org: 'NeoITO',
    time: 'May 2023 – Jul 2023 · 3 mos',
    location: 'Thiruvananthapuram, India',
    desc: ['Engineered a full-stack social platform with MERN and secure auth.'],
    logo: neoLogo,
  },
  {
    role: 'Ethical Hacking Intern',
    org: 'TBH',
    time: 'Aug 2020 · 1 mo',
    location: 'Kochi, India',
    desc: ['Explored IP spoofing, simulated attacks, and security protocols.'],
    logo: tbhLogo,
  },
  {
    role: 'Intern',
    org: 'Singularis Software Technologies',
    time: 'May 2019 · 1 mo',
    location: 'Kottayam, India',
    desc: ['Built Django modules and optimized data-driven backend services.'],
    logo: singLogo,
  }
];

export default function Experience() {
  return (
    <section className="py-14 px-4 max-w-6xl mx-auto text-center" id="experience">
      <motion.h2
        className="text-4xl md:text-5xl font-arcade tracking-wide text-zinc-800 dark:text-pink-500 mb-16"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        🧭 Experience
      </motion.h2>

      <div className="relative max-w-6xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-zinc-400 dark:bg-pink-500"></div>

        <div className="flex flex-col gap-20">
          {experienceItems.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className={`relative flex ${isLeft ? 'justify-start pr-6' : 'justify-end pl-6'} pt-6 md:pt-8`}
                initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-10 h-10 bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center shadow ring-2 ring-pink-500">
                    {item.logo ? (
                      <img src={item.logo} alt={item.org} className="w-6 h-6 object-contain" />
                    ) : (
                      <FaBriefcase className="text-pink-500 dark:text-white" />
                    )}
                  </div>
                </div>

                <div className="max-w-xl w-full">
                  <div className="bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]">
                    <h3 className="text-xl font-semibold text-zinc-800 dark:text-white">
                      {item.role}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-pink-300">
                      {item.org} {item.location && `· ${item.location}`}
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-pink-400 mb-2">
                      {item.time}
                    </p>
                    <p className="text-zinc-700 dark:text-pink-200">
                      {item.desc[0]}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 
