import React, { useContext } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
/* Routerdom */
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { Access } from "./Access";
import { Queue } from "./Queue";
import { CreateTicket } from "./CreateTicket";
import { Desktop } from "./Desktop";
import { UiContext } from "../Context/UiContext";

const { Sider, Content } = Layout;

export const RouterPage = () => {

  const {hideMenu} = useContext( UiContext );


  return (
    <React.Fragment>
      <Router>
        <Layout style={{ height: "100vh" }}>
          <Sider collapsedWidth="0" breakpoint="md" hidden={hideMenu}>
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
              {/* Router switch */}
              <Switch>
                <Route exact path='/access' component={Access}/>
                <Route exact path='/queue' component={Queue}/>
                <Route exact path='/new-ticket' component={CreateTicket}/>
                <Route exact path='/desktop' component={Desktop}/>
                <Redirect to='/'/>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </React.Fragment>
  );
};
