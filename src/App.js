import logo from './logo.svg';
import './App.css';
import SearchFecth from './compoments/searchFecth';
import DiscoverMovie from './compoments/DiscoverMovie';
import Hero from './screens/Hero';
import PopularMovies from './screens/PopularMovies';
import StarRaiting from './compoments/StarRaiting';

function App() {
  return (
    <div className="App">
     <Hero/>
     {/* <DiscoverMovie/>
     <PopularMovies/> */}
     <StarRaiting/>
    </div>
  );
}

export default App;
