// import auth from "../config/firebase-config.js";

// export const VerifyToken = async (req, res, next) => {
//   const token = req.headers.authorization.split(" ")[1];

//   try {
//     const decodeValue = await auth.verifyIdToken(token);
//     if (decodeValue) {
//       req.user = decodeValue;
//       return next();
//     }
//   } catch (e) {
//     return res.json({ message: "Internal Error" });
//   }
// };

export const VerifySocketToken = async (socket, next) => {
  const token = socket.handshake.auth.token;

  try {
    const decodeValue = await auth.verifyIdToken(token);

    if (decodeValue) {
      socket.user = decodeValue;

      return next();
    }
  } catch (e) {
    return next(new Error("Internal Error"));
  }
};

import auth from "../config/firebase-config.js";

export const VerifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Authorization token missing or invalid" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodeValue = await auth.verifyIdToken(token);
    if (decodeValue) {
      req.user = decodeValue;
      return next();
    }
    return res.status(401).json({ message: "Token verification failed" });
  } catch (e) {
    return res
      .status(500)
      .json({ message: "Internal Error during token verification" });
  }
};
