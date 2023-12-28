"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <main>
      <ul>
        {messages.map((m, index) => (
          <li key={index}>
            {m.role === "user" ? "User: " : "AI: "}
            {m.content}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <label>
          Say something...
          <input className="border-cyan-600" value={input} onChange={handleInputChange} />
        </label>
        <button type="submit">Send</button>
      </form>
    </main>
  );
}
