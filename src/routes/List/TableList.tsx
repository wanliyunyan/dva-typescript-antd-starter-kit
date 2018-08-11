import { Button, Card, Col, Divider, Icon, Row, Table } from "antd";
import { connect } from "dva";
import React, { Component } from "react";

import styles from "./TableList.less";

interface IProps {
  dispatch?: any;
  list?: object[];
  loading: any;
}

@connect(state => ({
  ...state.list,
  loading: state.loading.effects
}))
export default class Index extends Component<IProps, any> {
  public render() {
    const { list, dispatch, loading } = this.props;

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
        render: (text, row) => (
          <span>
            <a
              onClick={() => {
                dispatch({
                  type: "list/update",
                  payload: {
                    ...row,
                    title: "title被修改了"
                  }
                });
              }}
            >
              修改
            </a>
            <Divider type="vertical" />
            <a
              onClick={() => {
                dispatch({
                  type: "list/delete",
                  payload: row.id
                });
              }}
            >
              删除
            </a>
          </span>
        )
      }
    ];

    return (
      <div className={styles.main}>
        <Card bordered={false}>
          <Row>
            <Col span={2}>
              <Button
                type="primary"
                block={true}
                onClick={() => {
                  dispatch({
                    type: "list/create",
                    payload: {
                      title: "这是新增的"
                    }
                  });
                }}
              >
                增
              </Button>
            </Col>
            <Col span={1} />
            <Col span={3}>
              <Button
                onClick={() => {
                  dispatch({ type: "list/query" });
                }}
              >
                <Icon type="reload" />
              </Button>
            </Col>
          </Row>
          <Table
            columns={columns}
            dataSource={list}
            rowKey={"id"}
            loading={loading["list/query"]}
          />
        </Card>
      </div>
    );
  }
}
