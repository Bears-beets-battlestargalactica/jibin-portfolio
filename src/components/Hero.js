// src/components/Hero.js
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import profilePic from '../assets/career_fair_25-120.jpg';
import whoPic from '../assets/who.jpg';
import confetti from 'canvas-confetti';
import waitMusic from '../assets/waitmusic.mp3';
import winMusic from '../assets/win_music.mp3';
import lossMusic from '../assets/exactloss.mp3';
import finalWinMusic from '../assets/finalwin.mp3';

export default function Hero({ toggleTheme , isDark  }) {
  const [currentQn, setCurrentQn] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState('');
  const [showRestart, setShowRestart] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [fiftyUsed, setFiftyUsed] = useState(false);
  const [hintUsed, setHintUsed] = useState(false);
  const [hint, setHint] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [imageSrc, setImageSrc] = useState(profilePic);

  const waitRef = useRef(null);
  const winRef = useRef(null);
  const lossRef = useRef(null);
  const finalWinRef = useRef(null);

  useEffect(() => {
    waitRef.current = new Audio(waitMusic);
    winRef.current = new Audio(winMusic);
    lossRef.current = new Audio(lossMusic);
    finalWinRef.current = new Audio(finalWinMusic);
  }, []);

  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  const fullQuestionSet = [
    { question: 'Which port is used by HTTPS?', options: ['443', '80', '22', '21'], correct: '443', hint: 'It’s a secure version of port 80.' },
    { question: 'What has keys but can’t open locks?', options: ['Piano', 'Keyboard', 'Keychain', 'Treasure Chest'], correct: 'Piano', hint: 'It makes music.' },
    { question: 'What is 0100 in decimal?', options: ['4', '6', '5', '3'], correct: '4', hint: 'It’s a single digit.' },
    { question: 'What comes once in a minute, twice in a moment, never in a thousand years?', options: ['Letter M', 'The moon', 'Sunrise', 'Echo'], correct: 'Letter M', hint: 'It’s a letter.' },
    { question: 'Which command shows current directory?', options: ['pwd', 'cd', 'ls', 'dir'], correct: 'pwd', hint: 'It stands for “print working directory”.' },
    { question: 'Which is not an AI model?', options: ['JPEG', 'GPT', 'BERT', 'T5'], correct: 'JPEG', hint: 'It’s a file format.' },
    { question: 'I speak without a mouth and hear without ears. What am I?', options: ['Echo', 'Wind', 'Shadow', 'Silence'], correct: 'Echo', hint: 'You often shout into a canyon for it.' },
    { question: 'Which protocol secures web communication?', options: ['HTTPS', 'FTP', 'TCP', 'SSH'], correct: 'HTTPS', hint: 'It’s what your browser wants.' },
    { question: 'A firewall protects against...', options: ['Unauthorized access', 'Overheating', 'Data backup', 'Latency'], correct: 'Unauthorized access', hint: 'Think security, not speed.' },
    { question: 'Which layer is HTTP in the OSI model?', options: ['Application', 'Transport', 'Session', 'Data Link'], correct: 'Application', hint: 'It’s the top-most layer.' },
  ];

  const handleStart = () => {
    const shuffledQuestions = shuffleArray(fullQuestionSet.map(q => ({
      ...q,
      options: shuffleArray([...q.options])
    })));
    setQuestions(shuffledQuestions);
    setShowQuestion(true);
    setCurrentQn(0);
    setShowBanner(true);
    setFiftyUsed(false);
    setHintUsed(false);
    setHint('');
    setFilteredOptions([]);
    setGameStarted(true);
    setImageSrc(whoPic);
    stopAllMusic();
    waitRef.current.play();
  };

  const stopAllMusic = () => {
    [waitRef, winRef, lossRef, finalWinRef].forEach(ref => {
      if (ref.current) {
        ref.current.pause();
        ref.current.currentTime = 0;
      }
    });
  };

  const handleOptionClick = (opt) => {
    if (!questions.length || selectedOption) return;
    stopAllMusic();
    setSelectedOption(opt);

    if (opt === questions[currentQn].correct) {
      setScore(prev => prev + 1);
      setStatus('correct');
      if (currentQn === questions.length - 1) {
        finalWinRef.current.play();
        confetti();
      } else {
        winRef.current.play();
      }
      setShowNextButton(true);
    } else {
      setStatus('wrong');
      lossRef.current.play();
    }
  };

  const handleNext = () => {
    stopAllMusic();
    setStatus('');
    setSelectedOption(null);
    setShowNextButton(false);
    setFilteredOptions([]);
    setHint('');
    setCurrentQn(prev => prev + 1);
    waitRef.current.play();
  };

  const handleRestart = () => {
    stopAllMusic();
    setCurrentQn(0);
    setShowQuestion(false);
    setSelectedOption(null);
    setScore(0);
    setStatus('');
    setShowRestart(false);
    setShowNextButton(false);
    setShowBanner(false);
    setFilteredOptions([]);
    setFiftyUsed(false);
    setHintUsed(false);
    setHint('');
    setGameStarted(false);
    setImageSrc(profilePic);
  };

  const useFiftyFifty = () => {
    if (fiftyUsed || selectedOption) return;
    const current = questions[currentQn];
    const incorrectOptions = shuffleArray(current.options.filter(opt => opt !== current.correct));
    const removed = incorrectOptions.slice(0, 2);
    const remaining = current.options.filter(opt => !removed.includes(opt));
    setFilteredOptions(shuffleArray(remaining));
    setFiftyUsed(true);
  };

  const useHint = () => {
    if (hintUsed || selectedOption) return;
    setHint(questions[currentQn].hint || 'No hint available for this question.');
    setHintUsed(true);
  };
  const sectionStyle = isDark
  ? 'bg-black text-pink-400'
  : 'bg-white text-black';


  return (
    <section className={`min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden ${sectionStyle}`}>
      <img
        src={imageSrc}
        alt="Jibin profile"
        className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg mb-4 cursor-pointer"
        onClick={handleStart}
      />

      {showBanner && (
        <div className="text-yellow-300 font-bold text-lg mb-4 bg-blue-900 px-4 py-2 rounded-full">
          💰 Who Wants to Be a Code-aire?
        </div>
      )}

      {showQuestion && questions.length && currentQn < questions.length && status !== 'wrong' && (
        <>
          <div className="bg-blue-900 text-white font-semibold text-lg mb-4 px-6 py-4 rounded-lg border-2 border-yellow-400 shadow-md">
            {questions[currentQn].question}
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            {(filteredOptions.length > 0 ? filteredOptions : questions[currentQn].options).map((opt, idx) => {
              let bgColor = 'bg-blue-900';
              let glow = '';
              if (selectedOption) {
                if (opt === questions[currentQn].correct) {
                  bgColor = 'bg-green-500';
                  glow = 'shadow-lg shadow-green-300';
                } else if (opt === selectedOption) {
                  bgColor = 'bg-red-500';
                  glow = 'shadow-lg shadow-red-300';
                }
              }
              return (
                <button
                  key={idx}
                  className={`${bgColor} ${glow} text-white border border-yellow-500 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition`}
                  onClick={() => handleOptionClick(opt)}
                  disabled={!!selectedOption}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          <div className="flex gap-4 mb-4">
            {!fiftyUsed && !selectedOption && (
              <button className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-400" onClick={useFiftyFifty}>🧠 50:50</button>
            )}
            {!hintUsed && !selectedOption && (
              <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-400" onClick={useHint}>📞 Phone a Friend</button>
            )}
          </div>

          {hint && (
            <p className="text-yellow-300 italic mt-2">Hint: {hint}</p>
          )}
        </>
      )}

      {status === 'correct' && showNextButton && (
        <>
          <p className="text-green-300 font-bold mb-2">🎉 Correct Answer!</p>
          <button className="px-6 py-2 bg-green-500 text-black rounded hover:bg-green-400" onClick={handleNext}>➡️ Next Question</button>
        </>
      )}

      {status === 'wrong' && (
        <div className="text-red-500 bg-black p-4 rounded mt-2">
          <p>💥 Wrong Answer!</p>
          <p className="text-sm text-white mt-2">Your score: {score}/10</p>
          <button className="mt-4 px-6 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-400" onClick={handleRestart}>🔄 Restart Game</button>
        </div>
      )}

      {gameStarted && currentQn >= questions.length && (
        <div className="text-white text-lg mt-4 font-bold">🏆 Congratulations! You answered all questions correctly! Final score: {score}/10</div>
      )}

      {showQuestion && (
        <button className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500" onClick={handleRestart}>❌ Exit Game</button>
      )}

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className={`text-5xl md:text-6xl font-bold mb-4 ${isDark ? 'text-pink-400' : 'text-black'}`}
      >
        Hi, I'm Jibin
      </motion.h1>

      <p className={`text-lg max-w-2xl mb-6 ${isDark ? 'text-pink-200' : 'text-gray-800'}`}>
        Full-Stack Developer & Security Enthusiast who blends creativity and technology.
      </p>

      {!showQuestion && (
        <div className="flex gap-4">
          <a
            href="https://drive.google.com/file/d/1HJSQtgQ6NStcNn9VaIoFWi-m_2ZPPf1h/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-2 rounded transition ${isDark ? 'bg-pink-600 text-black hover:bg-pink-500' : 'bg-black text-white hover:bg-gray-800'}`}
          >
            📄 Resume
          </a>
          <button
            onClick={toggleTheme}
            className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-full shadow-md transition border ${isDark ? 'bg-black text-pink-400 border-pink-400 hover:bg-pink-800' : 'bg-white text-black border-black hover:bg-gray-100'}`}
          >
            🌑 Toggle Theme
          </button>
        </div>
      )}
    </section>
  );
}
