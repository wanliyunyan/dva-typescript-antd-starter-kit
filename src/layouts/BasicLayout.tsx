import { Button, Divider, ConfigProvider, Layout, Menu } from "antd";
import Icon, { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import zhCN from "antd/es/locale/zh_CN";
import { useSelector, useDispatch } from "dva";
import {
  Link,
  Redirect,
  Route,
  routerRedux,
  Switch,
  useLocation,
} from "dva/router";
import React, { Suspense, useState } from "react";
import { GlobalStateProps } from "src/common/interface";
import { getNavData } from "../common/nav";
import { getRouteData } from "../utils/utils";
import styles from "./BasicLayout.less";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const Index = () => {
  const dispatch = useDispatch();
  const global = useSelector((state: GlobalStateProps) => state.global);
  const location = useLocation();
  const { collapsed } = global;

  const [menus] = useState(
    getNavData().reduce((arr, current) => arr.concat(current.children), [])
  );

  const getCurrentMenuSelectedKeys = () => {
    const { pathname } = location;
    const keys = pathname.split("/").slice(1);
    if (keys.length === 1 && keys[0] === "") {
      return [menus[0].key];
    }
    return keys;
  };

  const getDefaultCollapsedSubMenus = () => {
    const currentMenuSelectedKeys = [...getCurrentMenuSelectedKeys()];
    currentMenuSelectedKeys.splice(-1, 1);
    if (currentMenuSelectedKeys.length === 0) {
      return ["dashboard"];
    }
    return currentMenuSelectedKeys;
  };

  const [openKeys, setOpenKeys] = useState(getDefaultCollapsedSubMenus());

  // 折叠
  const onCollapse = (collapsedParam) => {
    dispatch({
      type: "global/changeLayoutCollapsed",
      payload: collapsedParam,
    });
  };

  const handleOpenChange = (openKeysParam) => {
    const lastOpenKey = openKeysParam[openKeysParam.length - 1];
    const isMainMenu = menus.some(
      (item) => item.key === lastOpenKey || item.path === lastOpenKey
    );

    setOpenKeys(isMainMenu ? [lastOpenKey] : [...openKeysParam]);
  };

  const getNavMenuItems = (menusData, parentPath = "") => {
    if (!menusData) {
      return [];
    }
    return menusData.map((item) => {
      if (!item.name) {
        return null;
      }
      let itemPath;

      if (item.path.indexOf("http") === 0) {
        itemPath = item.path;
      } else {
        itemPath = `${parentPath}/${item.path || ""}`.replace(/\/+/g, "/");
      }

      if (item.children && item.children.some((child) => child.name)) {
        return (
          <SubMenu
            title={
              item.icon ? (
                <span>
                  {/* <Icon type={item.icon} /> */}
                  <span>{item.name}</span>
                </span>
              ) : (
                item.name
              )
            }
            key={item.key || item.path}
          >
            {getNavMenuItems(item.children, itemPath)}
          </SubMenu>
        );
      }

      return (
        <Menu.Item key={item.key || item.path}>
          {/^https?:\/\//.test(itemPath) ? (
            <a href={itemPath} target={item.target}>
              <span>{item.name}</span>
            </a>
          ) : (
            <Link
              to={itemPath}
              target={item.target}
              replace={itemPath === location.pathname}
            >
              <span>{item.name}</span>
            </Link>
          )}
        </Menu.Item>
      );
    });
  };

  const toggle = () => {
    dispatch({
      type: "global/changeLayoutCollapsed",
      payload: !collapsed,
    });
  };

  const menuProps = collapsed
    ? {}
    : {
        openKeys,
      };

  const layout = (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="md"
        onCollapse={onCollapse}
        width={256}
        className={styles.sider}
      >
        <div className={styles.logo}>
          <Link to="/">
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/iwWyPinUoseUxIAeElSx.svg"
              alt="logo"
            />
            <h1>Ant Design Pro</h1>
          </Link>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          {...menuProps}
          onOpenChange={handleOpenChange}
          selectedKeys={getCurrentMenuSelectedKeys()}
          style={{ margin: "16px 0", width: "100%" }}
        >
          {getNavMenuItems(menus)}
        </Menu>
      </Sider>
      <Layout>
        <Header className={styles.header}>
          {collapsed ? (
            <MenuUnfoldOutlined className={styles.trigger} onClick={toggle} />
          ) : (
            <MenuFoldOutlined className={styles.trigger} onClick={toggle} />
          )}

          <Divider dashed type="vertical" style={{ height: "50px" }} />
          <Button
            htmlType="button"
            onClick={() => {
              dispatch(
                routerRedux.push({
                  pathname: "/user/login",
                  search: "",
                })
              );
            }}
          >
            logout
          </Button>
        </Header>
        <Content style={{ margin: "24px 24px 0", height: "100%" }}>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              {getRouteData("BasicLayout").map((item) => {
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
              <Redirect exact from="/" to="/user/login" />
            </Switch>
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );

  return <ConfigProvider locale={zhCN}>{layout}</ConfigProvider>;
};

export default Index;
