import { lazy } from "react";

// const BasicLayout = lazy(async () => ((await import("../layouts/BasicLayout")) as any).default);
const BasicLayout = lazy(() => import("../layouts/BasicLayout"));
// const welcome = lazy(async () => (import("../routes/IndexPage/IndexPage") as any).default);
const welcome = lazy(() => import("../routes/IndexPage/IndexPage"));
// const tableList = lazy(async () => (import("../routes/List/TableList") as any).default);
const tableList = lazy(() => import("../routes/List/TableList"));
// const login = lazy(async () => (import("../routes/User/Login") as any).default);
const login = lazy(() => import("../routes/User/Login"));
// const blankLayout = lazy(async () => ((await import("../layouts/BlankLayout")) as any).default);
const blankLayout = lazy(() => import("../layouts/BlankLayout"));
// const userLayout = lazy(async () => (import("../layouts/UserLayout") as any).default);
const userLayout = lazy(() => import("../layouts/UserLayout"));

const data = [
  {
    component: BasicLayout,
    layout: "BasicLayout",
    name: "首页",
    path: "",
    children: [
      {
        name: "Dashboard",
        icon: "dashboard",
        path: "dashboard",
        children: [
          {
            name: "welcome",
            path: "welcome",
            component: welcome,
          },
        ],
      },
      /* {
        name: "表单页",
        path: "form",
        icon: "form",
        children: [
          {
            name: "基础表单",
            path: "basic-form",
            component: null
          },
          {
            name: "分步表单",
            path: "step-form",
            component: null,
            children: [
              {
                path: "confirm",
                component: null
              },
              {
                path: "result",
                component: null
              }
            ]
          },
          {
            name: "高级表单",
            path: "advanced-form",
            component: null
          }
        ]
      }, */
      {
        name: "列表页",
        path: "list",
        icon: "table",
        children: [
          {
            name: "查询表格",
            path: "table-list",
            component: tableList,
          },
        ],
      },
    ],
  },
  {
    component: userLayout,
    layout: "UserLayout",
    children: [
      {
        name: "帐户user",
        icon: "user",
        path: "user",
        children: [
          {
            name: "登录login",
            path: "login",
            component: login,
          },
        ],
      },
    ],
  },
  {
    component: blankLayout,
    layout: "BlankLayout",
    children: {
      name: "document",
      path: "http://pro.ant.design/docs/getting-started",
      target: "_blank",
      icon: "book",
    },
  },
];

export function getNavData() {
  return data;
}

export default data;
