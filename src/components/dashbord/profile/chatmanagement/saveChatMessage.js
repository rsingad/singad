import axios from "axios";

const saveChatMessage = async (userId, message) => {
  try {
    const response = await axios.post(`https://66566a099f970b3b36c54ff7.mockapi.io/chat`, {
      userid: userId,
      messages: [message],
    });
    return response.data;
  } catch (error) {
    console.error("Error saving chat message:", error);
  }
};

export default saveChatMessage;
