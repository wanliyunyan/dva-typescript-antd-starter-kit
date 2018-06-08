import * as React from "react";
import { Route, Router, Switch } from "react-router";
import BasicLayout from "./layouts/BasicLayout";
import UserLayout from "./layouts/UserLayout";

export default function({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/user" exact={true} component={UserLayout} />
        <Route path="/" component={BasicLayout} />
      </Switch>
    </Router>
  );
}
