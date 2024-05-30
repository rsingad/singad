import axios from "axios";

const saveChatMessage = async (userId, message) => {
  try {
    // पहले से मौजूद मैसेजेस को लाएं
    const existingMessagesResponse = await axios.get(`https://66566a099f970b3b36c54ff7.mockapi.io/chat?userid=${userId}`);
    const existingMessages = existingMessagesResponse.data[0] || { messages: [] };

    // नए मैसेज को जोड़ें
    existingMessages.messages.push(message);

    // अपडेट या सेव करें
    if (existingMessages.id) {
      await axios.put(`https://66566a099f970b3b36c54ff7.mockapi.io/chat/${existingMessages.id}`, existingMessages);
    } else {
      await axios.post(`https://66566a099f970b3b36c54ff7.mockapi.io/chat`, {
        userid: userId,
        messages: [message],
      });
    }
  } catch (error) {
    console.error("Error saving chat message:", error);
  }
};

export default saveChatMessage;
