import React, {useEffect, useState} from 'react'
import ImageCard from './ImageCard';
import Spinner from './Spinner';


const SearchFecth = ({palabra}) => {

const [respuesta, setRespuesta] = useState([]);
const [loading, setLoading] = useState(true);

 let busqueda= palabra;


const api_key = process.env.REACT_APP_MOVIEDB_API_KEY;


useEffect(()=>{
    const conssultarApi = async () => {
        console.log('aqui')
        try {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${busqueda}`
            const respuesta = await fetch(url)
            const data = await respuesta.json()
            
            setRespuesta(data.results)
            setLoading(false)
            
        } catch (error) {
            console.log('error', error)
        }

    }
    conssultarApi();
    
},[])



  return (
    <>
    {loading ? <Spinner/> :
    <div>
      <p className='info'>Aquí los resultados de tu búsqueda</p>
 {respuesta.map(movie => {
   const {id, title, poster_path, vote_average} = movie
   return(
      <ImageCard 
      key={id} 
      id={id} 
      title={title} 
      poster_path={poster_path} 
      vote_average={vote_average}/>
      
   )
 }
  )}

    </div>}
    {respuesta.length===0 && <p>No se encontraron resultados, vuelve atrás e intenta otra búsqueda</p>}
    </>
  )
}

export default SearchFecth