import React, {useEffect, useState} from 'react';
import Layout from "../components/layout";
import {useParams} from "react-router-dom";
import axios from "axios";

const MoviePages = () => {
    const [movie, setMovie] = useState([]);
    const [videoMovie, setVideoMovie] = useState({});
    let id = useParams()
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjBhZTkzZmRhNWJlMWQwNDlkODZmYmE3MzIzZTIyNCIsInN1YiI6IjY0ZTZlZjVmZTg5NGE2MDBlNGU1OTk4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eThVDIYIb3Rxt4EFmv0CHbSk3DU0bTd0x1wkcEhcmtk'
        }
    };


    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id.id}?language=ru-RUS`, options)
            .then(({data}) => setMovie(data))
    },[])


    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id.id}/videos?language=ru-RUS`, options)
            .then(({data}) => setVideoMovie(data.results))
    },[movie.id])

    console.log(videoMovie)

    return (
        <Layout>
            <div className="container">
                {/*<iframe src={`https://www.youtube.com/embed/${viedoMovie.key}`} width={1000} height={500} frameborder="2"></iframe>*/}
            </div>
        </Layout>
    );
};

export default MoviePages;