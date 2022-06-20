import React from 'react'
import SearchFecth from '../compoments/searchFecth'
import { useParams } from 'react-router-dom';

const PopularMovies = () => {

  let { search } = useParams();
  // console.log('busqueda popular', search)
  return (
    <section>
      <SearchFecth palabra={search}/>
        
        

    </section>
  )
}

export default PopularMovies