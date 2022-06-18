import React, {useEffect, useState} from 'react'
import '../App.css'
const DiscoverMovie = () => {

    const [data, setData] = useState([]);
    const [data7, setData7] = useState([]); 

    const api_key = '8832264ce5ed4ff5ee2710651fa5f704'
    // https://image.tmdb.org/t/p/w500/

useEffect(()=>{
    const descubrirPeliculas = async () => {
        try {
            const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
            const respuesta = await fetch(url)
            const data = await respuesta.json()
            console.log('descubrir:',data)
            setData(data.results)
            //crear un array con las primeras 7 peliculas para mostrar en el front.
            setData7(data.results.slice(0,7))

                        
        } catch (error) {
            console.log('error', error)
        }

    }
    descubrirPeliculas();
},[])

  return (
    <div><h2>DiscoverMovie</h2>      
    
    <div className="grid-container">
           {data7.map((item,index) => {
               
               return(
               <div>
                   <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} 
                   alt='...'
                   className={`img${index+1}`}
                   />
                </div>
                )})}
    </div>
    
    
    </div>
  )
}

export default DiscoverMovie