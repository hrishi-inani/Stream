import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB49aYM9tlonKOk-Tl4wezksg_tfbM10d8",
  authDomain: "netflix-42e08.firebaseapp.com",
  projectId: "netflix-42e08",
  storageBucket: "netflix-42e08.appspot.com",
  messagingSenderId: "31227172984",
  appId: "1:31227172984:web:32c3baefef59b20ba8758d",
  measurementId: "G-01HKSHC1RK",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
