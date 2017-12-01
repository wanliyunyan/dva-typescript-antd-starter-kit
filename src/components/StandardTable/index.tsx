import { Alert, Badge, Table } from "antd";
import moment from "moment";
import React, { PureComponent } from "react";
import styles from "./index.less";

const statusMap: string[] = ["default", "processing", "success", "error"];
type statusType= "success" | "processing" | "default" | "error" | "warning";

/*interface IProps {

}*/

interface IService {
  key?: any;
  title: string;
  dataIndex?: string;
  sorter?: boolean;
  filters?: [{
    text: string;
    value: string;
  }];
  width?: number;
  className?: string;
  render?: (text: string, record?: any, index?: number) => JSX.Element;
}

export class ITable extends Table<IService> { }
export class ITableColumn extends Table.Column<IService> { }

export default class StandardTable extends PureComponent<any, any> {
  public state = {
    selectedRowKeys: [],
    totalCallNo: 0,
  };

  public componentWillReceiveProps(nextProps): void {
    if (nextProps.selecrtdRows.length === 0) {
      this.setState({
        selectedRowKeys: [],
        totalCallNo: 0,
      });
    }
  }

  public handleRowSelectChange = (selectedRowKeys, selectedRows) => {
    const totalCallNo = selectedRows.reduce((sum, val) => {
      return sum + parseFloat(val.callNo);
    }, 0);

    if (this.props.onSelectRow) {
      this.props.onSelectRow(selectedRows);
    }

    this.setState({ selectedRowKeys, totalCallNo });
  }

  public handleTableChange  = (pagination, filters, sorter) => {
    this.props.onChange(pagination, filters, sorter);
  }

  public cleanSelectedKeys = () => {
    this.handleRowSelectChange([], []);
  }

  public render() {
    const {selectedRowKeys, totalCallNo} = this.state;
    const { data: { list, pagination }, loading } = this.props;

    const status = ["关闭", "运行中", "已上线", "异常"];

    const columns = [
      {
        title: "规则编号",
        dataIndex: "no",
        key: "no",
      },
      {
        title: "描述",
        dataIndex: "description",
        key: "description",
      },
      {
        title: "服务调用次数",
        dataIndex: "callNo",
        key: "callNo",
        sorter: true,
        render: (val) => (
          <p style={{ textAlign: "center" }}>
            {val} 万
          </p>
        ),
      },
      {
        title: "状态",
        dataIndex: "status",
        key: "status",
        filters: [
          {
            text: status[0],
            value: 0,
          },
          {
            text: status[1],
            value: 1,
          },
          {
            text: status[2],
            value: 2,
          },
          {
            text: status[3],
            value: 3,
          },
        ],
        render(val) {
          return <Badge status={statusMap[val] as statusType} text={status[val]} />;
        },
      },
      {
        title: "更新时间",
        dataIndex: "updatedAt",
        sorter: true,
        render: (val) => <span>{moment(val).format("YYYY-MM-DD HH:mm:ss")}</span>,
      },
      {
        title: "操作",
        render: () => (
          <p>
            <a href="">配置</a>
            <span className={styles.splitLine} />
            <a href="">订阅警报</a>
          </p>
        ),
      },
    ];

    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      ...pagination,
    };

    const rowSelection = {
      selectedRowKeys,
      onChange: this.handleRowSelectChange,
      getCheckboxProps: (record) => ({
        disabled: record.disabled,
      }),
    };

    return (
      <div className={styles.standardTable}>
        <div className={styles.tableAlert}>
          <Alert
            message={(
              <p>
                已选择 <a style={{ fontWeight: 600 }}>{selectedRowKeys.length}</a> 项&nbsp;&nbsp;
                服务调用总计 <span style={{ fontWeight: 600 }}>{totalCallNo}</span> 万
                <a onClick={this.cleanSelectedKeys} style={{ marginLeft: 24 }}>清空</a>
              </p>
            )}
            type="info"
            showIcon
          />
        </div>

        <Table
          dataSource={list}
          //columns ={columns}
        />

        <ITable
          loading={loading}
          rowKey={(record) => record.key}
          rowSelection={rowSelection}
          dataSource={list}
          pagination={paginationProps}
          onChange={this.handleTableChange}
        >
          <ITableColumn title={"规则编号"} dataIndex={"no"} />
          <ITableColumn title={"描述"} dataIndex={"description"} />
        </ITable>
      </div>
    );
  }

}
