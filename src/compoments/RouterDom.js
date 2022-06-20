import React from 'react';


import Landing from '../screens/Landing';
import RaitingSearch from '../screens/RaitingSearch';
import PopularMovies from '../screens/PopularMovies';
import SeeMore from '../screens/SeeMore';
import MoviesDetail from './MoviesDetail';

import {
    Routes,
    Route
  } from "react-router-dom";
import Error404 from '../screens/Error404';

export const RouterDom = () => {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Landing/>}></Route>
      <Route path="/seachByRaiting" element={<RaitingSearch/>}></Route>
      <Route path="/popularMovies/:search" element={<PopularMovies/>}></Route>
      <Route path="/seeMore" element={<SeeMore data={true}/>}></Route>
      <Route path="/movieDetails/:id" element={<MoviesDetail/>}></Route>
      <Route path="*" element={<Error404/>}></Route>
    </Routes>
    </>
  )
}
