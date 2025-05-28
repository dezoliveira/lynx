// React
import { useState, useEffect, Suspense } from 'react';
import { db } from '../../lib/firebaseConfig';
import { collection, getDocs } from "firebase/firestore"

// Components
import Hero from "../../components/Hero"
import LinkList from "../../components/LinkList"
import LinkContainer from '../../components/LinkContainer';

export default function Home() {
  const [ links, setLinks ] = useState([])
  const [ error, setError ] = useState(null)

  useEffect(() => {
    const fetchLinks = async () => {

      try {
        const query = await getDocs(collection(db, "links"))
        const data = query.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
      
        console.log(data)
        setLinks(data)
         
      } catch (error) {
        console.error("Erro ao buscar links", error)
        setError(error)
      }
    }

    fetchLinks()
  }, [])

  function Loading() {
    return <h2>🌀 Loading...</h2>;
  }

  return (
    <LinkContainer>
      <Hero /> 
      <Suspense fallback={<Loading/>}>
        <LinkList data={links}/>
      </Suspense>
    </LinkContainer>
  )
}