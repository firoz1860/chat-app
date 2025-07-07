import ChatRoom from "../models/ChatRoom.js";

export const createChatRoom = async (req, res) => {
  console.log("Creating chat room with:", req.body);

  const newChatRoom = new ChatRoom({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    await newChatRoom.save();
    console.log("Chat room created:", newChatRoom);
    res.status(201).json(newChatRoom);
  } catch (error) {
    console.error("Error creating chat room:", error.message);
    res.status(409).json({
      message: error.message,
    });
  }
};

export const getChatRoomOfUser = async (req, res) => {
  console.log("Fetching chat rooms for user:", req.params.userId);

  try {
    const chatRoom = await ChatRoom.find({
      members: { $in: [req.params.userId] },
    });
    console.log("Chat rooms found:", chatRoom);
    res.status(200).json(chatRoom);
  } catch (error) {
    console.error("Error fetching chat rooms:", error.message);
    res.status(404).json({
      message: error.message,
    });
  }
};

export const getChatRoomOfUsers = async (req, res) => {
  console.log("Fetching chat room between users:", req.params);

  try {
    const chatRoom = await ChatRoom.find({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });
    console.log("Chat room found:", chatRoom);
    res.status(200).json(chatRoom);
  } catch (error) {
    console.error("Error fetching chat room of users:", error.message);
    res.status(404).json({
      message: error.message,
    });
  }
};
