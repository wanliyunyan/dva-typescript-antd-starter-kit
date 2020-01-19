import { Button, Checkbox, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "dva";
import React from "react";
import { GlobalStateProps } from "src/common/interface";
import styles from "./Login.less";

const { Item } = Form;

const Index = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const store = useSelector((state: GlobalStateProps) => state);
  const { loading } = store.user;

  const onFinish = values => {
    dispatch({
      type: "user/login",
      payload: values
    });
  };

  const onFinishFailed = ({ errorFields }) => {
    form.scrollToField(errorFields[0].name);
  };

  return (
    <div className={styles.main}>
      <Form
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            size="large"
            prefix={<UserOutlined className={styles.prefixIcon} />}
            placeholder="any"
          />
        </Item>

        <Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            size="large"
            prefix={<LockOutlined className={styles.prefixIcon} />}
            type="password"
            placeholder="any"
          />
        </Item>

        <Item>
          <Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Item>

          <Button className={styles.forgot} type="link">
            Forgot password
          </Button>
        </Item>

        <Item>
          {}
          <Button
            htmlType="submit"
            className={styles.submit}
            size="large"
            loading={loading}
            type="primary"
          >
            login
          </Button>
          Or <Button type="link">register now!</Button>
        </Item>
      </Form>
    </div>
  );
};

export default Index;
