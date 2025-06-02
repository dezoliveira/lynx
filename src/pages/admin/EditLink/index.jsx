// React
import { useEffect } from "react";
import LinkList from "../../../components/LinkList";
import Loading from "../../../components/Loading";
import NavigateButton from "../../../components/NavigateButton";
import { useFetchLinks } from "../../../hooks/useFetchLinks";

export default function EditLink() {  
  const {links, loading, error, fetchLinks} = useFetchLinks()

  useEffect(() => {
    fetchLinks()
  }, [])

  return (
    <>
      <NavigateButton link="/admin" text="Voltar"/>
      {!loading ? (
        <LinkList data={links} editable={true}/>
      ) : 
        <Loading />
      }
    </>
  )
}