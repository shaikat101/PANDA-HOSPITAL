import initialize from '../Components/common/UserAuthentication/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "firebase/auth";
import { useState } from 'react';


initialize();
const auth = getAuth();

const useFirebase=()=>{
    const [user,setUser] = useState({});
    const registerWithEmailAndPassword =(email,password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        
          const user = userCredential.user;
          console.log(user);
          setUser(user);
          

        
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          
        });
    }

    const loginWithEmailAndPassword=(email,password) =>{
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    setUser(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
  
    }

    const logout=()=>{
        signOut(auth).then(() => {
            console.log(user);
    setUser({});
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            console.log(error);
          });
    }
    return {user,registerWithEmailAndPassword,loginWithEmailAndPassword,logout};
 }
 export default useFirebase;