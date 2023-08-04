import React from "react";
import { Dropdown, Layout, Menu } from "antd";
import { FiMoreVertical } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import AppLanguageSwitcher from "./AppLangSwitch";

export default function AppHeader({ isCollapsed, onToggleSidebar }) {
  const { Header } = Layout;

  return (
    <Header className="app-header">
      <a className="trigger" onClick={() => onToggleSidebar(!isCollapsed)}>
        <AiOutlineMenu />
      </a>

      <div className="header-search"></div>
      <div className="app-header-sectionDesktop">
        <AppLanguageSwitcher />
      </div>
    </Header>
  );
}
