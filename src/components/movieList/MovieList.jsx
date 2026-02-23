import React, { useEffect, useState } from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/Card"

const MovieList = () => {

    const [movieList, setMovieList] = useState([])
    const { type } = useParams()

    useEffect(() => {
        const getData = () => {
            fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
                .then(res => res.json())
                .then(data => setMovieList(data.results))
        }
        getData()
    }, [type])

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    (movieList || []).map(movie => (
                        <Cards key={movie.id} movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList;