import React, { Component } from "react";
import Pelicula from "./Pelicula";

class movies extends Component {
    movieName = React.createRef();
    state = {
        movies: [],
        loading: false
    };

    clearForm = (e) => {
        this.movieName.current.value = '';
        this.setState({ movies: [] });
    }

    searchMovies = async (e) => {
        // const peliculaPorBuscar = e.target.elements.peliculaPorBuscar.value;
        e.preventDefault();
        this.setState({ loading: true });
        const api_fetch = await fetch(
            `https://itunes.apple.com/lookup?amgArtistId=468749,5723&entity=song&limit=5&sort=recent`
        );
        const movies = await api_fetch.json();
        console.log("movies: ", movies);
        this.setState({ movies: movies.results, loading: false });
    };

    render() {
        return (
            <React.Fragment>
                <div className="container mx-auto px-4">
                    <div className="flex flex-col">
                        <div className="flex-1">
                            <h3 className="text-lg font-medium leading-6 text-gray-900 my-4">
                                Movies
                            </h3>
                            <form
                                onSubmit={this.searchMovies}
                                className="max-w-screen-sm m-auto my-4"
                            >
                                <div className="relative text-gray-600">
                                    <input
                                        type="search"
                                        name="serch"
                                        ref={this.movieName}
                                        placeholder="Movie name..."
                                        className="bg-white h-10 px-5 pr-10 rounded-full text-sm border focus:outline-none w-full"
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-0 top-0 mt-3 mr-4"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            />
                                        </svg>
                                    </button>
                                    {this.state.movies.length > 0 && (
                                        <button
                                            type="reset"
                                            className="absolute -right-10 top-0 mt-3 mr-4"
                                            onClick={this.clearForm}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-wrap space-x-6">
                                <Pelicula
                                    loading={this.state.loading}
                                    movies={this.state.movies}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default movies;
