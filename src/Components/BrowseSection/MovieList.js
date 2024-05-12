import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    // console.log("5 ml", movies);
    return (
        <div>
            <div className='md:p-10 md:px-10 '>
                <h1 className='font-bold text-3xl text-white'>{title}</h1>
                <div className='flex overflow-x-scroll no-scrollbar overflow-y: auto '>
                    <div className='flex'>
                        {
                            movies?.results.map((movies =>
                                <MovieCard key={movies.id} posterPath={movies?.poster_path} />
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MovieList;