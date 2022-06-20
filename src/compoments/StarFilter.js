import React, {useEffect, useState} from 'react'
import ImageCard from './ImageCard';

const StarFilter = ({rating}) => {
    
    const api_key = process.env.REACT_APP_MOVIEDB_API_KEY;
    const [data, setData] = useState([]);
    const [filtrado, setFiltrado] = useState([]);
    
    useEffect(()=>{
        const descubrirPeliculas = async () => {
            try {
                const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
                const respuesta = await fetch(url)
                const data = await respuesta.json()
                
                setData(data.results)
                    
                            
            } catch (error) {
                console.log('error', error)
            }
    
        }
        descubrirPeliculas();
    },[])

    useEffect(()=>{
        
        const filtrar = data.filter(item => {
            // if(item.vote_average <= (rating*2)){
             if((item.vote_average <= (rating*2)) && (item.vote_average >= (rating*2-2))){
                
                 return item
                
            }
        })

        
        setFiltrado(filtrar)
    },[rating])

    return (
    <div>
        {rating!==0?<p>Valores entre {rating*2-2} y {rating*2}</p>:<p>Filtro off</p>}
        {(rating==0)&&data.map((item,index) => {
               const {id, title, poster_path, vote_average} = item;
               return(
                <ImageCard 
                key={id}
                id={id}
                title={title} 
                poster_path={poster_path} 
                vote_average={vote_average}/>
            
                )})}

           {/* <h1>FILTRADO</h1> */}
           {(rating!=0)&&filtrado.map((item,index) => {
               const {id, title, poster_path, vote_average} = item;
               return(
                <ImageCard 
                key={id}
                id={id}
                title={title} 
                poster_path={poster_path} 
                vote_average={vote_average}/>
            
                )})}     
    </div>
  )
}

export default StarFilter