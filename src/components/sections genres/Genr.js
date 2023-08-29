import React, {useEffect, useState} from 'react';
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './syle.css';

// import required modules
import {Navigation, Pagination} from 'swiper/modules';
import {Link} from "react-router-dom";
const Genr = ({title, idGenre}) => {
    const [genrMovie, setGenrMovie] = useState([])

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/discover/movie?with_genres=${idGenre}&page=1&api_key=8f0ae93fda5be1d049d86fba7323e224`)
            .then(({data}) => setGenrMovie(data.results))
    },[])

    // console.log(title)
    return (
        <div className={'genr'}>
            <h2>{title}</h2>
            <Swiper
                slidesPerView={7}
                spaceBetween={30}
                // pagination={{
                //     clickable: true,
                // }}
                navigation={true}
                modules={[Pagination,Navigation]}
                className="mySwiper"
            >
                {
                    genrMovie.map(movie => {
                        return (
                            <SwiperSlide key={movie.id}>
                                <Link to={`/movie/${movie.id}`}>
                                    <div key={movie.id} className="box-genre">
                                        <img src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} alt=""/>
                                        <div className={'title-genre'}>
                                            <p>{movie.title}</p>
                                            <p>{movie.release_date}</p>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
};

export default Genr;