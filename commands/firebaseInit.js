module.exports = (firebase) => {
  const firebaseInfo = {
    apiKey: process.env.APP_FIREBASE_API_KEY,
    authDomain: process.env.APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.APP_FIREBASE_APP_ID,
    measurementId: process.env.APP_FIREBASE_MEASUREMENT_ID,
  };

  firebase.initializeApp(firebaseInfo);
};
