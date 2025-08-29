import axios from 'axios';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = async (values) => {
    const response = await axios.post('http://localhost:5000/api/v1/users/signup', values);
    console.log(response);
};


const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};

const Register = () => {

    return <>
        <h1>Register</h1>
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
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Username is required' }]}
            >
                <Input />
            </Form.Item>
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
                rules={[{ required: true, message: 'Password is required' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" label={null}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item label={null}>
                <Button type="success" htmlType="submit" style={{ backgroundColor: "#09883cff", color: "white" }}>
                    Register
                </Button>
            </Form.Item>
        </Form>
    </>
}

export default Register;