import { cloneDeep } from "lodash-es";
import navData from "../common/nav";

function getPlainNode(nodeList: any, parentPath = "") {
  const arr: any = [];
  nodeList.forEach((node: any) => {
    const item = node;
    item.path = `${parentPath}/${item.path || ""}`.replace(/\/+/g, "/");
    item.exact = true;
    if (item.children && !item.component) {
      arr.push(...getPlainNode(item.children, item.path));
    } else {
      if (item.children && item.component) {
        item.exact = false;
      }
      arr.push(item);
    }
  });
  return arr;
}

export function getRouteData(path: string) {
  if (
    !navData.some((item) => item.layout === path) ||
    !navData.filter((item) => item.layout === path)[0].children
  ) {
    return null;
  }
  const dataList = cloneDeep(navData.filter((item) => item.layout === path)[0]);
  return getPlainNode(dataList.children);
}
