import { Icon } from "antd";
import { Link, Route } from "dva/router";
import React from "react";
import GlobalFooter from "../components/GlobalFooter";
import { getRouteData } from "../utils/utils";
import styles from "./UserLayout.less";

const links = [
  {
    title: "help",
    href: ""
  },
  {
    title: "privacy",
    href: ""
  },
  {
    title: "term",
    href: ""
  }
];

const copyright = (
  <div>
    Copyright <Icon type="copyright" /> 2017 蚂蚁金服体验技术部出品
  </div>
);

class UserLayout extends React.PureComponent {
  public render() {
    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <div>
            <Link to="/">
              <img
                alt=""
                className={""}
                src="https://gw.alipayobjects.com/zos/rmsportal/NGCCBOENpgTXpBWUIPnI.svg"
              />
              <span className={""}>Ant Design</span>
            </Link>
          </div>
          <p className={""}>Ant Design 是西湖区最具影响力的 Web 设计规范</p>
          {getRouteData("UserLayout").map(item => (
            <Route
              exact={item.exact}
              key={item.path}
              path={item.path}
              component={item.component}
            />
          ))}
          <GlobalFooter className={""} links={links} copyright={copyright} />
        </div>
      </div>
    );
  }
}

export default UserLayout;
