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
    <form  onSubmit={handleSubmit} className="bg-dark text-center chat-input-form" style={{width:"100%"}}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        style={{width:"80%"}}
        className="p-1 text-center "
      />
      <button type="submit" className="p-1 "><i class="fa-regular fa-paper-plane"></i></button>
    </form>
  );
}

export default ChatInput;
