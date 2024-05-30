import axios from "axios";

const fetchChatMessages = async (userId) => {
  try {
    const response = await axios.get(`https://66566a099f970b3b36c54ff7.mockapi.io/chat?userid=${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching chat messages:", error);
    return [];
  }
};

export default fetchChatMessages;
