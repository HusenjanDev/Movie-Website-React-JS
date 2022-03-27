import React, { useEffect, useState } from 'react';
import MovieBox from './moviebox';

function Movies()
{
    /* movies will be used to store the movies from function searchMovies */
    const [movies, setMovies] = useState([]);

    /* search will contain the data we search for */
    const [search, setSearch] = useState();

    /* searchMovie function gets us the movies through omdbapi. 
     * The api key has been removed because this project will be published to GitHub. 
     */
    async function searchMovies(title)
    {
        const response = await fetch(`${'http://www.omdbapi.com/?apikey=XXXXX'}&s=${title}`);
        const data = await response.json();
        
        /* Assigning movies our data */
        setMovies(data.Search);
    }

    return (
    <div className="bg-dark mb-5">
        <div className="container">
            <div className="row">
                <div className="col-12 mt-5">
                    <h1 className="text-center text-white">Movies</h1>
                </div>
                <div className="col-8 col-lg-4 col-md-6 col-sm-8 m-auto mb-3 mt-2">
                    <div class="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search for a movie" value={search} onChange={ (e) => setSearch(e.target.value) }  />
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="button" onClick={ () => searchMovies(search) }>Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                { movies?.length > 0 && movies.map( (movie) => (
                    <MovieBox movie={ movie }/>
                ))}
            </div>
        </div>
    </div>
    );
}

export default Movies;