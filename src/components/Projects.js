import React from 'react';
import { FaExternalLinkAlt, FaFilePdf } from 'react-icons/fa';
import apdImage from '../assets/apd.jpg';
import cloudImage from '../assets/cloud.jpeg';
import generativeImage from '../assets/generative.jpg';
import privacyImage from '../assets/privacy.jpeg';
import twitterImage from '../assets/twitter.png';
import depressionImage from '../assets/depression.jpeg';

const projects = [
  {
    title: 'Automatic Pith Detection in Tree Cross-Sections',
    timeline: 'Jan 2025 – Present',
    description:
      'Developed deep learning models (YOLOv8, U-Net, Swin Transformer) for pith detection in tree images, integrating self-supervised learning and augmentation.',
    skills: ['PyTorch', 'CNN', 'Computer Vision'],
    type: 'link',
    href: 'https://github.com/Bears-beets-battlestargalactica/Automatic_Pith_Detection/tree/main',
    image: apdImage,
  },
  {
    title: 'Cloud Memory Forensics via Hypervisors',
    timeline: 'Jan 2025 – Mar 2025',
    description:
      'Studied VMI and forensic hypervisors to improve live memory acquisition and proposed AI-assisted forensic techniques.',
    skills: ['VMI', 'Cloud Forensics', 'AI-Driven Forensics'],
    type: 'link',
    href: 'https://drive.google.com/file/d/1y1cvgyYmsvO99-BV8MRPWCQLSczVzgRE/view?usp=sharing',
    image: cloudImage,
  },
  {
    title: 'Generative AI in Journalism',
    timeline: 'Apr 2024 – Jun 2024',
    description:
      'Explored ethical concerns of LLMs in journalism—consent, bias, compensation—and proposed normative recommendations.',
    skills: ['Ethics', 'LLMs', 'Policy'],
    type: 'link',
    href: 'https://drive.google.com/file/d/1L4FhEyis-NiCtSVzSRud_kqnWuVHfnKY/view?usp=sharing',
    image: generativeImage,
  },
  {
    title: 'Privacy Risk Analysis Using Membership Inference',
    timeline: 'Jan 2024 – Mar 2024',
    description:
      'Assessed MemGuard’s scalability and found privacy vulnerabilities in ML models.',
    skills: ['Privacy', 'ML Attacks', 'Defense Evaluation'],
    type: 'link',
    href: 'https://drive.google.com/file/d/1GaQWamGNw8aeJoOdVSb5xq8x_OUyi4A9/view?usp=sharing',
    image: privacyImage,
  },
  {
    title: 'Twitter-Like Social Media App',
    timeline: 'Jun 2023 – Jul 2023',
    description:
      'Built a MERN-based Twitter clone with tweets, likes, follows, and auth.',
    skills: ['MongoDB', 'Express', 'React', 'Node'],
    type: 'link',
    href: 'https://github.com/Bears-beets-battlestargalactica/Twitter_new',
    image: twitterImage,
  },
  {
    title: 'Depression Detection from Tweets',
    timeline: 'Jan 2022 – Jun 2022',
    description:
      'Created a classifier to detect early signs of depression from Twitter data using sentiment metrics.',
    skills: ['NLP', 'Sentiment Analysis'],
    type: 'link',
    href: 'https://github.com/Bears-beets-battlestargalactica/Webappfordepressiondetectionontweets-main',
    image: depressionImage,
  },
];

export default function Projects() {
  return (
    <section className="px-6 py-12 bg-zinc-50 dark:bg-zinc-900" id="projects">
      <h2 className="text-3xl font-bold mb-10 text-center">🚀 My Projects</h2>
      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row max-w-4xl mx-auto bg-white dark:bg-zinc-800 shadow rounded-2xl overflow-hidden hover:scale-[1.01] transition-all"
          >
            {project.image && (
              <div className="lg:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover lg:h-64"
                />
              </div>
            )}
            <div className="p-5 flex-1">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-pink-300 mb-1">
                {project.timeline}
              </p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-white px-2 py-1 text-xs rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-white bg-pink-500 hover:bg-pink-600 transition px-3 py-1.5 rounded-full shadow"
                >
                  View Project{' '}
                  {project.type === 'link' ? <FaExternalLinkAlt /> : <FaFilePdf />}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
