// React
import { useState } from 'react'

// Firebase
import { doc, getDoc } from "firebase/firestore"
import { db } from "../lib/firebaseConfig"

export function useLink(id) {
  const [title, setTitle] = useState("")
  const [url, setUrl] = useState("")
  const [icon, setIcon] = useState("")
  const [color, setColor] = useState("#f0000")
  const [loading, setLoading] = useState(true)

  const fetchLink = async () => {
    const ref = doc(db, "links", id)
    const docSnap = await getDoc(ref)

    if (docSnap.exists()) {
      const data = docSnap.data()
      setTitle(data.title || '')
      setUrl(data.url || '')
      setColor(data.color || "#00000")
      setIcon(data.icon || '')
    }

    setLoading(false)
  }

  return { title, url, icon, color, loading, fetchLink }
}