import { Route, routerRedux, Switch } from "dva/router";
import React, { Suspense } from "react";
import Error from "src/components/Error/index";
import BasicLayout from "./layouts/BasicLayout";
import UserLayout from "./layouts/UserLayout";

const { ConnectedRouter } = routerRedux;

export default function({ history }: any): React.ReactNode {
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
