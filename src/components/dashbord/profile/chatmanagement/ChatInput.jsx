import React, { useState } from "react";
import saveChatMessage from "./saveChatMessage";
import fetchChatMessages from "./fetchChatMessages";

function ChatInput({ onNewMessage }) {
  const [message, setMessage] = useState("");
  const userId = localStorage.getItem("loginid");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        sender: "user",
        message,
        timestamp: new Date().toISOString(),
      };
      await saveChatMessage(userId, newMessage);
      setMessage("");
      const updatedMessages = await fetchChatMessages(userId);
      onNewMessage(updatedMessages);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="chat-input-form">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default ChatInput;
