import { useState, useEffect } from 'react';

const secretLines = [
  'ACCESSING PERSONAL FILES...',
  'Decrypting personality matrix...',
  '✓ Loves dark themes and debugger sessions',
  '✓ Talks to AI like it’s a pet',
  '✓ Can survive on coffee and stack traces',
  '✓ Secret ambition: automate everything, even breakfast',
  'Mission: Make tech useful, secure, and a little weird.',
];

export default function About() {
  const [clicked, setClicked] = useState(false);
  const [displayedLines, setDisplayedLines] = useState([]);

  useEffect(() => {
    if (clicked && displayedLines.length < secretLines.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines(secretLines.slice(0, displayedLines.length + 1));
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [clicked, displayedLines]);

  return (
    <section
      id="about"
      className="py-20 px-6 text-center select-none cursor-pointer"
      onClick={() => {
        setClicked(true);
        setDisplayedLines([]); // reset on re-click
      }}
    >
      <h2 className="text-3xl font-bold mb-4 text-zinc-800 dark:text-white">
        🧠 About Me
      </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
        Curious coder. Terminal enthusiast. AI whisperer. Click here to access the classified version.
      </p>

      {clicked && (
        <div className="bg-black text-green-400 font-mono text-left max-w-2xl mx-auto p-4 rounded-lg shadow-inner">
          {displayedLines.map((line, i) => (
            <p key={i} className="animate-pulse">{line}</p>
          ))}
        </div>
      )}
    </section>
  );
}
