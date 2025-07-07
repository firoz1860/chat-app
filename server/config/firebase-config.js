// import { initializeApp, cert } from "firebase-admin/app";
// import { getAuth } from "firebase-admin/auth";

// import serviceAccountKey from "./serviceAccountKey.json" assert { type: "json" };
// // import serviceAccountKey from "./serviceAccountKey.json";


// const app = initializeApp({
//   credential: cert(serviceAccountKey),
// });

// const auth = getAuth(app);
// export default auth;



import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import fs from "fs";

// 🔹 Detect whether we're using a JSON string or file path
let serviceAccountKey;

try {
  if (process.env.FIREBASE_CREDENTIALS?.startsWith("{")) {
    // 🔹 Case: JSON string from env (e.g. on Render)
    serviceAccountKey = JSON.parse(process.env.FIREBASE_CREDENTIALS);
  } else {
    // 🔹 Case: Local file path (e.g. ./serviceAccountKey.json during dev)
    const keyPath = new URL(process.env.FIREBASE_CREDENTIALS, import.meta.url);
    serviceAccountKey = JSON.parse(fs.readFileSync(keyPath));
  }
} catch (err) {
  console.error("❌ Firebase credentials not loaded properly:", err.message);
  process.exit(1); // Stop app if credentials are invalid
}

// 🔹 Initialize Firebase Admin
const app = initializeApp({
  credential: cert(serviceAccountKey),
});

const auth = getAuth(app);
export default auth;



// import { initializeApp, cert } from "firebase-admin/app";
// import { getAuth } from "firebase-admin/auth";
// import fs from "fs";

// // Safely read the JSON key
// const serviceAccountKey = JSON.parse(
//   fs.readFileSync(new URL(process.env.FIREBASE_CREDENTIALS, import.meta.url))
// );

// // Initialize Firebase Admin
// const app = initializeApp({
//   credential: cert(serviceAccountKey),
// });

// const auth = getAuth(app);
// export default auth;


