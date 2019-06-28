import { Button, Checkbox, Form, Icon, Input } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { connect } from "dva";
import React, { Component } from "react";
import styles from "./Login.less";

const { Item } = Form;

interface Props extends FormComponentProps {
  dispatch?: (obj) => void;
  user: {
    loading?: boolean;
    loginData: {
      username: any;
      password: any;
    };
  };
}

class Login extends Component<Props, any> {
  public interval;

  public componentWillUnmount(): void {
    clearInterval(this.interval);
  }

  public handleSubmit = (e): void => {
    const { dispatch, form } = this.props;
    e.preventDefault();

    form.validateFields({ force: true }, (err, values): void => {
      if (!err) {
        dispatch({
          type: "user/login",
          payload: values
        });
      }
    });
  };

  public render(): React.ReactNode {
    const {
      form,
      user: { loading }
    } = this.props;
    const { getFieldDecorator } = form;

    return (
      <div className={styles.main}>
        <Form onSubmit={this.handleSubmit}>
          <Item>
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
          </Item>
          <Item>
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
          </Item>

          <Item className={styles.additional}>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
            <Button type="link" className={styles.forgot}>
              forget password
            </Button>
            <Button
              size="large"
              loading={loading}
              className={styles.submit}
              type="primary"
              htmlType="submit"
            >
              login
            </Button>
          </Item>
        </Form>
      </div>
    );
  }
}

export default connect(state => ({
  user: state.user
}))(
  Form.create<Props>({
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
