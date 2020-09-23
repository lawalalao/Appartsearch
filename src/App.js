import React from "react";
import Acceuil from './Acceuil.js';
import Header from './Header.js';
import Footer from './Footer';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SearchPage from "./SearchPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path='/'>
              < Acceuil />
            </Route>

        </Switch>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
