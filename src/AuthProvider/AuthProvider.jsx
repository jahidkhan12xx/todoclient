import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import auth from "../firebase/config";

export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [user,setUser] = useState();
    const [iseLoading,setIsLoading] = useState(true);


    const register = (email,pass)=>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth,email,pass)
    }
    const updateUser = (name,photo) =>{
        setIsLoading(true)
        return updateProfile(auth.currentUser,{
            displayName : name,
            photoURL : photo,
        })
    }

    const login = (email,pass) =>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth,email,pass)
    }

    const logOut = () =>{
        setIsLoading(true)
        return signOut(auth);
    } 

    const provider= new GoogleAuthProvider();

    const googleLogin = () =>{
        setIsLoading(true)
        return signInWithPopup(auth,provider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            console.log(currentUser);

        })
        return()=>{
            return unSubscribe();
        }
    },[])

    const data = {
        user,
        iseLoading,
        register,
        login,
        googleLogin,
        updateUser,
        logOut
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;