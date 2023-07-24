import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBCYZvX-kf5-Aw2r2Q24ydAaKgn-WqhRYs",
  authDomain: "grupuri-boboci.firebaseapp.com",
  projectId: "grupuri-boboci",
  storageBucket: "grupuri-boboci.appspot.com",
  messagingSenderId: "208242330854",
  appId: "1:208242330854:web:807dd1a64ebf809fa1ff27",
  measurementId: "G-LM8VV3BQXM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
