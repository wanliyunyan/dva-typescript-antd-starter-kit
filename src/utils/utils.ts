import { cloneDeep } from "lodash";
import navData from "../common/nav";

function getPlainNode(nodeList, parentPath = "") {
  const arr = [];
  nodeList.forEach(node => {
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

export function getRouteData(path) {
  if (
    !navData.some(item => item.layout === path) ||
    !navData.filter(item => item.layout === path)[0].children
  ) {
    return null;
  }
  const dataList = cloneDeep(navData.filter(item => item.layout === path)[0]);
  const nodeList = getPlainNode(dataList.children);
  return nodeList;
}
