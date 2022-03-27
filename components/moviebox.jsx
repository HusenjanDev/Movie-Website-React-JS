import React from 'react';

/* MovieBox displays the picture, title and the release date of the movie. */
function MovieBox({ movie })
{
    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-2 m-lg-3 mb-4">
            <div className="card m-3 p-0 movie-card-bg m-sm-auto m-auto" style={{width: '13rem' }}>
                <img className="card-img-top" src={ movie.Poster } alt="Card image cap"/>
                <div className="card-body">
                    <p className="card-text text-white custom-font-size">{ movie.Year }</p>
                    <p className="card-text text-white">{ movie.Title }</p>
                </div>
            </div>
        </div>
    )
}

export default MovieBox;