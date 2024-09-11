import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../components/fairbase/fairbase.config';


export const AuthContext= createContext(null);

const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {
       // const authInfo={name: "bismillahi rohmanir rahim"}
       const [user,setUser]=useState(null);
       const [loading,setLoading]=useState(true);

       const createUser= (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
       }

       const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
       }
       
       const signInWithGoogle = ()=>{
            setLoading(true);
           return signInWithPopup(auth,googleProvider);
       }

       const logOut = ()=>{
        setLoading(true);
        return signOut(auth)
       }

       
        useEffect(()=>{
            const unSubscribe= onAuthStateChanged(auth,currentUser =>{
                setUser(currentUser);
                setLoading(false);
                console.log('observerd current user inside useEffect of AuthProvide ',currentUser)
            });

            return  ()=>{
                unSubscribe();
            }
        },[])


       const authInfo= {
        user,
        createUser,
        signInUser,
        logOut,
        loading,
        signInWithGoogle
    };

    return (
         <AuthContext.Provider value={authInfo}>
               {children}
         </AuthContext.Provider >
    );
};

export default AuthProvider;


AuthProvider.propTypes =  {
    children : PropTypes.node
}