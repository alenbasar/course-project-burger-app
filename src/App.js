import React, { Component } from "react";
import "./App.css";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Copyright from "./hoc/Layout/Copyright/Copyright";
import Aux from "./hoc/Aux/Aux";
class App extends Component {
  render() {
    return (
      <Aux>
        <div className="App">
          <Layout>
            <BurgerBuilder />
          </Layout>
          <Copyright />
        </div>
      </Aux>
    );
  }
}

export default App;
