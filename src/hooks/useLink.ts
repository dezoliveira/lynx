// React
import { useState } from 'react'

// Firebase
import { doc, getDoc } from "firebase/firestore"
import { db } from "../lib/firebaseConfig"

import { Link } from '../types/link'

export function useLink(id: string) {
  const [title, setTitle] = useState("")
  const [url, setUrl] = useState("")
  const [icon, setIcon] = useState("")
  const [color, setColor] = useState("#f0000")
  const [loading, setLoading] = useState(true)

  const fetchLink = async () => {
    const ref = doc(db, "links", id)
    const docSnap = await getDoc(ref)

    if (docSnap.exists()) {
      const data = docSnap.data() as Omit<Link, "id">
      setTitle(data.title || '')
      setUrl(data.url || '')
      setColor(data.color || "#00000")
      setIcon(data.icon || '')
    }

    setLoading(false)
  }

  return { 
    title,
    setTitle,
    url,
    setUrl,
    icon,
    setIcon,
    color,
    setColor,
    loading,
    fetchLink
  }
}