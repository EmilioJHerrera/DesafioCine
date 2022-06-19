import React, {useEffect, useState} from 'react'


const SearchFecth = ({palabra}) => {

// const [busqueda, setBusqueda] = useState('hard to die')

 let busqueda= palabra;
 console.log('busqueda en SF', busqueda)
// let busqueda= 'duro de matar';
const api_key = '8832264ce5ed4ff5ee2710651fa5f704'


useEffect(()=>{
    const conssultarApi = async () => {
        console.log('aqui')
        try {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${busqueda}`
            const respuesta = await fetch(url)
            const data = await respuesta.json()
            console.log('data',data)
            
            
        } catch (error) {
            console.log('error', error)
        }

        
    }
    conssultarApi();
    
},[])



  return (
    <div>searchFecth
 {/* renderizar las imagenes aqui */}

    </div>
  )
}

export default SearchFecth