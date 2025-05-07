import { useEffect } from 'react';
import playerSprite from '../assets/pixel/character/jibin_sprite.png';

export default function Player({ position, setPosition }) {
  useEffect(() => {
    const handleKey = (e) => {
      const speed = 20;
      setPosition(prev => {
        switch (e.key) {
          case 'ArrowRight': return { ...prev, x: prev.x + speed };
          case 'ArrowLeft': return { ...prev, x: prev.x - speed };
          case 'ArrowUp': return { ...prev, y: prev.y - speed };
          case 'ArrowDown': return { ...prev, y: prev.y + speed };
          default: return prev;
        }
      });
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [setPosition]);

  return (
    <img
      src={playerSprite}
      alt="Jibin"
      className="absolute w-10 h-10 z-50"
      style={{ left: position.x, top: position.y }}
    />
  );
}
