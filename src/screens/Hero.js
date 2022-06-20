import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate()

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/popularMovies/${search}`);
  
  }

  return (
    <section className='hero'>
      <div className='hero_text'>
        
        <h1>Tus películas favoritas. Búscalas aquí.</h1>
        <h3>Encuentra información y descubre nuevas películas</h3>
        </div>
        <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Search for a movie"
            value={search}
            onChange={(e)=> handleChange(e)}/>
            
            <input type="submit" hidden/>
            
        </form>
        </div>
    </section>
  )
}

export default Hero