// React
import { useState } from "react"

// Firebase
import { db } from "../lib/firebaseConfig"
import { updateDoc, doc } from "firebase/firestore"

export function useUpdateLink(id) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState(null)

  const updateLink = async(data) => {
    setLoading(true)
    setSuccess("")
    setError(null)
    
    const ref = doc(db, "links", id)

    try {
      await updateDoc(ref, data)

      setSuccess("Link editado com sucesso!")
      setLoading(false)
    }

    catch (error) {
      setError("Erro ao editar link" + error.message)
      setLoading(false)
    }
  }

  return { loading, success, error, updateLink }
}