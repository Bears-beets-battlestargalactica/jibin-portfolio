import { useState } from "react";
import { motion } from "framer-motion";

// Inline Button component
const Button = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
  >
    {children}
  </button>
);

// Inline Card + CardContent components
const Card = ({ children }) => (
  <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
    {children}
  </div>
);
const CardContent = ({ children }) => <div className="p-6">{children}</div>;

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "dark bg-zinc-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      <div className="max-w-4xl mx-auto py-10 px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">
            <motion.span initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
              Jibin Yesudas Varghese
            </motion.span>
          </h1>
          <Button onClick={toggleTheme}>{darkMode ? "Light" : "Dark"} Mode</Button>
        </div>

        {/* About */}
        <p className="text-lg mb-8 transition-opacity duration-500">
          I'm a graduate student at Oregon State University specializing in Machine Learning, Cybersecurity, and NLP.
        </p>

        {/* Projects */}
        <motion.h2
          className="text-2xl font-semibold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Automatic Pith Detection",
              desc: "YOLOv9, Swin Transformer & U-Net models for forestry image analysis and segmentation accuracy.",
            },
            {
              title: "Membership Inference Attacks",
              desc: "Scalability analysis of MemGuard defense, exposing vulnerabilities in ML privacy.",
            },
            {
              title: "Dynamic Social Media Web App",
              desc: "Full MERN stack Twitter-like clone with auth, timeline, likes, and media sharing.",
            },
            {
              title: "Depression Detection via Tweets",
              desc: "ML models that analyze behavioral patterns using NLP and contextual embeddings.",
            },
          ].map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Card>
                <CardContent>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-80 leading-relaxed">{project.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-10 text-center text-sm opacity-60">
          © 2025 Jibin Yesudas Varghese
        </footer>
      </div>
    </div>
  );
}
