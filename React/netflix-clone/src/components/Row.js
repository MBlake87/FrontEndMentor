import React from "react";
import { useState, useEffect } from "react";
import axios from "../axios";
import "./row.css"
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([])
    const [trailer, setTrailer] = useState("")

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl]);




    return (
        <div className="row" >
            <h2>{title}</h2>
            <div className="row_images">
                {movies.map(movie => (
                    <img className={`row_poster ${isLargeRow && "row_posterLarge"}`} key={movie.id} src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>

        </div >
    )
}

export default Row;