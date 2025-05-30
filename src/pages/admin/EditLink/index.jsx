// React
import { useEffect, useState } from "react";

// Firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../lib/firebaseConfig";

// Components
import Hero from "../../../components/Hero";
import LinkContainer from "../../../components/LinkContainer";
import LinkList from "../../../components/LinkList";
import Loading from "../../../components/Loading";
import { useNavigate } from "react-router-dom";
import NavigateButton from "../../../components/NavigateButton";

export default function EditLink() {
  const navigate = useNavigate()
  const [links, setLinks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

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
      <NavigateButton link="/" text="Voltar"/>
      <LinkContainer>
        <Hero />
        {!loading ? (
          <LinkList data={links} editable={true}/>
        ) : 
          <Loading />
        }
      </LinkContainer>
    </>
  )
}