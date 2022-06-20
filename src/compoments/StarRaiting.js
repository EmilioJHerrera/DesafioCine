import React, {useState} from 'react'
import '../App.css'
import StarFilter from './StarFilter';

const StarRaiting = () => {

    const [rating, setRating] = useState(0);
    
    const handleClick = (index) => {
        if(rating === index){
            setRating(0);
            }
        else{
            setRating(index);
        }
    }


  return (
    <section>
        <h4>Star Raiting</h4>
        <p>Utiliza el indicador de estrellas para filtrar por Raiting</p>
        {[...Array(5)].map((star,index) => {
            index+=1;        
        return ( 
            <button
            type="button"
            key={index}
            className={index <= rating ? "on" : "off"}
            onClick={() => handleClick(index)}
            >

           <span className="star">&#9733;</span>        
            </button>        
        );
      })}
      <StarFilter rating={rating}/>
    </section>
  )
}

export default StarRaiting