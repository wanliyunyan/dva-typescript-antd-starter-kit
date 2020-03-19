import { Button, Card, Col, Divider, Row, Table } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import { useDispatch } from "dva";
import React from "react";
import styles from "./TableList.less";
import useSWR, { trigger, mutate } from "swr";
import { get } from "src/utils/request";

export default () => {
  const { data, error } = useSWR("/api/list", get);

  const dispatch = useDispatch();

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
                // send a request to the API to update the data
                dispatch({
                  type: "list/create",
                  payload: {
                    title: "this is new"
                  }
                });
                // update the local data immediately and revalidate (refetch)
                // mutate("/api/list", { ...data, title: "this is new" });
                // not work
                /*mutate("/api/list", async users => {
                  console.log(users)
                  const list = await get("/api/list");
                  return [];
                });*/
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
                trigger("/api/list");
              }}
            >
              <ReloadOutlined />
            </Button>
          </Col>
        </Row>
        <Table
          columns={columns}
          dataSource={(data as any)?.data}
          rowKey="id"
          loading={!data}
        />
      </Card>
    </div>
  );
};
