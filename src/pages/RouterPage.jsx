import React from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
/* Routerdom */
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Access } from "./Access";
import { Queue } from "./Queue";
import { CreateTicket } from "./CreateTicket";
import { Desktop } from "./Desktop";

const { Sider, Content } = Layout;

export const RouterPage = () => {
  return (
    <React.Fragment>
      <Router>
        <Layout style={{ height: "100vh" }}>
          <Sider>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to={'/access'}>Access</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to={'/queue'}>Queue</Link>                
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to={'/new-ticket'}>Create new ticket</Link>            
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              Content
              {/* Router switch */}
              <Switch>
              <Route path='/access' component={Access}/>
              <Route path='/queue' component={Queue}/>
              <Route path='/new-ticket' component={CreateTicket}/>
              <Route path='/desktop' component={Desktop}/>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </React.Fragment>
  );
};
