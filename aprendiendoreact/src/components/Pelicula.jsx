import React, { Component } from "react";

class Pelicula extends Component {
    render() {
        if (this.props.loading) {
            return (
                <React.Fragment>
                    <div className="flex items-center justify-center w-full h-full">
                        <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
                            <svg
                                fill="none"
                                className="w-6 h-6 animate-spin"
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    clipRule="evenodd"
                                    d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                />
                            </svg>

                            <div>Loading ...</div>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
        if (this.props.movies.length === 0) {
            return (
                <React.Fragment>
                    <div className="flex items-center justify-center w-full h-full">
                        <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
                            <div>No movies to display...</div>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
        return (
            <React.Fragment>
                {this.props.movies.map((movie) => (
                    <div
                        key={movie.trackId}
                        className="flex-1 mb-10 shadow-lg border-gray-800 bg-gray-100 relative max-w-xs"
                    >
                        <img
                            className="w-full"
                            src={movie.artworkUrl100}
                            alt=""
                        />
                        <div className="badge absolute top-0 right-0 bg-yellow-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                            {movie.primaryGenreName}
                        </div>
                        <div className="badge absolute top-8 right-0 bg-purple-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                            {movie.contentAdvisoryRating}
                        </div>
                        <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
                            <span className="mr-1 p-1 px-2 font-bold">
                                ${movie.trackHdPrice} Buy
                            </span>
                            <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                                ${movie.trackRentalPrice} Rent
                            </span>
                            <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                                105 Dislikes
                            </span>
                        </div>
                        <div className="desc p-4 text-gray-800">
                            <a
                                href="https://www.youtube.com/watch?v=dvqT-E74Qlo"
                                target="_new"
                                className="title font-bold block cursor-pointer hover:underline"
                            >
                                {movie.trackName}
                            </a>
                            <a
                                href={movie.trackViewUrl}
                                target="_new"
                                className="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer"
                            >
                                {movie.artistName}
                            </a>
                            {/* <span className="description text-sm block py-2 border-gray-400 mb-2">
                                {movie.shortDescription &&
                                    movie.shortDescription}
                                {!movie.shortDescription &&
                                    movie.longDescription}
                            </span> */}
                        </div>
                    </div>
                ))}
            </React.Fragment>
        );
    }
}

export default Pelicula;
