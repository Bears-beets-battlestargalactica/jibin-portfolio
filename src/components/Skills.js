import React from 'react';

const skills = [
  'Python', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'PyTorch',
  'Machine Learning', 'Deep Learning', 'Cybersecurity', 'NLP',
  'Ethical Hacking', 'Git', 'Linux', 'C++', 'SQL',
];

export default function Skills() {
  return (
    <section className="px-6 py-12 bg-white dark:bg-zinc-800" id="skills">
      <h2 className="text-3xl font-bold text-center mb-8">🧠 Skills</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-full shadow-md hover:scale-110 transition transform"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
