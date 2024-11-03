import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from "../firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, User, UserCredential } from 'firebase/auth';

interface AuthContextType {
  currentUser: User;
  getUser: () => User | null;
  logIn: (email: string, password: string) => Promise<UserCredential>;
  signOut: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<UserCredential>;
}

const AuthContext = createContext({} as AuthContextType);

//Hook para autenticacion
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children } : { children : any }) {
  const [currentUser, setCurrentUser] = useState({} as User);

  //useEffect con funcion de desmontaje
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user || {} as User)
    })

    return unsubscribe
  }, [])


  function logIn(email : string, password : string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signOut() {
    return auth.signOut();
  }

  function signUp(email : string, password : string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function getUser() {
    return auth.currentUser;
  }

  const value = {
    currentUser,
    getUser,
    logIn,
    signOut,
    signUp
  }

  return (
    <AuthContext.Provider value={value}>
      { children }
    </AuthContext.Provider>
  )

}

export default AuthProvider