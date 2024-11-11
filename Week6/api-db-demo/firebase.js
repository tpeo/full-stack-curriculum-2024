var admin = require("firebase-admin");

var serviceAccount = require("./cred.json");

// Parsing the FIREBASE_CREDENTIALS environment variable from a string into a JavaScript object
// Ensure you have set up FIREBASE_CREDENTIALS in your .env file.
// For reference, it should look something like this:
// FIREBASE_CREDENTIALS='{
//   "type": "service_account",
//   "project_id": "tpeo-todo-fc3e3",
//   ...
// }'
// Your .env file should be added to your .gitignore to keep sensitive data secure.
//  -> This is already done for you. But double check! You really don't want your credentials pushed to the web.

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db