import React, {useEffect, useState} from 'react'

const StarFilter = ({rating}) => {
    
    const api_key = '8832264ce5ed4ff5ee2710651fa5f704'
    const [data, setData] = useState([]);
    const [filtrado, setFiltrado] = useState([]);
    
    useEffect(()=>{
        const descubrirPeliculas = async () => {
            try {
                const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
                const respuesta = await fetch(url)
                const data = await respuesta.json()
                console.log('descubrir:',data)
                setData(data.results)
                    
                            
            } catch (error) {
                console.log('error', error)
            }
    
        }
        descubrirPeliculas();
    },[])

    useEffect(()=>{
        
        const filtrar = data.filter(item => {
            if(item.vote_average >= (rating*2)){
                console.log('item',item.vote_average)
                 return item
                
            }
        })

        console.log('filtrar',filtrar)
        setFiltrado(filtrar)
    },[rating])

    return (
    <div>
        
        {(rating==0)&&data.map((item,index) => {
               
               return(
               <div>
                   <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} 
                   alt='...'
                   style={ {width: '10%', height:'10%', } }
                   />
                   <p>{item.vote_average}</p>
                </div>
                )})}

           {/* <h1>FILTRADO</h1> */}
           {(rating!=0)&&filtrado.map((item,index) => {
               
               return(
               <div>
                   <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} 
                   alt='...'
                   style={ {width: '10%', height:'10%', } }
                   />
                    <p>{item.vote_average}</p>
                </div>
                )})}     
    </div>
  )
}

export default StarFilter