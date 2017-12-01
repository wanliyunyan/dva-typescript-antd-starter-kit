import { Breadcrumb, Tabs } from "antd";
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { createElement, PureComponent } from "react";
import styles from "./index.less";

const { TabPane } = Tabs;

const getBreadcrumbNameWithParams = (breadcrumbNameMap: any[], url: string): string => {
  let name = "";
  Object.keys(breadcrumbNameMap).forEach((item) => {
    const itemRegExpStr = `^${item.replace(/:[\w-]+/g, "[\\w-]+")}$`;
    const itemRegExp = new RegExp(itemRegExpStr);
    if (itemRegExp.test(url)) {
      name = breadcrumbNameMap[item];
    }
  });
  return name;
};

interface IProps {
  routes?: any;
  params?: any;
  location?: any;
  breadcrumbNameMap?: any;
  title?: any;
  logo?: any;
  action?: any;
  content?: any;
  extraContent?: any;
  breadcrumbList?: any;
  tabList?: any;
  className?: any;
  linkElement?: any;
}

export default class PageHeader extends PureComponent<IProps, any> {

  public getBreadcrumbProps= () => {
    return {
      routes: this.props.routes || this.context.routes,
      params: this.props.params || this.context.params,
      location: this.props.location || this.context.location,
      breadcrumbNameMap: this.props.breadcrumbNameMap || this.context.breadcrumbNameMap,
    };
  }

  public itemRender= (route, params, routes, paths) => {
    const { linkElement = "a" } = this.props;
    const last = routes.indexOf(route) === routes.length - 1;
    return (last || !route.component)
      ? <span>{route.breadcrumbName}</span>
      : createElement(linkElement, {
        href: paths.join("/") || "/",
        to: paths.join("/") || "/",
      }, route.breadcrumbName);
  }

  public render() {

    const { routes, params, location, breadcrumbNameMap } = this.getBreadcrumbProps();

    const {
      title, logo, action, content, extraContent,
      breadcrumbList, tabList, className, linkElement = "a",
    } = this.props;

    const clsString = classNames(styles.pageHeader, className);

    let breadcrumb;

    if (routes && params) {
      breadcrumb = (
        <Breadcrumb
          className={styles.breadcrumb}
          routes={routes.filter((route) => route.breadcrumbName)}
          params={params}
          itemRender={this.itemRender}
        />
      );
    }

    return (
      <div></div>
    );
  }
}
