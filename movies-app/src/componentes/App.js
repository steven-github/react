import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import Inicio from "./Inicio";
import Saludo from "./Saludo/index";
import Pelicula from "./Pelicula/index";
import Menu from "./Menu";
import PaginaNoExiste from "./PaginaNoExiste";

export class App extends Component {
  state = {
    name: this.props.name,
    message: this.props.message
  };

  render() {
    return (
      <Router>
        <div>
          <Menu />
          <Switch>
            <Route path="/" component={Inicio} exact />
            <Route path="/saludar" component={Saludo} />
            <Route path="/peliculas" component={Pelicula} />
            <Route component={PaginaNoExiste} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
