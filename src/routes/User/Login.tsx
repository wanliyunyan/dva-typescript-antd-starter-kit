import { Button, Checkbox, Form, Icon, Input } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { connect } from "dva";
import React, { Component } from "react";
import styles from "./Login.less";

const FormItem = Form.Item;

interface IProps extends FormComponentProps {
  dispatch?: any;
  user: {
    loading?: boolean;
    loginData: {
      username: any;
      password: any;
    };
  };
}

class Login extends Component<IProps, any> {
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
                  message: "please enter your username"
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
                  message: "please enter your password"
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
            })(<Checkbox>Remember me</Checkbox>)}
            <a className={styles.forgot} href="">
              forget password
            </a>
            <Button
              size="large"
              loading={loading}
              className={styles.submit}
              type="primary"
              htmlType="submit"
            >
              login
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
