import React from 'react'
import {  Menu } from "antd";
import {
    LaptopOutlined,
    NotificationOutlined,
    NodeExpandOutlined,
    PicRightOutlined,
    SkinOutlined,
    BoldOutlined,
    ContactsOutlined,
    DashboardOutlined
    
  } from "@ant-design/icons";
import './index.style.less'
import { Link } from 'react-router-dom';
import IntlMessages from '../../../../utility/IntlMessages';

export default function AppNavbar() {
    const menuItem = [
        {
            key: 'dashboard',
            label: 'Dashboard',
            icon: <DashboardOutlined />
          },
        {
            key: 6,
        
            type:'group',
            label: "Catalog",
            children: [
              {
                key: 7,
                type: 'item',
                icon: <SkinOutlined />,
                label:<Link to="/catalog/category">Category</Link> ,
              },
              {
                key: 8,
                type: 'item',
                icon:<BoldOutlined />,
                label: <Link to="/catalog/brands">Brands</Link>,
              },
              {
                key: 9,
                type: 'item',
                icon:<LaptopOutlined/>,
                label:<Link to='/catalog/products'><IntlMessages id='products'/></Link> ,
              },
              {
                key: 10,
                type: 'item',
                icon:<LaptopOutlined/>,
                label:<Link to='/catalog/product/settings'>Product Settings</Link> ,
              }
            ],
          },
        {
          key: 1,
         
          type:'group',
          label: <IntlMessages id='cms'/>,
          children: [
            {
              key: 2,
              icon: <PicRightOutlined />,
              type: 'item',
              label: <Link to="/cms/slider">Slider</Link>
            },
            {
              key: 3,
              icon:<NotificationOutlined/>,
              type: 'item',
              label: "Offers",
            },
            {
              key: 4,
              icon:<NodeExpandOutlined />,
              type: 'item',
              label: "Services",
            },
            {
              key: 5,
              type: 'item',
              icon:<ContactsOutlined />,
              label: "Contact Us",
            },
          ],
        },
        
      ];
  return (
    <Menu
    mode="inline"
    className="app-main-sidebar-menu"
    defaultSelectedKeys={["1"]}
    defaultOpenKeys={["sub1"]}
    items={menuItem}
  />
  )
}
