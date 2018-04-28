import {
  Button,
  Card,
  Col,
  DatePicker,
  Dropdown,
  Form,
  Icon,
  Input,
  InputNumber,
  Menu,
  message,
  Modal,
  Row,
  Select
} from "antd";
import { connect } from "dva";
import React, { PureComponent } from "react";
import StandardTable from "../../components/StandardTable";
import PageHeaderLayout from "../../layouts/PageHeaderLayout";

import styles from "./TableList.less";

interface IProps {
  dispatch?: any;
  rule?: {
    data: {
      list: any[];
      pagination: any;
    };
    loading: boolean;
  };
}

const FormItem = Form.Item;
const { Option } = Select;
const getValue = obj =>
  Object.keys(obj)
    .map(key => obj[key])
    .join(",");

@connect(state => ({
  rule: state.rule
}))
// @Form.create()
export default class TableList extends PureComponent<IProps, any> {
  public state = {
    addInputValue: "",
    modalVisible: false,
    expandForm: false,
    selectedRows: [],
    formValues: {}
  };

  public componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: "rule/fetch"
    });
  }

  public handleModalVisible = (flag: boolean) => {
    this.setState({
      modalVisible: flag
    });
  };

  public renderAdvancedForm = () => {
    return <div />;
  };

  public renderSimpleForm = () => {
    return <div />;
  };

  public renderForm = () => {
    return this.state.expandForm
      ? this.renderAdvancedForm()
      : this.renderSimpleForm();
  };

  public handleMenuClick = () => {
    return null;
  };

  public handleSelectRows = rows => {
    this.setState({
      selectedRows: rows
    });
  };

  public handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const { dispatch } = this.props;
    const { formValues } = this.state;

    console.log(filtersArg);

    const filters = Object.keys(filtersArg).reduce((obj, key) => {
      const newObj = { ...obj };
      newObj[key] = getValue(filtersArg[key]);
      return newObj;
    }, {});
    console.log(filters);

    const params = {
      currentPage: pagination.current,
      pageSize: pagination.pageSize,
      ...formValues,
      ...filters
    };
    console.log("params", params);
    dispatch({
      type: "rule/fetch",
      payload: params
    });
  };

  public render() {
    console.log(this.props.rule);
    const {
      rule: { loading: ruleLoading, data }
    } = this.props;
    const { selectedRows, modalVisible, addInputValue } = this.state;

    const menu = (
      <Menu onClick={this.handleMenuClick} selectedKeys={[]}>
        <Menu.Item key="remove">删除</Menu.Item>
        <Menu.Item key="approval">批量审批</Menu.Item>
      </Menu>
    );

    return (
      <PageHeaderLayout title="查询表格">
        <Card bordered={false}>
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>{this.renderForm()}</div>
            <div className={styles.tableListOperator}>
              <Button
                icon="plus"
                type="primary"
                onClick={() => this.handleModalVisible(true)}
              >
                新建
              </Button>
              {selectedRows.length > 0 && (
                <span>
                  <Button>批量操作</Button>
                  <Dropdown overlay={menu}>
                    <Button>
                      更多操作 <Icon type="down" />
                    </Button>
                  </Dropdown>
                </span>
              )}
            </div>
            <StandardTable
              selectedRows={selectedRows}
              loading={ruleLoading}
              data={data}
              onSelectRow={this.handleSelectRows}
              onChange={this.handleStandardTableChange}
            />
          </div>
        </Card>
      </PageHeaderLayout>
    );
  }
}
