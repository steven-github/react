import React from "react";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const BuscarPelicula = props => {
  return (
    <form inline="true" onSubmit={props.peliculaPorBuscar}>
      <FormGroup>
        <FormControl
          type="text"
          name="peliculaPorBuscar"
          placeholder="¿Que pelicula buscas??"
        />
      </FormGroup>
      <Button type="submit">Buscar</Button>
    </form>
  );
};

export default BuscarPelicula;
