import { Button, Card, Col, DatePicker, Dropdown, Form, Icon, Input, InputNumber, Menu, message, Modal, Row, Select } from "antd";
import { connect } from "dva";
import React, { PureComponent } from "react";
import StandardTable from "../../components/StandardTable";
import PageHeaderLayout from "../../layouts/PageHeaderLayout";

import styles from "./TableList.less";

interface IProps {
  dispatch?: any;
}

const FormItem = Form.Item;
const { Option } = Select;
const getValue = (obj) => Object.keys(obj).map((key) => obj[key]).join(",");

@connect((state) => ({
  ruleL: state.rule,
}))
//@Form.create()
export default class TableList extends PureComponent<IProps, any> {
  public state = {
    addInputValue: "",
    modalVisible: false,
    expandForm: false,
    selectedRows: [],
    formValues: {},
  };

  public componentDidMount(){
    const {dispatch} = this.props;
    dispatch({
      type: "rule/fetch",
    });
  }

  return (
    <PageHeaderLayout title="查询表格">
    </PageHeaderLayout>
  )
}
