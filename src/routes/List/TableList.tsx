import {
  Button,
  Card,
  Divider,
  Dropdown,
  Form,
  Icon,
  Input,
  message,
  Modal,
  Row,
  Select,
  Table
} from "antd";
import { connect } from "dva";
import React, { Component } from "react";

import styles from "./TableList.less";

interface IProps {
  dispatch?: any;
  list?: object[];
}

@connect(state => ({
  ...state.tableList
}))
export default class Index extends Component<IProps, any> {
  public render() {
    const { list } = this.props;

    const columns = [
      {
        title: "title",
        dataIndex: "title",
        key: "title"
      },
      {
        title: "desc",
        dataIndex: "desc",
        key: "desc"
      },
      {
        title: "tag",
        dataIndex: "tag",
        key: "tag"
      },
      {
        title: "views",
        dataIndex: "views",
        key: "views"
      },
      {
        title: "images",
        dataIndex: "images",
        key: "images",
        render: text => (
          <img src={text} style={{ height: "30px", width: "auto" }} />
        )
      },
      {
        title: "Action",
        key: "action",
        render: () => (
          <span>
            <a href="javascript:;">Action</a>
            <Divider type="vertical" />
            <a href="javascript:;">Delete</a>
          </span>
        )
      }
    ];

    return (
      <div className={styles.main}>
        <Card bordered={false}>
          <Table columns={columns} dataSource={list} rowKey={"id"} />
        </Card>
      </div>
    );
  }
}
