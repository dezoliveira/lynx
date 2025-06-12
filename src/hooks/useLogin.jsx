import { useState } from "react";
import { auth } from "../lib/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function useLogin() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const login = async (email, password) => {
    setError("")
    setLoading(true)

    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password)
      const token = await userCredentials.user.getIdToken()
      setLoading(false)

      return { success: true }
      
    } catch (error) {
      console.error("Erro de login Firebase:", error); // <== isso aqui
      setLoading(false)
      setError(error.code || error.message)
      return { success: false, error: error.code || error.message }      
    }
  }

  return { login, error, loading }
}