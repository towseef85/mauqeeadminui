import React from "react";
import "./index.style.less";
import { Button, Table, Input, Space } from "antd";
import { BackwardOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import QueueAnim from 'rc-queue-anim';

function AppListView({
  btntitle,
  onClick,
  data,
  columns,
  hoverColor,
  className,
  icon,
  page,
  onChange,
  pagination,
  hasbackButton = false,
  ...rest
}) {
  const navigator = useNavigate()
  const columnsList =[{
    title:'#',
    dataIndex:'id',
    render:(j,i, index)=>(
        <>{index+1}</>
    )
    
  },
  ...columns
    
  ]
  return (
    <>
      <div className="apps-header">
        <div className="order-header">
          <div className="order-header-input-view">
            <Input type="search" />
          </div>
          <div className="order-header-right">
            <Space>

            <Button
              type="primary"
              onClick={onClick}
              icon={icon ? icon : <PlusCircleOutlined />}
            >
              {btntitle}
            </Button>
            {
              hasbackButton &&

            <Button
              type="default"
              onClick={()=>navigator(-1)}
              icon={<BackwardOutlined/>}
              >
                Go Back
              </Button>
            }
            </Space>

            {/* <AppPagination
              className="order-header-pagination"
              pageSize={10}
              count={10}
              page={page}
              onChange={onChange}
            /> */}
          </div>
        </div>
      </div>
      <div
        style={{
          paddingTop: 10,
          paddingBottom: 10,
        }}
        className="apps-content-container"
      >{
        data &&
        <QueueAnim
          component={Table}
          type="left"
          className={clsx(
            "table-responsive",
            { hoverColor: hoverColor },
            className
          )}
          columns={columnsList}
          dataSource={data}
          rowKey="id"
          
          {...rest}
        />
      }
      </div>
    </>
  );
}

export default React.memo(AppListView)
