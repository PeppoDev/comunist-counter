import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Menu, Game, Result } from "./pages";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Menu}></Route>
        <Route path="/game" component={Game}></Route>
      </Switch>
    </BrowserRouter>
  );
}
