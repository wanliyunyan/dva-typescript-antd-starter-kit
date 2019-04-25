import { Route, routerRedux, Switch } from "dva/router";
import Error from "src/components/Error/index";
import BasicLayout from "./layouts/BasicLayout";
import UserLayout from "./layouts/UserLayout";
import React, { Suspense } from "react";

const { ConnectedRouter } = routerRedux;

export default function({ history }) {
  return (
    <Error>
      <ConnectedRouter history={history}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/user" component={UserLayout} />
            <Route path="/" component={BasicLayout} />
          </Switch>
        </Suspense>
      </ConnectedRouter>
    </Error>
  );
}
