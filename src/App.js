import logo from './logo.png';
import './App.css';

import React from 'react';
import { Layout, Menu, Avatar, Button } from 'antd';
import {
  BarChartOutlined,
  CloudDownloadOutlined,
  FolderOpenOutlined,
  PlayCircleOutlined,
  FullscreenOutlined,
  ReadOutlined,
  DesktopOutlined,
  PartitionOutlined,
  RocketOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Sider, Header, Content, Footer } = Layout;


//const uriPrefix = "http://192.168.31.233";
const uriPrefix = "";

class App extends React.Component {
  apps = [
    {
      "name": "System",
      "uri": "http://192.168.31.233:9090",
      "icon": (<DesktopOutlined />)
    },
    {
      "name": "flood",
      "uri": "/flood/",
      "icon": (<CloudDownloadOutlined />)
    },
	  {
      "name": "plex",
      "uri": "http://192.168.31.233:32400",
      "icon": (<PlayCircleOutlined />)
    },
    {
      "name": "hass",
      "uri": "http://192.168.31.233:8123",
      "icon": (<CloudDownloadOutlined />)
    },
    {
      "name": "Clash",
      "uri": "http://192.168.31.1:9990/ui/razord/?host=192.168.31.1&port=9990&secret=clash#/proxies",
      "icon": (<RocketOutlined />)
    },
    {
      "name": "transmission",
      "uri": "http://192.168.31.233:9091",
      "icon": (<CloudDownloadOutlined />)
    },
    {
      "name": "ariang",
      "uri": "/ariang/",
      "icon": (<CloudDownloadOutlined />)
    },
    {
      "name": "router",
      "uri": "http://192.168.31.1",
      "icon": (<PartitionOutlined />)
    },
    {
      "name": "calibre",
      "uri": "http://192.168.31.233:10997",
      "icon": (<ReadOutlined />)
    },
    {
      "name": "grafana",
      "uri": "/grafana/",
      "icon": (<BarChartOutlined />)
    },
    {
      "name": "storage",
      "uri": "/storage/",
      "icon": (<FolderOpenOutlined />)
    },
    {
      "name": "treasure",
      "uri": "/treasure/",
      "icon": (<FolderOpenOutlined />)
    },
  ];

  state = {
    currentApp: this.apps[0]
  };

  handleClick = e => {
    console.log('click ', e);
    this.apps.find(app => app.name === e.key)
    this.setState({
      currentApp: this.apps.find(app => app.name === e.key)
    });
  };

  render() {
    const { currentApp } = this.state;
    const apps = this.apps;
    return (
      <>
        <Layout className="layout">
          {/* <Header style={{ position: 'fixed', zIndex: 1, width: '100%', height: "32px" }} > */}
          <Sider collapsible={true}>
            <div style={{textAlign: "center"}}>
            <Avatar src={logo}     size={64}
            alt="M" style={{textAlign: "center"}} />
            </div>
            <Menu
              inlineCollapsed={true}
              theme="dark" onClick={this.handleClick} selectedKeys={[currentApp.name]} mode="inline">

              {
                apps.map(app => (
                  <Menu.Item key={app.name} icon={app.icon}>
                    {app.name}
                  </Menu.Item>
                )
                )
              }
            </Menu>
              <div style={{textAlign: "center"}}>
            <Button 
            size="large"
            ghost={true}
            icon={(<FullscreenOutlined />)}
            href={uriPrefix + currentApp.uri}
            />
            </div>
          </Sider>
          {/* </Header> */}

          <Content style={{ padding: '0 0px' }}>
            <iframe
              title={currentApp.name} src={uriPrefix + currentApp.uri}
              style={{ width: "100%", height: window.innerHeight }}
            />
          </Content>
        </Layout>
      </>
    );
  }
}


export default App;
