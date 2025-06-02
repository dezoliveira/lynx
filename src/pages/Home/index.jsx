// React
import { useState, useEffect, Suspense } from 'react';

// Firebase
import { db } from '../../lib/firebaseConfig';
import { collection, getDocs } from "firebase/firestore"

// Components
import Hero from "../../components/Hero"
import LinkList from "../../components/LinkList"
import LinkContainer from '../../components/LinkContainer';
import Loading from '../../components/Loading';

export default function Home() {
  const [ links, setLinks ] = useState([])
  const [ error, setError ] = useState(null)
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
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

    fetchLinks()
  }, [])

  return (
    <>
      {!loading ? (
        <LinkList data={links}/>
      ) : 
        <Loading />
      }
    </>
  )
}