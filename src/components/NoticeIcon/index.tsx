import { Badge, Icon, Popover, Spin, Tabs } from "antd";
import classNames from "classnames";
import React, { PureComponent } from "react";
import * as styles from "./index.less";
import List from "./NoticeList";

interface IProps {
  className?: any;
  count?: any;
  onItemClick?: (item, tab) => any;
  onClear?: (value) => any;
  onPopupVisibleChange?: () => any;
  loading?: any;
  locale?: {
    emptyText: string;
    clear: string;
  };
  popupVisible?: any;
  onTabChange?: (type) => any;
  children?: any[];
  list?: any;
  title?: any;
  emptyText?: any;
  emptyImage?: string;
}

const { TabPane } = Tabs;

export default class NoticeIcon extends PureComponent<IProps, any> {
  public static Tab = TabPane;

  public state: any;

  constructor(props) {
    super(props);
    this.state = {};
    if (props.children && props.children[0]) {
      this.state.tabType = props.children[0].props.title;
    }
  }

  public onItemClick = (item, tabProps) => {
    const { onItemClick } = this.props;
    onItemClick(item, tabProps);
  };

  public onTabChange = tabType => {
    this.setState({ tabType });
    this.props.onTabChange(tabType);
  };

  public getNotificationBox = () => {
    const { children, loading, locale } = this.props;
    if (!children) {
      return null;
    }
    const panes = children.map(child => {
      const title =
        child.props.list && child.props.list.length > 0
          ? `${child.props.title}(${child.props.list.length})`
          : child.props.title;
      return (
        <TabPane tab={title} key={child.props.title}>
          <List
            {...child.props}
            data={child.props.list}
            onClick={item => this.onItemClick(item, child.props)}
            onClear={() => this.props.onClear(child.props.title)}
            title={child.props.title}
            locale={locale}
          />
        </TabPane>
      );
    });
    return (
      <Spin spinning={loading} delay={0}>
        <Tabs className={styles.tabs} onChange={this.onTabChange}>
          {panes}
        </Tabs>
      </Spin>
    );
  };

  public render() {
    const { className, count, onPopupVisibleChange } = this.props;
    const noticeButtonClass = classNames(className, styles.noticeButton);
    const notificationBox = this.getNotificationBox();
    const trigger = (
      <span className={noticeButtonClass}>
        <Badge count={count}>
          {" "}
          className={styles.badge}>
          <Icon type={"bell"} className={styles.icon} />
        </Badge>
      </span>
    );

    if (!notificationBox) {
      return trigger;
    }

    const popoverProps = {
      visible: false
    };

    if ("popupVisible" in this.props) {
      popoverProps.visible = this.props.popupVisible;
    }

    return (
      <Popover
        placement="bottomRight"
        content={notificationBox}
        overlayClassName={styles.popover}
        trigger={"click"}
        arrowPointAtCenter={true}
        onVisibleChange={onPopupVisibleChange}
        {...popoverProps}
      >
        {trigger}
      </Popover>
    );
  }
}
