import { Route, Router, Switch } from "dva/router";
import * as React from "react";
import BasicLayout from "./layouts/BasicLayout";
import UserLayout from "./layouts/UserLayout";

export default function({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/user" exact component={UserLayout} />
        <Route path="/" component={BasicLayout} />
      </Switch>
    </Router>
  );
}
