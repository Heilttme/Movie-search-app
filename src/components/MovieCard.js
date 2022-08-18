import React from "react"


export default function MovieCard(props) {
    const {title, release_date, poster_path, overview} = props.movie

    return (
        <div className="card">
            <strong>{title}</strong> 
            <span>{release_date}</span>
            <div className="content">
                <div className="image-container">
                    <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`}/>
                </div>
                <p>{overview}</p>
            </div>
        </div>
    )
}