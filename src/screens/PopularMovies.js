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
        <div className="grid-container">
            <div className="img1"> 
            <img src='' alt='...'/>
            </div>
            <div className="img2"> 
            <img src='' alt='...'/>
            </div>
            <div className="img3"> 
            <img src='' alt='...'/>
            </div>
            <div className="img4"> 
            <img src='' alt='...'/>
            </div>
            <div className="img5"> 
            <img src='' alt='...'/>
            </div>
            <div className="img6"> 
            <img src='' alt='...'/>
            </div>
            <div className="img7"> 
            <img src='' alt='...'/>
            </div>
        </div>

    </section>
  )
}

export default PopularMovies