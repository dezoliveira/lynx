import { signOut } from "firebase/auth"
import { auth } from "../lib/firebaseConfig"

export default function useLogout() {
  const logout = async () => {
    try {
      await signOut(auth)
      return { success: true }

    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  return { logout }
}