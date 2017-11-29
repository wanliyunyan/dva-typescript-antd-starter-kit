import {Icon} from "antd";
import {Link, Route} from "dva/router";
import PropTypes from "prop-types";
import React from "react";
import GlobalFooter from "../components/GlobalFooter";
import * as styles from "./UserLayout.less";
//const styles = require("./UserLayout.less");
// import { getRouteData } from "../utils/utils";

const links = [{
  title: "帮助",
  href: "",
}, {
  title: "隐私",
  href: "",
}, {
  title: "条款",
  href: "",
}];

const copyright = <div>Copyright <Icon type="copyright"/> 2017 蚂蚁金服体验技术部出品</div>;

class UserLayout extends React.PureComponent {
  public render() {
    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={""}>
            <Link to="/">
              <img alt="" className={""} src="https://gw.alipayobjects.com/zos/rmsportal/NGCCBOENpgTXpBWUIPnI.svg" />
              <span className={""}>Ant Design</span>
            </Link>
          </div>
          <p className={""}>Ant Design 是西湖区最具影响力的 Web 设计规范</p>
          {

          }
          <GlobalFooter className={""} links={links} copyright={copyright} />
        </div>
      </div>
    );
  }
}

export default UserLayout;
