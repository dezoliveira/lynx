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
      setLoading(false)
      setError(error.message)
      return { success: false, error}      
    }
  }

  return { login, error, loading }
}