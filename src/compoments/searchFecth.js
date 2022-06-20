import React, {useEffect, useState} from 'react'
import ImageCard from './ImageCard';


const SearchFecth = ({palabra}) => {

const [respuesta, setRespuesta] = useState([]);

 let busqueda= palabra;
 console.log('busqueda en SF', busqueda)
// let busqueda= 'duro de matar';
const api_key = '8832264ce5ed4ff5ee2710651fa5f704'


useEffect(()=>{
    const conssultarApi = async () => {
        console.log('aqui')
        try {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${busqueda}`
            const respuesta = await fetch(url)
            const data = await respuesta.json()
            console.log('data',data)
            setRespuesta(data.results)
            
            
        } catch (error) {
            console.log('error', error)
        }

        
    }
    conssultarApi();
    
},[])



  return (
    <div>
      <p>searchFecth</p>
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

    </div>
  )
}

export default SearchFecth