import React, {useEffect, useState} from 'react';
import { useNavigate, Link } from "react-router-dom";
import '../App.css'
const DiscoverMovie = () => {

    const [data, setData] = useState([]);
    const [data7, setData7] = useState([]); 

    const navigate = useNavigate()

    const api_key = process.env.REACT_APP_MOVIEDB_API_KEY;


    const handleCLick = (id) =>{
        navigate(`/movieDetails/${id}`)
    }

useEffect(()=>{
    const descubrirPeliculas = async () => {
        try {
            const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
            const respuesta = await fetch(url)
            const data = await respuesta.json()
            console.log('descubrir:',data)
            setData(data.results)
            //crear un array con las primeras 9 peliculas para mostrar en el front.
            setData7(data.results.slice(0,9))

        } catch (error) {
            console.log('error', error)
        }
    }
    descubrirPeliculas();
},[])

  return (
    <section className='container'>
        <div className='subheading_flex'>
            <h2>Películas populares</h2> 
            <Link to={"/seeMore"} 
            state = {{data: data}}
            style={{textDecoration:'none', color:'#8d8d8d'}}>
            Ver todas</Link>
        </div>
        <div className="grid-container">
            {data7.map((item,index) => {
                const {id, title, poster_path,} = item;
                return(
                        <div className={`img${index+1}`}
                            key={id}>
                            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} 
                            alt={title}
                            style={ {width: '100%', height:'100%', } }
                            onClick={()=>handleCLick(id)}           
                            />
                        </div>
                    )})}
            </div>
    </section>
  )
}

export default DiscoverMovie