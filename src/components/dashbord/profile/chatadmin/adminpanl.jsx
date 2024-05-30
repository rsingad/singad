import React, { useEffect, useState } from "react";
import axios from "axios";

import fetchChatMessages from "./fetchmassage";
import saveChatMessage from "./savemassage";

function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://65a0ef06600f49256fb08ab2.mockapi.io/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const getMessages = async () => {
      if (selectedUser) {
        const chatMessages = await fetchChatMessages(selectedUser.id);
        setMessages(chatMessages);
      }
    };

    getMessages();

    const interval = setInterval(() => {
      getMessages();
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedUser]);

  const handleSendMessage = async () => {
    if (newMessage.trim() && selectedUser) {
      const message = {
        sender: "admin",
        message: newMessage,
        timestamp: new Date().toISOString(),
      };
      await saveChatMessage(selectedUser.id, message);
      setNewMessage("");
      const updatedMessages = await fetchChatMessages(selectedUser.id);
      setMessages(updatedMessages);
    }
  };

  const getSortedMessages = () => {
    let allMessages = [];
    messages.forEach(chat => {
      allMessages = [...allMessages, ...chat.messages];
    });

    return allMessages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
  };

  return (
    <div className="admin-panel">
      <div className="user-list">
        <h2>Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id} onClick={() => setSelectedUser(user)}>
              {user.firstName} {user.lastName}
            </li>
          ))}
        </ul>
      </div>
      <div className="chat-section">
        <h2>Chat with {selectedUser ? `${selectedUser.firstName} ${selectedUser.lastName}` : "..."}</h2>
        <div className="chat-history">
          {getSortedMessages().map((i, idx) => {
            let x = new Date(i.timestamp).toLocaleString();
            let pos = i.sender === "user" ? "me-auto" : "ms-auto";
            let dis = i.sender === "user" ? "d-block" : "d-none";
            let dis2 = i.sender === "user" ? "d-none" : "d-block";

            let icn =
              i.sender === "user" ? (
                <i className="fa-regular fa-user"></i>
              ) : (
                <i className="fa-solid fa-user-tie"></i>
              );
            return (
              <div
                key={idx}
                className={`${pos} p-2`}
                style={{
                  width: "min-content",
                  backgroundColor: "white",
                  display: "flex",
                }}
              >
                <div className={`p-2 mt-auto mb-auto ${dis}`} style={{ backgroundColor: "blue" }}>
                  <i>{icn}</i>
                </div>
                <div className="" style={{ minWidth: "300px" }}>
                  <p className="px-2">{i.message}</p>
                  <div className="text-end">
                    <sup className="text-dark">{x}</sup>
                  </div>
                </div>
                <div className={`p-2 mt-auto mb-auto ${dis2}`} style={{ backgroundColor: "blue" }}>
                  <i>{icn}</i>
                </div>
              </div>
            );
          })}
        </div>
        {selectedUser && (
          <div className="chat-input">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message"
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPanel;
