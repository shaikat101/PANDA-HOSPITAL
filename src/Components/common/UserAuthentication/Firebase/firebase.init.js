
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
// import firebaseConfig from "firebase.config"
const initialize=()=>{
    initializeApp(firebaseConfig);
}
export default initialize;