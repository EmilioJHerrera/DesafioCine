import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';


const MoviesDetail = () => {

    let { id } = useParams();
    const api_key = '8832264ce5ed4ff5ee2710651fa5f704'
    const [respuestaID, setRespuestaID] = useState([]);
    const [loading, setLoading] = useState(true);
   
    useEffect(()=>{
        const consultarById = async () => {
            
            try {
                
                const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
                
                const respuesta = await fetch(url)
                const data = await respuesta.json()
                setRespuestaID(data)
                setLoading(false)
                
                
            } catch (error) {
                console.log('error', error)
            }
    
            
        }
        consultarById();
        
    },[])

  return (
    <>
    {loading ? <Spinner/>:
    <div 
    style={{ padding:'1rem 3rem', display:'flex',}}>

        <div>
         <img src={`https://image.tmdb.org/t/p/w500/${respuestaID.poster_path}`} 
          alt={respuestaID.title}
          style={ {width: '100%',} }
           />

        </div>

         <div>   
            <h3 style={{fontWeight:'bold', marginBottom:'1rem'}}>{respuestaID.title}</h3>
            <p 
            className='label'
            style={{ marginTop:'.5rem'}}>Raiting: {respuestaID.vote_average}</p>
            
            <p className='label'>ID:{respuestaID.id}</p>
            <p className='label'>Sinopsis: {respuestaID.overview}</p>
            <p className='label'>{respuestaID.homepage}</p>
          </div>
    </div>}
    </>
  )
}

export default MoviesDetail