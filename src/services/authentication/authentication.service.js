import { signInWithEmailAndPassword,getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth"

export const loginrequest=(email,password)=> signInWithEmailAndPassword(getAuth(),email,password);

export const registerrequest=(email,password) =>createUserWithEmailAndPassword(getAuth(),email,password);

export const logout=()=> signOut(getAuth());