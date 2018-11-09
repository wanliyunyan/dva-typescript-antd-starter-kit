import {
  Alert,
  Button,
  Checkbox,
  Col,
  Form,
  Icon,
  Input,
  Row,
  Tabs
} from "antd";
import { connect } from "dva";
import { FormComponentProps } from "antd/lib/form";
import { Link, routerRedux } from "dva/router";
import React, { Component } from "react";
import styles from "./Login.less";

const FormItem = Form.Item;
const { TabPane } = Tabs;

interface IProps {
  dispatch?: any;
  user: {
    loading?: boolean;
    loginData: {
      username: any;
      password: any;
    };
  };
}

class Login extends Component<IProps & FormComponentProps, any> {
  public interval;

  constructor(props) {
    super(props);
  }

  public componentWillUnmount() {
    clearInterval(this.interval);
  }

  public handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields({ force: true }, (err, values) => {
      if (!err) {
        this.props.dispatch({
          type: "user/login",
          payload: values
        });
      }
    });
  };

  public render() {
    const {
      form,
      user: { loading }
    } = this.props;
    const { getFieldDecorator } = form;

    return (
      <div className={styles.main}>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator("username", {
              rules: [
                {
                  required: true,
                  message: "请输入账户名！"
                }
              ]
            })(
              <Input
                size="large"
                prefix={<Icon type="user" className={styles.prefixIcon} />}
                placeholder="any"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "请输入密码！"
                }
              ]
            })(
              <Input
                size="large"
                prefix={<Icon type="lock" className={styles.prefixIcon} />}
                type="password"
                placeholder="any"
              />
            )}
          </FormItem>

          <FormItem className={styles.additional}>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>自动登录</Checkbox>)}
            <a className={styles.forgot} href="">
              忘记密码
            </a>
            <Button
              size="large"
              loading={loading}
              className={styles.submit}
              type="primary"
              htmlType="submit"
            >
              登录
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default connect(state => ({
  user: state.user
}))(
  Form.create<IProps>({
    onFieldsChange(props, changedFields) {
      props.dispatch({
        type: "user/save",
        payload: changedFields
      });
    },
    mapPropsToFields(props) {
      const { user } = props;
      return {
        username: Form.createFormField({
          ...user.loginData.username,
          value: user.loginData.username.value
        }),
        password: Form.createFormField({
          ...user.loginData.password,
          value: user.loginData.password.value
        })
      };
    }
  })(Login)
);
