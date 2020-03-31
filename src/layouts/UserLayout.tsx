import { Link, Route } from "dva/router";
import React from "react";
import { getRouteData } from "../utils/utils";
import styles from "./UserLayout.less";

export default () => {
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <Link to="/">
          <img
            alt=""
            src="https://gw.alipayobjects.com/zos/rmsportal/NGCCBOENpgTXpBWUIPnI.svg"
          />
          <span>Ant Design</span>
        </Link>
      </div>
      {getRouteData("UserLayout").map((item) => {
        const Component = item.component;
        return (
          <Route
            exact={item.exact}
            key={item.path}
            path={item.path}
            render={() => <Component />}
          />
        );
      })}
    </div>
  );
};
