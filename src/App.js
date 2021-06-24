import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import One from "./pages/one";
import Two from "./pages/two";
import Three from "./pages/three";
import Index from "./pages/index";

export default function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/one">
            <One />
          </Route>
          <Route path="/two">
            <Two />
          </Route>
          <Route path="/three">
            <Three />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
    </Router>
  );
}