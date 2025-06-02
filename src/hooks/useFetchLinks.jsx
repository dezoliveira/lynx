import { useState } from "react";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { db } from "../lib/firebaseConfig";

export function useFetchLinks() {
  const [links, setLinks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchLinks = async () => {
    setLoading(true)

    try {
      const query = await getDocs(collection(db, "links"))
      const data = query.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
    
      setLinks(data)
      setLoading(false)
        
    } catch (error) {
      console.error("Erro ao buscar links", error)
      setError(error)
      setLoading(false)
    }
  }

  return { links, loading, error, fetchLinks }
}