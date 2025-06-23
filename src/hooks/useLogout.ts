import { signOut } from "firebase/auth"
import { auth } from '../lib/firebaseConfig'
 
export default function useLogout() {
  const logout = async () => {
    try {
      await signOut(auth)
      return { success: true }

    } catch (error: unknown) {
      let message = 'Erro ao sair'

      if (error instanceof Error) {
        message = error.message
      }

      return { success: false, error: message }
    }
  }

  return { logout }
}