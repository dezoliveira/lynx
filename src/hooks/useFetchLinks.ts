import { useState } from "react";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { db } from "../lib/firebaseConfig";
import { Link } from "../types/link";

export function useFetchLinks() {
  const [links, setLinks] = useState<Link[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const fetchLinks = async () => {
    setLoading(true)

    try {
      const query = await getDocs(collection(db, "links"))
      const data: Link[] = query.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
    
      setLinks(data)
      setLoading(false)
        
    } catch (error) {
      console.error("Erro ao buscar links", error)
      setError(error as Error)
      setLoading(false)
    }
  }

  return { links, loading, error, fetchLinks }
}