import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Link
}from 'react-router-dom';

import logo from './logo.svg';
import { Button, Layout, Menu, Breadcrumb, Icon, } from 'antd';
import './App.css';

import home from './components/home.js'
import news from './components/news.js'

const {
    Header, Content, Footer, Sider,
  } = Layout;

const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component {
    state = {
        current: '',
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    handleClick = (e) => {
        this.setState({
            current: e.key
        })
    }

    render() {
        return (
            <Router>
        <Layout style={{ minHeight: '100vh' }}>

            <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            >
            <div className="logo">
                <img src={logo} width="50" id="logo" alt="logo" />
            </div>
            <Menu 
                theme="dark" 
                defaultSelectedKeys={['1']} 
                mode="inline"
                onClick={this.handleClick}
                defaultSelectedKeys={[this.state.current]}
            >
                <Menu.Item key="1">
                    <Link to="/"><Icon type="home" />首页</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/news"><Icon type="read" />新闻中心</Link>
                </Menu.Item>
                <SubMenu
                key="sub1"
                title={<span><Icon type="user" /><span>User</span></span>}
                >
                    <Menu.Item key="3">Tom</Menu.Item>
                    <Menu.Item key="4">Bill</Menu.Item>
                    <Menu.Item key="5">Alex</Menu.Item>
                </SubMenu>
                <SubMenu
                key="sub2"
                title={<span><Icon type="team" /><span>Team</span></span>}
                >
                    <Menu.Item key="6">Team 1</Menu.Item>
                    <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="9">
                    <Icon type="file" />
                    <span>File</span>
                </Menu.Item>
            </Menu>
        
            </Sider>
            

            <Layout>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>

                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <Route exact path="/" component={home} />
                        <Route path="/news" component={news} />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Demo ©2019 Created by zlx
                </Footer>
            </Layout>
        </Layout>
        </Router>

         
        );
    }

}



export default SiderDemo;
