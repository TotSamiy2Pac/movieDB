import React, {useEffect, useState} from 'react';
import axios from "axios";
import Genr from "./Genr";

const Genres = () => {
    const [genres, setGenres] = useState([])
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/genre/movie/list?page=1&api_key=8f0ae93fda5be1d049d86fba7323e224`)
            .then(({data}) => setGenres(data.genres))
    },[])

    // console.log(genres)
    return (
        genres.map(genr => {
            return (
                <div className={'container'}>
                    <Genr title={genr.name} idGenre={genr.id}/>
                </div>
            )
        })

    );
};

export default Genres;