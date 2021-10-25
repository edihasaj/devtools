import {Route, Switch} from "react-router-dom";
import React from "react";
import JsonIndent from "../JsonIndent";

export const Routes = () => {
  return (<Switch>
      <Route path="/">
          <JsonIndent />
      </Route>
  </Switch>)
}