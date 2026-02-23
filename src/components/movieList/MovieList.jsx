import React, { useEffect, useState } from "react"
import "./MovieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/Card"

const MovieList = () => {

    const [movieList, setMovieList] = useState([])
    const { type } = useParams()

    useEffect(() => {
        const getData = () => {
            fetch(`/api/movie/${type ? type : "popular"}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
                .then(res => {
                    if (!res.ok) throw new Error("API Proxy Error: " + res.status);
                    return res.json();
                })
                .then(data => setMovieList(data.results))
                .catch(err => console.error("Failed to fetch movie list:", err))
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