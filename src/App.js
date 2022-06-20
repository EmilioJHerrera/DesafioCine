
import './App.css';


import {  BrowserRouter as Router,
} from "react-router-dom";
import { RouterDom } from './compoments/RouterDom';
import MyNavBar from './screens/myNavBar';


function App() {
  return (
    <Router>
    <div className="App">
    
     <MyNavBar/>
     
     <RouterDom/>
     
    </div>

    


    </Router>
  );
}

export default App;
