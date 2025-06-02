// React
import { useEffect } from 'react';

// Components
import LinkList from "../../components/LinkList"
import Loading from '../../components/Loading';
import { useFetchLinks } from '../../hooks/useFetchLinks';

export default function Home() {
  const { links, loading, error, fetchLinks } = useFetchLinks()

  useEffect(() => {
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