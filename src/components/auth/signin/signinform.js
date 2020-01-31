import React from 'react';
import { Link } from 'next/link';
import { Button, Form, Icon, Input } from 'antd';

class SingInForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form style={{ width: '100%' }}>
        <Form.Item>
          {getFieldDecorator('Name', {
            initialValue: 'Admin',
            rules: [
              {
                required: true,
                message: 'Please input your nickname!',
                whitespace: true,
              },
            ],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Login"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            initialValue: 'Admin',
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
            ],
          })(
            <Input.Password
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />,
          )}
        </Form.Item>
        <Form.Item>
          <div className="span d-flex justify-content-between">
            <Link href="/public/forgot-password" className="link pl-sm-0">
              <a>Forgot password ?</a>
            </Link>
            <Button>Sign In</Button>
          </div>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedForm = Form.create({ name: 'sign-in' })(SingInForm);

export default WrappedForm;
