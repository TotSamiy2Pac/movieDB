import React, {useEffect, useState} from 'react';
import axios from "axios";
import './style.css'
import {Link} from "react-router-dom";

const RatedMovies = () => {
    const [rateds, setRateds] = useState([])
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjBhZTkzZmRhNWJlMWQwNDlkODZmYmE3MzIzZTIyNCIsInN1YiI6IjY0ZTZlZjVmZTg5NGE2MDBlNGU1OTk4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eThVDIYIb3Rxt4EFmv0CHbSk3DU0bTd0x1wkcEhcmtk'
        }
    };
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/top_rated?language=ru-RUS&page=1`, options)
            .then(({data}) => setRateds(data.results))
    },[])
    // console.log(rateds)

    return (
        <>
            <h2>Самые популярные фильмы</h2>
            <div className="row">
                {
                    rateds.map(movie => {
                        return (
                            <div key={movie.id} className={'col-3'}>
                                <Link to={`/movie/${movie.id}`}>
                                    <div className="box">
                                        <img className={'img_cards'} src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt=""/>
                                        <div className={'d-flex justify-content-between'}>
                                            <h4>{movie.title}</h4>
                                            <p>{movie.vote_average}  ☆</p>
                                        </div>
                                        <p>{movie.release_date}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default RatedMovies;