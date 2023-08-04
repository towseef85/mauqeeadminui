import React, {useEffect, useState} from 'react';
import { Outlet } from 'react-router-dom'
import {Grid, Layout} from 'antd';
import { isEmpty } from '../../../utility/GlobalHelper';
import AppSidebar from './AppSidebar';
import AppHeader from './AppHeader';
import './index.style.less'

const {useBreakpoint} = Grid;
const {Content} = Layout;
export default function AppLayout() {
    const width = useBreakpoint();
    const [isCollapsed, setCollapsed] = useState(false);
    const onToggleSidebar = () => {
        setCollapsed(!isCollapsed);
      };
 
useEffect(() => {
 if (!isEmpty(width)) {
    if (width.xl) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  }
}, [width]);
  return (
    <Layout className='app-layout'>
        <AppSidebar
            collapsed={isCollapsed}
        />
         <Layout className='app-layout-main'>
            <AppHeader
            isCollapsed={isCollapsed}
            onToggleSidebar={onToggleSidebar}
            />
            <Content className='main-content-view'>
            <Outlet/>
            </Content>
         </Layout>
        
    </Layout>
  )
}
