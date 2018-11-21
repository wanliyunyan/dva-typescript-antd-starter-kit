import { Route, routerRedux, Switch } from "dva/router";
import * as React from "react";
import Error from "src/components/Error/index";
import BasicLayout from "./layouts/BasicLayout";
import UserLayout from "./layouts/UserLayout";

const { ConnectedRouter } = routerRedux;

export default function({ history }) {
  return (
    <Error>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/user" component={UserLayout} />
          <Route path="/" component={BasicLayout} />
        </Switch>
      </ConnectedRouter>
    </Error>
  );
}
