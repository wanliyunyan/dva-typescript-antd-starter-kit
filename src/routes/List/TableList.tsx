import { Button, Card, Col, Divider, Icon, Row, Table } from "antd";
import { connect } from "dva";
import React, { Component } from "react";

import styles from "./TableList.less";

interface Props {
  dispatch?: (obj) => void;
  list?: object[];
  loading: any;
}

@connect(state => ({
  ...state.list,
  loading: state.loading.effects
}))
export default class Index extends Component<Props, any> {
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
        render: (text): React.ReactNode => (
          <img src={text} style={{ height: "30px", width: "auto" }} alt="" />
        )
      },
      {
        title: "Action",
        key: "action",
        render: (text, row): React.ReactNode => (
          <span>
            <Button
              type="link"
              onClick={(): void => {
                dispatch({
                  type: "list/update",
                  payload: {
                    ...row,
                    title: "title has changed"
                  }
                });
              }}
            >
              update
            </Button>
            <Divider type="vertical" />
            <Button
              type="link"
              onClick={(): void => {
                dispatch({
                  type: "list/delete",
                  payload: row.id
                });
              }}
            >
              delete
            </Button>
            <Divider type="vertical" />
            <Button
              type="link"
              onClick={(): void => {
                dispatch({
                  type: "list/load",
                  payload: row.id
                });
              }}
            >
              view
            </Button>
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
                htmlType="button"
                block
                onClick={(): void => {
                  dispatch({
                    type: "list/create",
                    payload: {
                      title: "this is new"
                    }
                  });
                }}
              >
                add
              </Button>
            </Col>
            <Col span={1} />
            <Col span={3}>
              <Button
                htmlType="button"
                onClick={(): void => {
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
            rowKey="id"
            loading={loading["list/query"]}
          />
        </Card>
      </div>
    );
  }
}
