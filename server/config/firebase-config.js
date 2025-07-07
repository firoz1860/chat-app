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

// Safely read the JSON key
const serviceAccountKey = JSON.parse(
  fs.readFileSync(new URL("./serviceAccountKey.json", import.meta.url))
);

// Initialize Firebase Admin
const app = initializeApp({
  credential: cert(serviceAccountKey),
});

const auth = getAuth(app);
export default auth;


