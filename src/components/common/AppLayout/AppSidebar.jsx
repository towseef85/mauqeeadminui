import { Layout, Menu, theme } from "antd";
import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  PicRightOutlined,
  SkinOutlined,
} from "@ant-design/icons";
import AppNavbar from "./AppNav";

const { Sider } = Layout;
export default function AppSidebar({ collapsed }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider
      theme="light"
      breakpoint="lg"
      collapsible
      className="app-main-sidebar"
      collapsed={collapsed}
    >
      <div className="app-logo">
        <img src="/images/logo.png" style={{ height: "80px", width: "100%" }} />
      </div>
      <AppNavbar />
    </Sider>
  );
}
