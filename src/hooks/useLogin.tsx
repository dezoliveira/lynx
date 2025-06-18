import { useState } from "react";
import { auth } from "../lib/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

interface Login {
  email: string
  password: string
}

export default function useLogin() {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const login = async ({ email, password }: Login) => {
    setError("")
    setLoading(true)

    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password)
      const token = await userCredentials.user.getIdToken()
      setLoading(false)

      return { success: true }
      
    } catch (error: unknown) {
      setLoading(false)

      if (error instanceof Error) {
        setError(error.message)
        
      } else {
        setError(String(error))
      }

      return { success: false, error}      
    }
  }

  return { login, error, loading }
}