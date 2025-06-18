// React
import { useState } from "react"

// Firebase
import { db } from "../lib/firebaseConfig"
import { updateDoc, doc } from "firebase/firestore"

import { Link } from "../types/link"

export function useUpdateLink(id: string) {
  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<string>("")
  const [error, setError] = useState<string | null>(null)

  const updateLink = async(data: Omit<Link, "id">): Promise<boolean> => {
    setLoading(true)
    setSuccess("")
    setError(null)
    
    const ref = doc(db, "links", id)

    try {
      await updateDoc(ref, data)
      setSuccess("Link editado com sucesso!")
      setLoading(false)
      return true
    }

    catch (error: unknown) {
      let errorMessage = "Erro ao editar Link"

      if (error instanceof Error) {
        errorMessage += `: ${error.message}`
      }
      setError(errorMessage)
      setLoading(false)
      return false
    }
  }

  return { loading, success, error, updateLink }
}