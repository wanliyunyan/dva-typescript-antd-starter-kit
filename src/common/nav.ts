import BasicLayout from "../layouts/BasicLayout";
import BlankLayout from "../layouts/BlankLayout";
import UserLayout from "../layouts/UserLayout";
import IndexPage from "../routes/IndexPage/IndexPage";

const data = [
  {
    component: BasicLayout,
    layout: "BasicLayout",
    name: "首页", // for breadcrumb
    path: "",
    children: [
      {
        name: "Dashboard",
        icon: "dashboard",
        path: "dashboard",
        children: [
          {
            name: "分析页",
            path: "analysis",
            component: IndexPage
          },
          {
            name: "监控页",
            path: "monitor",
            component: null
          },
          {
            name: "工作台",
            path: "workplace",
            component: null
          }
        ]
      },
      {
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
      },
      {
        name: "列表页",
        path: "list",
        icon: "table",
        children: [
          {
            name: "查询表格",
            path: "table-list",
            component: null
          },
          {
            name: "标准列表",
            path: "basic-list",
            component: null
          },
          {
            name: "卡片列表",
            path: "card-list",
            component: null
          },
          {
            name: "搜索列表（项目）",
            path: "cover-card-list",
            component: null
          },
          {
            name: "搜索列表（应用）",
            path: "filter-card-list",
            component: null
          },
          {
            name: "搜索列表（文章）",
            path: "search",
            component: null
          }
        ]
      },
      {
        name: "详情页",
        path: "profile",
        icon: "profile",
        children: [
          {
            name: "基础详情页",
            path: "basic",
            component: null
          },
          {
            name: "高级详情页",
            path: "advanced",
            component: null
          }
        ]
      },
      {
        name: "结果",
        path: "result",
        icon: "check-circle-o",
        children: [
          {
            name: "成功",
            path: "success",
            component: null
          },
          {
            name: "失败",
            path: "fail",
            component: null
          }
        ]
      },
      {
        name: "异常",
        path: "exception",
        icon: "warning",
        children: [
          {
            name: "403",
            path: "403",
            component: null
          },
          {
            name: "404",
            path: "404",
            component: null
          },
          {
            name: "500",
            path: "500",
            component: null
          }
        ]
      }
    ]
  },
  {
    component: UserLayout,
    layout: "UserLayout",
    children: [
      {
        name: "帐户",
        icon: "user",
        path: "user",
        children: [
          {
            name: "登录",
            path: "login",
            component: null
          },
          {
            name: "注册",
            path: "register",
            component: null
          },
          {
            name: "注册结果",
            path: "register-result",
            component: null
          }
        ]
      }
    ]
  },
  {
    component: BlankLayout,
    layout: "BlankLayout",
    children: {
      name: "使用文档",
      path: "http://pro.ant.design/docs/getting-started",
      target: "_blank",
      icon: "book"
    }
  }
];

export function getNavData() {
  return data;
}

export default data;
