import express from "express";

import {
  createChatRoom,
  getChatRoomOfUser,
  getChatRoomOfUsers,
} from "../controllers/chatRoom.js";

const router = express.Router();

router.post("/", (req, res, next) => {
  // console.log("POST /api/room - createChatRoom");
  next();
}, createChatRoom);

router.get("/:userId", (req, res, next) => {
  // console.log(`GET /api/room/${req.params.userId} - getChatRoomOfUser`);
  next();
}, getChatRoomOfUser);

router.get("/:firstUserId/:secondUserId", (req, res, next) => {
  // console.log(`GET /api/room/${req.params.firstUserId}/${req.params.secondUserId} - getChatRoomOfUsers`);
  next();
}, getChatRoomOfUsers);

export default router;
