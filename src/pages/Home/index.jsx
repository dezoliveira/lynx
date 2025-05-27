// React
import { useState, useEffect, Suspense } from 'react';
import { db } from '../../lib/firebaseConfig';
import { collection, getDocs } from "firebase/firestore"

// Components
import Hero from "../../components/Hero"
import LinkList from "../../components/LinkList"

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
    <div className="relative h-[80vh] sm:w-[80vh] w-[40vh] bg-amber-400 flex flex-col items-center justify-center rounded-2xl shadow-xl border-slate-950">
      <div className='h-[25%] bg-neutral-950 w-full absolute top-0 rounded-t-lg'>
      </div>
      <Hero /> 
        <Suspense fallback={<Loading/>}>
          <LinkList data={links}/>
        </Suspense>
    </div>
  )
}