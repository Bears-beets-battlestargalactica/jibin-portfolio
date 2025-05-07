import { useState, useEffect, useRef } from "react";

export default function ChatWidget() {
  const [visible, setVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messageEndRef = useRef(null);

  useEffect(() => {
    if (visible && messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, visible]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages([...messages, { user: userMessage, bot: "..." }]);
    setInput("");

    try {
      const res = await fetch("https://ask-jibin-backend.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await res.json();

      setMessages(prev =>
        [...prev.slice(0, -1), { user: userMessage, bot: data.response }]
      );
    } catch {
      setMessages(prev =>
        [...prev.slice(0, -1), { user: userMessage, bot: "⚠️ Failed to fetch response." }]
      );
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={() => setVisible(!visible)}
        className="bg-pink-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-pink-700 transition transform hover:scale-105"
      >
        💬 Ask Jibin
      </button>

      {visible && (
        <div className="mt-3 w-80 h-96 bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-lg shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          <div className="px-4 py-2 border-b dark:border-zinc-600 bg-pink-100 dark:bg-zinc-700 text-sm font-bold">
            🎮 JibinBot (v1.0)
          </div>

          <div className="flex-1 overflow-y-auto p-4 text-sm space-y-3 font-mono bg-zinc-50 dark:bg-zinc-900">
            {messages.map((m, i) => (
              <div key={i}>
                <p className="text-blue-700 dark:text-blue-300 font-semibold">🧍‍♂️ You:</p>
                <p className="mb-1">{m.user}</p>

                <p className="text-green-700 dark:text-green-300 font-semibold">🤖 JibinBot:</p>
                {m.bot === "..." ? (
                  <div className="flex space-x-1 mt-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                ) : (
                  <p>{m.bot}</p>
                )}
              </div>
            ))}
            <div ref={messageEndRef} />
          </div>

          <div className="p-2 border-t dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
              placeholder="Ask me anything..."
              className="flex-1 p-2 rounded border dark:border-zinc-600 bg-white dark:bg-zinc-700 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button
              onClick={sendMessage}
              className="px-3 bg-green-600 hover:bg-green-700 text-white rounded text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
