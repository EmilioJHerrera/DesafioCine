import React, {useEffect, useState} from 'react'
import ImageCard from './ImageCard';
import Spinner from './Spinner';


const SearchFecth = ({palabra}) => {

const [respuesta, setRespuesta] = useState([]);
const [loading, setLoading] = useState(true);

 let busqueda= palabra;


const api_key = '8832264ce5ed4ff5ee2710651fa5f704'


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
      <p>Aquí los resultados de tu búsqueda</p>
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
    </>
  )
}

export default SearchFecth