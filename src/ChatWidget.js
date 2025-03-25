import React, { useState } from "react";

export default function ChatWidget() {
  const [visible, setVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const res = await fetch("https://ask-jibin-backend.onrender.com/chat", { // 👈 Replace with real backend URL
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setMessages([...messages, { user: input, bot: data.response }]);
    setInput("");
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 9999 }}>
      <button
        onClick={() => setVisible(!visible)}
        style={{
          padding: "10px 15px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        💬 Ask Jibin
      </button>

      {visible && (
        <div
          style={{
            marginTop: "10px",
            width: "300px",
            height: "400px",
            backgroundColor: "#f9f9f9",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "10px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ flexGrow: 1, overflowY: "auto", marginBottom: "10px" }}>
            {messages.map((m, i) => (
              <div key={i} style={{ marginBottom: "10px" }}>
                <b>You:</b> {m.user}<br />
                <b>JibinBot:</b> {m.bot}
              </div>
            ))}
          </div>
          <input
            style={{ padding: "5px", borderRadius: "5px", border: "1px solid #ccc", marginBottom: "5px" }}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            style={{
              padding: "5px 10px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
}
