import { Route, routerRedux, Switch } from "dva/router";
import * as React from "react";
import BasicLayout from "./layouts/BasicLayout";
import UserLayout from "./layouts/UserLayout";

const { ConnectedRouter } = routerRedux;

export default function({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/user" exact={true} component={UserLayout} />
        <Route path="/" component={BasicLayout} />
      </Switch>
    </ConnectedRouter>
  );
}
