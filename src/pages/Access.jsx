import React, { useState } from "react";
import { Form, Input, Button, InputNumber, Typography, Divider } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import { useHistory, Redirect } from "react-router-dom";
import { useHideMenu } from "../hooks/useHideMenu";
import { getDataUserStorage } from "../helpers/utils";

const { Title, Text } = Typography;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 14,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 14,
  },
};

export const Access = () => {
  useHideMenu(true);
  const [userData] = useState(getDataUserStorage());
  const history = useHistory();

  if(userData.agent && userData.desktop){
    return  <Redirect to="/desktop"/>
  }

  
  const onFinish = ({agent,desktop}) => {  
    localStorage.setItem('agent',agent);
    localStorage.setItem('desktop',desktop);
    history.push('/desktop')
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <React.Fragment>
      <Title level={2}>Access page</Title>
      <Text>Text your name and your desktop number</Text>
      <Divider />
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Agent"
          name="agent"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Desktop"
          name="desktop"
          rules={[
            {
              required: true,
              message: "Please input your desktop number",
            },
          ]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" shape="round">
            <SaveOutlined />
            Access to
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
};
