import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const MoviesDetail = () => {

    let { id } = useParams();
    console.log(id);
    const api_key = '8832264ce5ed4ff5ee2710651fa5f704'
    const [respuestaID, setRespuestaID] = useState([]);
    useEffect(()=>{
        const consultarById = async () => {
            
            try {
                // const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${busqueda}`
                const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
                
                const respuesta = await fetch(url)
                const data = await respuesta.json()
                console.log('data',data)
                setRespuestaID(data)
                console.log('respuestaID',respuestaID)
                
            } catch (error) {
                console.log('error', error)
            }
    
            
        }
        consultarById();
        
    },[])

  return (
    
    <div style={{ padding:'1rem 0', display:'flex',}}>

        <div>
         <img src={`https://image.tmdb.org/t/p/w500/${respuestaID.poster_path}`} 
          alt={respuestaID.title}
          style={ {width: '100%',} }
           />

        </div>

         <div>   
         <p style={{fontWeight:'bold', marginBottom:'1rem'}}>{respuestaID.title}</p>
          <p style={{ marginTop:'.5rem'}}>Raiting: {respuestaID.vote_average}</p>
          {/* <p>{release_date}</p> */}
          <p>{respuestaID.id}</p>
          <p>{respuestaID.homepage}</p>
          <p>{respuestaID.overview}</p>
          </div>
    </div>
  )
}

export default MoviesDetail