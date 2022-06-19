import React from 'react';


import Landing from '../screens/Landing';
import RaitingSearch from '../screens/RaitingSearch';
import PopularMovies from '../screens/PopularMovies';

import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route
  } from "react-router-dom";

export const RouterDom = () => {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Landing/>}></Route>
      <Route path="/seachByRaiting" element={<RaitingSearch/>}></Route>
      <Route path="/popularMovies/:search" element={<PopularMovies/>}></Route>
    </Routes>



    </>
  )
}
