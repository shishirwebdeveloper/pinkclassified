import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';


const onFinish = async (values) => {
    const response = await axios.post('http://localhost:5000/api/v1/users/signin', values);
    console.log(response);
};


const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};

const Login = () => {
    return <>
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
                label="Email"
                name="email"
                rules={[
                    { required: true, message: "Email is required" },
                    { type: "email", message: "Enter a valid email address" }
                ]}
            >
                <Input />
            </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Login
      </Button>
      &nbsp;
       <Button type="success" htmlType="submit" variant="dashed">
        Register
      </Button>
    </Form.Item>
  </Form>
    </>
}

export default Login;