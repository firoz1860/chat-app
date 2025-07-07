import axios from "axios";
import auth from "../config/firebase";
import { io } from "socket.io-client";

const baseURL = "http://localhost:3001/api";
// const baseURL = process.env.VITE_API_URL;

const getUserToken = async () => {
  const user = auth.currentUser;
  // console.log("Fetching current user from Firebase:", user);
  const token = user && (await user.getIdToken());
  console.log("User token:", token);
  return token;
};

export const initiateSocketConnection = async () => {
  const token = await getUserToken();
  // console.log("Initiating socket connection with token:", token);

  const socket = io("http://localhost:3001", {
    auth: { token },
  });

  socket.on("connect_error", (err) => {
    // console.error("Socket connection error:", err.message);
  });

  return socket;
};

const createHeader = async () => {
  const token = await getUserToken();
  const payloadHeader = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  // console.log("Generated headers:", payloadHeader);
  return payloadHeader;
};

export const getAllUsers = async () => {
  const header = await createHeader();
  console.log("Fetching all users");

  try {
    const res = await axios.get(`${baseURL}/user`, header);
    // console.log("Users fetched:", res.data);
    return res.data;
  } catch (e) {
    console.error("Error fetching all users:", e);
  }
};

export const getUser = async (userId) => {
  const header = await createHeader();
  // console.log(`Fetching user with ID: ${userId}`);

  try {
    const res = await axios.get(`${baseURL}/user/${userId}`, header);
    // console.log("User data:", res.data);
    return res.data;
  } catch (e) {
    console.error("Error fetching user:", e);
  }
};

export const getUsers = async (users) => {
  const header = await createHeader();
  console.log("Fetching users list:", users);

  try {
    const res = await axios.get(`${baseURL}/user/users`, users, header);
    // console.log("Fetched users:", res.data);
    return res.data;
  } catch (e) {
    console.error("Error fetching users list:", e);
  }
};

export const getChatRooms = async (userId) => {
  const header = await createHeader();
  // console.log(`Fetching chat rooms for user ID: ${userId}`);

  try {
    const res = await axios.get(`${baseURL}/room/${userId}`, header);
    // console.log("Chat rooms:", res.data);
    return res.data;
  } catch (e) {
    console.error("Error fetching chat rooms:", e);
  }
};

export const getChatRoomOfUsers = async (firstUserId, secondUserId) => {
  const header = await createHeader();
  // console.log(`Fetching chat room between ${firstUserId} and ${secondUserId}`);

  try {
    const res = await axios.get(
      `${baseURL}/room/${firstUserId}/${secondUserId}`,
      header
    );
    // console.log("Chat room of users:", res.data);
    return res.data;
  } catch (e) {
    console.error("Error fetching chat room of users:", e);
  }
};

export const createChatRoom = async (members) => {
  const header = await createHeader();
  // console.log("Creating chat room with members:", members);

  try {
    const res = await axios.post(`${baseURL}/room`, members, header);
    // console.log("Chat room created:", res.data);
    return res.data;
  } catch (e) {
    console.error("Error creating chat room:", e);
  }
};

export const getMessagesOfChatRoom = async (chatRoomId) => {
  const header = await createHeader();
  // console.log(`Fetching messages for chat room ID: ${chatRoomId}`);

  try {
    const res = await axios.get(`${baseURL}/message/${chatRoomId}`, header);
    // console.log("Messages fetched:", res.data);
    return res.data;
  } catch (e) {
    console.error("Error fetching messages:", e);
  }
};

export const sendMessage = async (messageBody) => {
  const header = await createHeader();
  // console.log("Sending message:", messageBody);

  try {
    const res = await axios.post(`${baseURL}/message`, messageBody, header);
    // console.log("Message sent successfully:", res.data);
    return res.data;
  } catch (e) {
    console.error("Error sending message:", e);
  }
};
