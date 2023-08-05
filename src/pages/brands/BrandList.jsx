import React, { useState } from "react";
import AppListView from "../../components/common/AppListView";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Image, Space, Tag } from "antd";
import { EditOutlined, EyeOutlined } from "@ant-design/icons";

export default function BrandList({brandList, loading}) {

  console.log("brandList", brandList);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const onChange = (page) => {
    setPage(page);
  };
  const columns = [
    {
      title: "Image",
      dataIndex: "imageData",
      key:"imageData",
      render:(data)=>(
        <Image src={data} width={80}/>
      )
    },

    {
      title: "English Name",
      dataIndex: "engName",
      key: "engName",
    },
    
    {
      title: "Other Name",
      dataIndex: "otherName",
      key: "otherName",
    },
    {
      title: "Active",
      dataIndex: "published",
      key:"published",
      render:(data)=>(
        data ? <Tag color="blue">Yes</Tag> : <Tag color="red">No</Tag>
      )
    },
    {
      title: "Show On Homepage",
      dataIndex: "showOnHomepage",
      key:"showOnHomepage",
      render:(data)=>(
        data ? <Tag color="blue">Yes</Tag> : <Tag color="red">No</Tag>
      )
    },
    {
      title: "Actions",
      dataIndex: "id",
      key:"id",
      render:(data)=>(
        <Space>
          <Button onClick={()=>navigate(`create/${data}`)}  icon={<EditOutlined/>}/>
          <Button onClick={()=>navigate(`${data}`)}  icon={<EyeOutlined />}/>
        </Space>
      )
    }

  ];
  return (
 
    <AppListView
    btntitle="Add Brand"
    onClick={() => navigate("create")}
    columns={columns}
    data={brandList}
    page={page}
    onChange={onChange}
    loading={loading}
  />
 
  );
}
