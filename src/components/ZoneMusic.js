import { useEffect, useRef } from 'react';
import aboutMusic from '../assets/pixel/music/about.mp3';
import educationMusic from '../assets/pixel/music/education.mp3';
import skillsMusic from '../assets/pixel/music/skills.mp3';
import projectsMusic from '../assets/pixel/music/projects.mp3';
import contactMusic from '../assets/pixel/music/contact.mp3';

const zoneTracks = {
  about: aboutMusic,
  education: educationMusic,
  skills: skillsMusic,
  projects: projectsMusic,
  experience: educationMusic, // reuse
  contact: contactMusic,
};

export default function ZoneMusic({ zone }) {
  const audioRef = useRef(new Audio(zoneTracks[zone]));

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = zoneTracks[zone];
    audio.volume = 0.5;
    audio.loop = true;
    audio.play().catch(() => {});
    return () => {
      audio.pause();
    };
  }, [zone]);

  return null;
}
