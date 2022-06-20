import React from 'react'
import ImageCard from '../compoments/ImageCard';

import { useLocation } from 'react-router-dom';

const SeeMore = () => {
    const location = useLocation();
    // console.log(location);
    const data= location.state.data;
    

  return (
    <div>
        {data.map(movie => {
        const {id, title, poster_path, vote_average} = movie
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

export default SeeMore