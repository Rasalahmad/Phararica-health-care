import { useState, useEffect } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword,  createUserWithEmailAndPassword, updateProfile, GithubAuthProvider , signOut } from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleRegister = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
        // .then(result => {
        //     setUser(result.user)
        //     setError('');
        //     setUserName(name);
        //     console.log(result.user);

        // })
        // .catch(error => setError(error.message))
    }

    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const signInUsingGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = () => {
        signOut(auth)
        .then( () => {
            setUser({});
        })
    }

    const setUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
        .then(result => {})
    }

    // observe wheather user state change or not
    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
            }
        })
    }, []);
    return {
        user,
        error,
        handleRegister,
        handleLogin,
        signInUsingGoogle,
        signInUsingGithub,
        logOut

    }
}
export default useFirebase;