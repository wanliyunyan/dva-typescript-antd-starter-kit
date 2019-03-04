import { Link, Route } from "dva/router";
import React from "react";
import { getRouteData } from "../utils/utils";
import styles from "./UserLayout.less";

export default class UserLayout extends React.PureComponent {
  public render() {
    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <Link to="/">
            <img
              alt=""
              src="https://gw.alipayobjects.com/zos/rmsportal/NGCCBOENpgTXpBWUIPnI.svg"
            />
            <span>Ant Design</span>
          </Link>
        </div>

        {getRouteData("UserLayout").map(item => (
          <Route
            exact={item.exact}
            key={item.path}
            path={item.path}
            component={item.component}
          />
        ))}
      </div>
    );
  }
}
