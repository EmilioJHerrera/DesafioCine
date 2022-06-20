import React from 'react'
import SearchFecth from '../compoments/searchFecth'
import { useParams } from 'react-router-dom';

const PopularMovies = () => {

  let { search } = useParams();
  console.log('busqueda popular', search)
  return (
    <section>
      <SearchFecth palabra={search}/>
        <h4>Popular Movies</h4>
        

    </section>
  )
}

export default PopularMovies