import { FaGraduationCap, FaUniversity } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Education() {
  const educationItems = [
    {
      icon: <FaUniversity className="text-white text-xl" />,
      title: 'M.S. Computer Science',
      institution: 'Oregon State University, USA',
      duration: '2023 – 2025 (Expected)',
      gpa: 'GPA: 3.95',
    },
    {
      icon: <FaGraduationCap className="text-white text-xl" />,
      title: 'B.Tech Computer Science',
      institution: 'APJ Abdul Kalam Technological University, India',
      duration: '2019 – 2023',
      gpa: 'GPA: 4.0',
    },
  ];

  return (
    <section className="py-14 px-4 max-w-6xl mx-auto text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-arcade tracking-wide text-zinc-800 dark:text-pink-500 mb-16"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        🎓 Education
      </motion.h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 h-full w-1 bg-zinc-400 dark:bg-pink-500" />

        <div className="space-y-16 pl-12 text-left">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Circle icon */}
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-zinc-600 dark:bg-pink-500 flex items-center justify-center shadow-md">
                {item.icon}
              </div>

              {/* Card with pink glow on hover */}
              <div className="ml-12 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]">
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-700 dark:text-pink-300">
                  {item.institution}
                </p>
                <p className="text-sm text-zinc-700 dark:text-pink-300">
                  {item.duration}
                </p>
                <p className="text-sm italic text-zinc-600 dark:text-pink-400">
                  {item.gpa}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
