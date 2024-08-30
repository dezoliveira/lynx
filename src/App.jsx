// App.css
import './App.css';

// React
import { useState, useEffect, Suspense } from 'react';

// Supabase
import supabase from './supabaseClient';

// Components
import Hero from './components/Hero';
import LinkList from './components/LinkList';

function App() {
  const [ links, setLinks ] = useState()
  const [ error, setError ] = useState()

  useEffect(() => {
    getLinks()
    // playIcons()
  }, []);

  const getLinks = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    const { data, error } = await supabase.from("links").select()
    setLinks(data)
    setError(error)
  }

  function Loading() {
    return <h2>🌀 Loading...</h2>;
  }

  return (
    <div className="App">
      <div className="relative h-[80vh] sm:w-[80vh] w-[40vh] bg-amber-400 flex flex-col items-center justify-center rounded-2xl shadow-xl border-slate-950">
        <div className='h-[25%] bg-neutral-950 w-full absolute top-0 rounded-t-lg'>
        </div>
        <Hero /> 
          <Suspense fallback={<Loading/>}>
            <LinkList data={links}/>
          </Suspense>
      </div>
    </div>
  );
}

export default App;
