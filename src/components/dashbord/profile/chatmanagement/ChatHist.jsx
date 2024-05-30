import React, { useEffect, useState } from "react";
import fetchChatMessages from "./fetchChatMessages";

function ChatHistory() {
  const [messagesdata, setMessages] = useState([]);
  const userId = localStorage.getItem("loginid");

  useEffect(() => {
    const getMessages = async () => {
      const chatMessages = await fetchChatMessages(userId);
      setMessages(chatMessages);
    };

    getMessages();

    // Update messages every 5 seconds
    const interval = setInterval(() => {
      getMessages();
    }, 1000);

    return () => clearInterval(interval);
  }, [userId]);

  const getSortedMessages = () => {
    let allMessages = [];
    messagesdata.forEach(chat => {
      allMessages = [...allMessages, ...chat.messages];
    });

    return allMessages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
  };

  // Adding detailed logging to verify timestamps
  useEffect(() => {
    getSortedMessages()
    // .forEach((message, idx) => {
    //   console.log(`${idx + 1}: ${message.timestamp} - ${new Date(message.timestamp).toLocaleString()}`);
    // });
  }, [messagesdata]);

  return (
    <div className="bg-dark p-4">
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
            className={`${pos} p-2 mt-5 newchat`}
            style={{
              minWidth:"200px",
              maxWidth:"500px",
              backgroundColor: "white",
              display: "flex",
            }}
          >
            <div
              className={`p-2 mt-auto mb-auto ${dis}`}
              style={{ backgroundColor: "blue" }}
            >
              <i>{icn}</i>
            </div>
            <div className="" style={{ minWidth: "200px" ,maxWidth:"500px", width:"100%"}}>
              <p className="px-2">{i.message}</p>
              <div className="text-end">
                <sup className="text-dark">{x}</sup>
              </div>
            </div>
            <div
              className={`p-2 mt-auto mb-auto ${dis2}`}
              style={{ backgroundColor: "blue" }}
            >
              <i>{icn}</i>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ChatHistory;
