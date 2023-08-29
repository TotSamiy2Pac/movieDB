import React, {useEffect} from 'react';
import { useRef, useState } from 'react';
import {Link} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import axios from "axios";
import './style.css'

const SwiperComponents = () => {
    const [popularMovies, setPopularMovies] = useState([])
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjBhZTkzZmRhNWJlMWQwNDlkODZmYmE3MzIzZTIyNCIsInN1YiI6IjY0ZTZlZjVmZTg5NGE2MDBlNGU1OTk4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eThVDIYIb3Rxt4EFmv0CHbSk3DU0bTd0x1wkcEhcmtk'
        }
    };

    useEffect(() => {
        axios('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=8f0ae93fda5be1d049d86fba7323e224')
            .then(({data}) => setPopularMovies(data.results))
            .catch(err => console.error(err));
    },[])

    return (
        <>
            <div className="container">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 422500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        popularMovies.map(movie => {
                            return (
                                <SwiperSlide key={movie.id} className={''}>
                                    <Link key={movie.id} to={`/movie/${movie.id}`}>
                                        <div className="box-slide">
                                            <div className={'title-slide d-flex flex-column align-items-start justify-content-center'}>
                                                <div className={'d-flex gap-5'}>
                                                    <p>{movie.title}</p>
                                                    <p>{movie.vote_average} ☆</p>
                                                </div>
                                                <p className={'fs-5'}>{movie.release_date}</p>
                                            </div>
                                            <img className={'img-slide'} src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} alt=""/>
                                            <div className={'description-slide'}>
                                                <p>{movie.overview}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>

        </>
    );
};

export default SwiperComponents;