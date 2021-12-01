import { Button, Card, Col, Divider, Row, Table } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import { useDispatch } from "dva";
import { merge } from "lodash-es";
import React from "react";
import useSWR, { useSWRConfig } from "swr";
import { get } from "src/utils/request";

export default function () {
  const { mutate } = useSWRConfig();
  const { data } = useSWR("/api/list", get);

  const dispatch = useDispatch();

  if (!data) {
    return <div />;
  }

  const columns = [
    {
      title: "title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "desc",
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "tag",
      dataIndex: "tag",
      key: "tag",
    },
    {
      title: "views",
      dataIndex: "views",
      key: "views",
    },
    {
      title: "images",
      dataIndex: "images",
      key: "images",
      render: (text: any): React.ReactNode => (
        <img src={text} style={{ height: "30px", width: "auto" }} alt="" />
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text: any, row: any): React.ReactNode => (
        <span>
          <Button
            type="link"
            onClick={(): void => {
              dispatch({
                type: "list/update",
                payload: {
                  ...row,
                  title: "title has changed",
                },
              });

              mutate("/api/list", async (users: any) => {
                return {
                  ...users,
                  data: users.data.map((obj: any) => {
                    if (obj.id === row.id) {
                      return merge(obj, {
                        ...row,
                        title: "title has changed",
                      });
                    }
                    return obj;
                  }),
                };
              });
            }}
          >
            update
          </Button>
          <Divider type="vertical" />
          <Button
            type="link"
            onClick={async () => {
              await dispatch({
                type: "list/delete",
                payload: row.id,
              });
              mutate("/api/list");
            }}
          >
            delete
          </Button>
          <Divider type="vertical" />
          <Button
            type="link"
            onClick={async () => {
              await dispatch({
                type: "list/load",
                payload: row.id,
              });
            }}
          >
            view
          </Button>
        </span>
      ),
    },
  ];

  return (
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
                  title: "this is new",
                },
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
              mutate("/api/list");
            }}
          >
            <ReloadOutlined />
          </Button>
        </Col>
      </Row>
      <Table
        columns={columns}
        dataSource={data?.data}
        rowKey="id"
        loading={!data}
      />
    </Card>
  );
}
