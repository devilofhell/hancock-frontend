import React from "react";

import "./App.css";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import RecentlyAddedAlbums from "./RecentlyAddedAlbums";
import RecentlyTakenPhotos from "./RecentlyTakenPhotos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDataLayerValue } from "./DataLayer";
import "bootstrap/dist/css/bootstrap.min.css";
import Upload from "./Upload";

function App() {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
          <Router path={"/"}>
            <div className="app__recentlyAddedAlbums">
              <RecentlyAddedAlbums />
            </div>

            <div className="app__recentlyTakenPhotos">
              <RecentlyTakenPhotos />
            </div>
          </Router>
        </Switch>
      </Router>

      {/*

      */}
    </div>
  );
}

export default App;
