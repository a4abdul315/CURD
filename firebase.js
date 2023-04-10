// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJd7osaIYfQVu0ODPzkH_0gcDBnbddx6Y",
  authDomain: "crud-59716.firebaseapp.com",
  projectId: "crud-59716",
  storageBucket: "crud-59716.appspot.com",
  messagingSenderId: "656205906691",
  appId: "1:656205906691:web:d58d0d2d07af9b11851f36",
  measurementId: "G-HQSTK9S0B8",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
