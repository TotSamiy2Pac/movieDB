import React, {useEffect, useState} from 'react';
import Header from "./components/header/Header";
import axios from "axios";
import SwiperComponents from "./components/swiper/SwiperComponents";
import Genres from "./components/sections genres/Genres";
import {Route, Routes} from "react-router-dom";
import HomePages from "./pages/HomePages";
import GenresPages from "./pages/GenresPages";
import MoviePages from "./pages/MoviePages";

// import React from 'react';


const App = () => {
    const [movies, setMovies] = useState([])

    // useEffect(() => {
    //     axios(``)
    // })

    return (
        <Routes>
            <Route path={'/'} element={<HomePages/>}></Route>
            <Route path={'/genres'} element={<GenresPages/>}></Route>
            <Route path={'/movie/:id'} element={<MoviePages/>}></Route>
        </Routes>
    );
};

export default App;