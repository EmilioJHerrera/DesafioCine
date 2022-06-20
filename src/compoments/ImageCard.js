import React from 'react'
import { useNavigate } from "react-router-dom";

const ImageCard = ({id, title, poster_path, vote_average}) => {

  const navigate = useNavigate()

  const handleCLick = (id) =>{
    navigate(`/movieDetails/${id}`)
}

  return (
    <div style={{display:'inline-block', padding:'1rem 0'}}>
         <p style={{fontWeight:'bold', marginBottom:'1rem'}}>{title}</p>
         
         <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} 
          alt={title}
          className='card_image'
          
          onClick={()=>handleCLick(id)}
           />
          <p style={{ marginTop:'.5rem'}}>Raiting: {vote_average}</p>
    </div>
  )
}

export default ImageCard