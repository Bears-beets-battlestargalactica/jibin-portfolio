import { useEffect, useState } from 'react';
import Player from './Player';
import ZoneMusic from './ZoneMusic';
import SectionPopup from './SectionPopup';

import school from '../assets/pixel/buildings/school.png';
import lab from '../assets/pixel/buildings/lab.png';
import castle from '../assets/pixel/buildings/castle.png';
import office from '../assets/pixel/buildings/office.png';
import mailbox from '../assets/pixel/buildings/mailbox.png';
import grass from '../assets/pixel/backgrounds/groundLayer1.png';
import sky from '../assets/pixel/backgrounds/cloudLayer1.png';

const sections = [
  { id: 'about', label: '🏡 Home', x: 100, y: 300 },
  { id: 'education', label: '🏫 School', x: 500, y: 300, img: school },
  { id: 'skills', label: '🧠 Lab', x: 900, y: 300, img: lab },
  { id: 'projects', label: '🛠️ Castle', x: 1300, y: 300, img: castle },
  { id: 'experience', label: '🏢 Office', x: 1700, y: 300, img: office },
  { id: 'contact', label: '📬 Mailbox', x: 2100, y: 300, img: mailbox },
];

export default function GameMap() {
  const [position, setPosition] = useState({ x: 100, y: 400 });
  const [zone, setZone] = useState('about');

  // Detect zone based on position
  useEffect(() => {
    const z = sections.find(s => Math.abs(s.x - position.x) < 100);
    if (z) setZone(z.id);
  }, [position]);

  return (
    <div className="relative w-[3000px] h-screen overflow-x-auto bg-zinc-900 text-white">
      {/* Sky background */}
      <img src={sky} alt="sky" className="absolute w-full h-full object-cover z-0" />

      {/* Grass strip */}
      <img src={grass} alt="grass" className="absolute bottom-0 w-full h-[150px] object-repeat-x z-10" />

      {/* Render buildings */}
      {sections.map((s) => (
        <div
          key={s.id}
          id={s.id}
          className="absolute text-center text-white"
          style={{ left: s.x, top: s.y }}
        >
          <img src={s.img} alt={s.label} className="w-24 h-24 mx-auto mb-1" />
          <p>{s.label}</p>
        </div>
      ))}

      {/* Popups when in zone */}
      <SectionPopup zone={zone} />

      {/* Main Character */}
      <Player position={position} setPosition={setPosition} />

      {/* Music per zone */}
      <ZoneMusic zone={zone} />
    </div>
  );
}
