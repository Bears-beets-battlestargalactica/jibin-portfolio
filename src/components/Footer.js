import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="text-center text-sm opacity-70 mt-10 pb-10">
      <div className="mb-2">© 2025 Jibin Yesudas Varghese</div>
      <div className="flex justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/jibin-varghese-a48b402a6/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Bears-beets-battlestargalactica"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 transition"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}
