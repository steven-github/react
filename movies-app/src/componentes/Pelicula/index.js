import React, { Component } from "react";
import { Grid, Row, PageHeader } from "react-bootstrap";
import BuscarPelicula from "./BuscarPelicula";
import PeliculasEncontradas from "./PeliculasEncontradas";

export class Pelicula extends Component {
  state = {
    peliculas: [],
    loading: false
  };

  peliculaPorBuscar = async e => {
    const peliculaPorBuscar = e.target.elements.peliculaPorBuscar.value;
    e.preventDefault();
    //const api_fetch = await fetch("https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=king+kong&media=movie&country=US");
    //const api_fetch = await fetch("https://itunes.apple.com/search?term=king+kong&media=movie&country=US");
    const api_fetch = await fetch(
      `https://itunes.apple.com/search?term=${peliculaPorBuscar}&media=movie&country=US`
    );
    this.setState({ loading: true });
    const peliculas = await api_fetch.json();
    this.setState({ peliculas: peliculas.results, loading: false });
    console.log("Peliculas: ", peliculas);
    console.log("longDescription: ", this.state.peliculas[0].longDescription);
  };

  render() {
    if (this.state.loading) {
      return (
        <Grid>
          <p>Loading...</p>
        </Grid>
      );
    }
    return (
      <Grid>
        <Row>
          <PageHeader>Lista de peliculas</PageHeader>
          <BuscarPelicula peliculaPorBuscar={this.peliculaPorBuscar} />
        </Row>
        <Row>
          <br />
          <PeliculasEncontradas peliculas={this.state.peliculas} />
        </Row>
        {/* {this.state.peliculas.map(pelicula => (
          <p key={pelicula.trackId}>{pelicula.trackName}</p>
        ))}; */}
      </Grid>
    );
  }
}

export default Pelicula;
