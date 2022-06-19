import logo from './logo.svg';
import './App.css';
import SearchFecth from './compoments/searchFecth';
import DiscoverMovie from './compoments/DiscoverMovie';
import Hero from './screens/Hero';
import PopularMovies from './screens/PopularMovies';
import StarRaiting from './compoments/StarRaiting';

import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from "react-router-dom";
import RaitingSearch from './screens/RaitingSearch';
import { RouterDom } from './compoments/RouterDom';

function App() {
  return (
    <Router>
    <div className="App">
    <Link to="/seachByRaiting">Busqueda por estrellas</Link>
    <Link to="/popularMovies">más peliculas</Link>
    <Link to="/">home</Link>
     
     <RouterDom/>
     
    </div>

    


    </Router>
  );
}

export default App;
